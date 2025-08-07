import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <Button
      variant="soft"
      size="icon"
      aria-label="Alternar tema"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="hover-scale"
    >
      {current === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
