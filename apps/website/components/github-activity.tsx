"use client";

import { Card, CardHeader, CardContent } from "./card";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

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
  
  return (
    <Card>
      <CardHeader>GitHub Activity</CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted">Contributions this year</span>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            @{username}
          </a>
        </div>
        <div className="overflow-x-auto min-h-[200px] flex items-center justify-center">
          {mounted ? (
            <GitHubCalendar 
              username={username}
              colorScheme={theme}
              blockSize={14}
              blockMargin={5}
              fontSize={14}
            />
          ) : (
            <div className="text-sm text-muted">Loading contribution graph...</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
