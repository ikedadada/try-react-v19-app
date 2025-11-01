import type { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  description: ReactNode;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="space-y-2 text-center md:text-left">
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
