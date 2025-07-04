import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
// import { useTheme } from "./ThemeContext";

export const ThemeToggle = () => {
  // const { isDark, toggleTheme } = useTheme();
  const isDark = true; // Replace with actual theme state

  return (
    <Button
      variant="outline"
      size="icon"
      // onClick={toggleTheme}
      className="fixed right-4 top-4 z-50 h-10 w-10 rounded-full border-2 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white/90 dark:border-gray-600 dark:bg-gray-800/80 dark:hover:bg-gray-800/90"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-yellow-500" />
      ) : (
        <Moon className="h-4 w-4 text-gray-700" />
      )}
    </Button>
  );
};
