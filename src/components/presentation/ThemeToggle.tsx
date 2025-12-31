import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-all duration-300 shadow-soft"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 md:w-5 md:h-5" />
      ) : (
        <Sun className="w-4 h-4 md:w-5 md:h-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
