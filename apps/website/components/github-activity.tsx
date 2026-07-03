"use client";

import { Card, CardHeader, CardContent } from "./card";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect, useRef } from "react";

export const GitHubActivity = () => {
  const username = "nazifishrak";
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setMounted(true);
    
    // Detect initial theme
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mounted && containerRef.current) {
      const timer = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  return (
    <Card>
      <CardHeader>GitHub Activity</CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans">Contributions this year</span>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors underline decoration-border/60 hover:decoration-primary underline-offset-4"
          >
            @{username}
          </a>
        </div>
        <div ref={containerRef} className="overflow-x-auto w-full min-h-[140px] py-2">
          <div className="w-max mx-auto">
            {mounted ? (
              <GitHubCalendar 
                username={username}
                colorScheme={theme}
                theme={{
                  light: ['#f5f5f4', '#dbeafe', '#93c5fd', '#3b82f6', '#1d4ed8'],
                  dark: ['#1c1917', '#1e293b', '#3b82f6', '#60a5fa', '#93c5fd'],
                }}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
              />
            ) : (
              <div className="text-xs text-muted-foreground font-mono animate-pulse py-8 text-center">
                Loading contribution graph...
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
