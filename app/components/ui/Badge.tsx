import { cn } from "../../../lib/utils";

const badgeVariants = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-muted text-muted-foreground",
};

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof badgeVariants;
};

export function Badge({ children, className = "", variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
