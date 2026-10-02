import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2",
        {
          "border-transparent bg-[var(--accent)] text-[var(--accent-foreground)] shadow hover:bg-[var(--accent)]/80":
            variant === "default",
          "border-transparent bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--muted)]/80":
            variant === "secondary",
          "text-[var(--foreground)] border-[var(--border)]": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
