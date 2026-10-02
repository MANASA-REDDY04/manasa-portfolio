import * as React from "react";
import { cn } from "@/lib/utils";

import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold tracking-widest uppercase transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] disabled:pointer-events-none disabled:opacity-50 group",
          {
            "bg-[var(--accent)] text-[var(--accent-foreground)] hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]":
              variant === "default",
            "border border-[var(--border)] bg-transparent hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] active:scale-95":
              variant === "outline",
            "hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]":
              variant === "ghost",
            "text-[var(--muted-foreground)] hover:text-[var(--accent)] rounded-none relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--accent)] after:transition-all hover:after:w-full":
              variant === "link",
            "h-12 px-6": size === "default",
            "h-9 px-4 text-xs": size === "sm",
            "h-14 px-10 text-base": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
