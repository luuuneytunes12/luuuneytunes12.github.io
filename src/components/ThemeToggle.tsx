import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-secondary transition-all duration-300 hover:scale-105"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
          isDark ? 'left-8' : 'left-1'
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
