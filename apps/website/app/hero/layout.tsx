import type { ReactNode } from "react";

type HeroLayoutProps = {
  children: ReactNode;
};

/**
 * The hero page needs a full-bleed, unconstrained layout —
 * bypass the root layout's <main> max-width / padding wrapper.
 */
export default function HeroLayout({ children }: HeroLayoutProps) {
  return (
    <div className="fixed inset-0 z-50">
      {children}
    </div>
  );
}
