import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "sm" | "md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-text-primary text-white hover:bg-text-primary/90 active:bg-text-primary/80",
  secondary:
    "bg-bg-secondary text-text-primary hover:bg-border active:bg-divider",
  outline:
    "border border-border text-text-primary bg-bg-primary hover:bg-surface active:bg-bg-secondary",
  text: "text-text-primary hover:bg-surface active:bg-bg-secondary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-body-sm rounded-md",
  md: "h-10 px-4 text-body-md rounded-md",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );
}
