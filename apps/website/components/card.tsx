import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={`group rounded-2xl border border-dashed border-stone-300 dark:border-stone-800 bg-transparent p-6 hover:border-stone-400 dark:hover:border-stone-700 transition-colors duration-500 ease-out ${className}`}
  >
    {children}
  </div>
);

type CardHeaderProps = {
  children: ReactNode;
};

export const CardHeader = ({ children }: CardHeaderProps) => (
  <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-500 mb-4">
    {children}
  </h3>
);

type CardContentProps = {
  children: ReactNode;
};

export const CardContent = ({ children }: CardContentProps) => (
  <div className="space-y-3">{children}</div>
);
