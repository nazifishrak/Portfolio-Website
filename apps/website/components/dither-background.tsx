"use client";

import { Dithering } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

/**
 * Reads the current theme from the <html> element's class list and
 * re-syncs whenever the ThemeToggle mutates it.
 */
function useIsDark() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sync with the actual DOM on first mount
    setIsDark(document.documentElement.classList.contains("dark"));

    // Watch for future class changes made by ThemeToggle
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

export function DitherBackground() {
  const isDark = useIsDark();

  return (
    <div className="absolute top-0 right-0 left-0 h-[50vh] max-h-[600px] w-full overflow-hidden pointer-events-none">
      {/* The WebGL dithering canvas — fills the banner area */}
      <Dithering
        style={{ height: "100%", width: "100%" }}
        colorBack={isDark ? "hsl(20, 14%, 4%)" : "hsl(60, 9%, 98%)"}
        colorFront={isDark ? "hsla(318, 45%, 89%, 0.17)" : "hsl(0, 0%, 85%)"}
        shape="simplex"
        type="4x4"
        pxSize={3}
        offsetX={0}
        offsetY={0}
        scale={0.7}
        rotation={0}
        speed={0.1}
      />
      {/* Fade-to-background gradient so the content below blends in */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
