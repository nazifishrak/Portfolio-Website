import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={`group rounded-2xl border border-border bg-background/50 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out hover:border-primary/20 ${className}`}
  >
    {children}
  </div>
);

type CardHeaderProps = {
  children: ReactNode;
};

export const CardHeader = ({ children }: CardHeaderProps) => (
  <h3 className="text-base font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{children}</h3>
);

type CardContentProps = {
  children: ReactNode;
};

export const CardContent = ({ children }: CardContentProps) => (
  <div className="space-y-3">{children}</div>
);
