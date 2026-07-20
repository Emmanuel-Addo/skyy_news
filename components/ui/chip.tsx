import { cn } from "@/lib/utils";

interface ChipProps {
  label: string;
  addable?: boolean;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({
  label,
  addable = false,
  active = false,
  onClick,
  className,
}: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-body-sm transition-colors whitespace-nowrap",
        active
          ? "border-text-primary bg-text-primary text-bg-primary"
          : "border-border bg-bg-primary text-text-primary hover:bg-surface",
        className,
      )}
    >
      {addable && <span className="text-text-secondary">+</span>}
      {label}
    </button>
  );
}
