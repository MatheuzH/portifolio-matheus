import React, { useEffect, useMemo, useRef } from "react";

interface Props {
  className?: string;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const InteractiveParticles: React.FC<Props> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useMemo(() => [] as { x: number; y: number; vx: number; vy: number }[], []);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const motionOff = useRef(false);

  useEffect(() => {
    motionOff.current = prefersReducedMotion();
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", () => (mouse.current.active = false));

    let raf = 0;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };
    if (!motionOff.current) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initParticles = () => {
    particles.length = 0;
    const count = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 20000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
  };

  const draw = () => {
    const canvas = canvasRef.current!;
    const ctx = ctxRef.current!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Connective lines
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      // attraction to mouse
      if (mouse.current.active) {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.hypot(dx, dy);
        const force = Math.min(2 / Math.max(dist, 40), 0.05);
        p.vx += dx * force * 0.005;
        p.vy += dy * force * 0.005;
      }
      p.x += p.vx;
      p.y += p.vy;

      // bounce
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // node
      ctx.beginPath();
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--ring").trim()
        ? `hsl(${getComputedStyle(document.documentElement).getPropertyValue("--ring")} / 0.6)`
        : "rgba(180,180,255,0.6)";
      ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `hsl(${getComputedStyle(document.documentElement).getPropertyValue("--primary")} / ${1 - dist / 120})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className={"fixed inset-0 -z-10 pointer-events-none opacity-60 " + (className ?? "")}
      aria-hidden
    />
  );
};

export default InteractiveParticles;
