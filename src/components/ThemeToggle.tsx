import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-14 h-7 rounded-full bg-secondary">
        <div className="absolute top-1 left-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
          <Sun className="w-3 h-3 text-primary-foreground" />
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-secondary transition-all duration-300 hover:scale-105"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
          isDark ? "left-8" : "left-1"
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-primary-foreground" />
        ) : (
          <Sun className="w-3 h-3 text-primary-foreground" />
        )}
      </div>
    </button>
  );
};
