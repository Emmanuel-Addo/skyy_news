import { cn } from "@/lib/utils";

type BadgeVariant = "sentiment" | "framing" | "default";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  sentiment?: "positive" | "neutral" | "negative";
  framing?: "left" | "center" | "right" | "mixed" | "unclear";
  className?: string;
}

const sentimentColors: Record<string, string> = {
  positive: "bg-emerald-100 text-emerald-700",
  neutral: "bg-gray-100 text-gray-600",
  negative: "bg-red-100 text-red-700",
};

const framingColors: Record<string, string> = {
  left: "bg-red-100 text-red-700",
  center: "bg-gray-100 text-gray-600",
  right: "bg-blue-100 text-blue-700",
  mixed: "bg-purple-100 text-purple-700",
  unclear: "bg-gray-100 text-gray-500",
};

export function Badge({
  label,
  variant = "default",
  sentiment,
  framing,
  className,
}: BadgeProps) {
  let colorClass = "bg-surface text-text-secondary";
  if (variant === "sentiment" && sentiment) colorClass = sentimentColors[sentiment];
  if (variant === "framing" && framing) colorClass = framingColors[framing];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-caption font-medium",
        colorClass,
        className,
      )}
    >
      {label}
    </span>
  );
}
