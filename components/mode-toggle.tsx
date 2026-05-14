"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark";
    const x = e.clientX;
    const y = e.clientY;
    const doc = document as Document;

    // Modern browsers: circular ripple reveal from click position
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.documentElement.style.setProperty("--vt-x", `${x}px`);
      document.documentElement.style.setProperty("--vt-y", `${y}px`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => setTheme(next));
      return;
    }

    // Fallback: CSS transition on all elements
    doc.documentElement.classList.add("theme-transitioning");
    setTheme(next);
    setTimeout(() => {
      doc.documentElement.classList.remove("theme-transitioning");
    }, 950);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="relative w-12 h-6 rounded-full border border-border bg-muted transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <span
        className="absolute top-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-background shadow-sm border border-border transition-all duration-500"
        style={{ left: isDark ? "calc(100% - 1.375rem)" : "0.125rem" }}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-foreground" />
        ) : (
          <Sun className="w-3 h-3 text-foreground" />
        )}
      </span>
    </button>
  );
}
