import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type DemoColumnVariant = "before" | "after";

interface DemoColumnProps {
  label: string;
  variant?: DemoColumnVariant;
  children: ReactNode;
}

export function DemoColumn({ label, variant = "before", children }: DemoColumnProps) {
  const isAfter = variant === "after";
  return (
    <div className="space-y-3">
      <Badge
        variant={isAfter ? "default" : "outline"}
        className={cn(
          "px-3 py-1 text-xs font-semibold uppercase tracking-wide",
          !isAfter && "text-muted-foreground",
        )}
      >
        {label}
      </Badge>
      <div className="space-y-3">
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  );
}
