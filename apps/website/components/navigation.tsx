"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PulsingBorder } from "@paper-design/shaders-react";
import { useEffect, useState, useRef } from "react";

function useIsDark() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
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

/**
 * Ensures the WebGL canvas has enough pixel padding (e.g. 12px) to prevent glow clipping,
 * but computes the EXACT proportional margins for the shader so the glowing path
 * traces the interior element perfectly instead of distorting the aspect ratio.
 */
function usePixelPerfectShaderMargins(pixelInset: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [margins, setMargins] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const update = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect && rect.width > 0 && rect.height > 0) {
        setMargins({
          x: pixelInset / rect.width,
          y: pixelInset / rect.height,
        });
      }
    };
    
    update();
    const observer = new ResizeObserver(update);
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [pixelInset]);

  return { ref, margins };
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Uses", href: "/uses" },
];

export const Navigation = () => {
  const pathname = usePathname();
  const isDark = useIsDark();
  
  // We make the canvas 12px larger than the pill on all sides so the glow doesn't clip
  const INSET_PX = 12;
  const { ref, margins } = usePixelPerfectShaderMargins(INSET_PX);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="relative">
        <div
          ref={ref}
          className="absolute pointer-events-none"
          style={{ inset: `-${INSET_PX}px` }}
        >
          {margins.x > 0 && (
            <PulsingBorder
              width="100%"
              height="100%"
              colors={["#0dc1fd", "#d915ef", "#ff3f2ecc"]}
              colorBack="rgba(0,0,0,0)"
              roundness={1}
              thickness={0.06}
              softness={0.75}
              aspectRatio="auto"
              intensity={0.25}
              bloom={0.4}
              spots={5}
              spotSize={0.5}
              pulse={0.3}
              smoke={0.3}
              smokeSize={0.6}
              speed={1}
              scale={1}
              margin={0}
              marginLeft={margins.x}
              marginRight={margins.x}
              marginTop={margins.y}
              marginBottom={margins.y}
            />
          )}
        </div>

        {/* Nav pill sits on top of the border canvas */}
        <div className="relative flex gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-muted hover:text-foreground hover:bg-border/50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
