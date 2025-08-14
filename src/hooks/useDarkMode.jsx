// src/hooks/useDarkMode.js
import { useLayoutEffect, useState } from "react";

export default function useDarkMode() {
  // Determine initial value: respect localStorage, then system preference
  const getInitial = () => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [dark, setDark] = useState(getInitial);

  // Apply the dark class immediately after mount and whenever it changes
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return [dark, setDark];
}
