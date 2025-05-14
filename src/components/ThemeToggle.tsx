import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playSoundEffect } from "./SoundEffects";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Set dark theme as default
    document.documentElement.classList.add("dark");
    setTheme("dark");
    
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    playSoundEffect("switch");
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="group rounded-full h-9 w-9 flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 animate-fade-in text-primary group-hover:animate-spin" />
      ) : (
        <Sun className="h-5 w-5 animate-fade-in text-primary group-hover:animate-spin" />
      )}
    </Button>
  );
}
