import { cn } from "@/lib/utils";

interface BiasMeterProps {
  left: number;
  center: number;
  right: number;
  showScale?: boolean;
  compact?: boolean;
  className?: string;
}

function segmentLabel(side: "left" | "center" | "right", pct: number, compact: boolean): string {
  if (compact) {
    if (side === "left") return `L ${pct}%`;
    return `${side.charAt(0).toUpperCase() + side.slice(1)} ${pct}%`;
  }
  return `${side.charAt(0).toUpperCase() + side.slice(1)} ${pct}%`;
}

export function BiasMeter({
  left,
  center,
  right,
  showScale = false,
  compact = false,
  className,
}: BiasMeterProps) {
  const total = left + center + right;

  return (
    <div className={cn("w-full", className)}>
      <div className="relative flex h-2 w-full overflow-hidden rounded-full bg-divider">
        <div
          className="bg-bias-left"
          style={{ width: `${(left / total) * 100}%` }}
        />
        <div
          className="bg-bias-center"
          style={{ width: `${(center / total) * 100}%` }}
        />
        <div
          className="bg-bias-right"
          style={{ width: `${(right / total) * 100}%` }}
        />
      </div>

      {showScale && (
        <div className="mt-1 flex justify-between text-caption text-text-secondary">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
      )}

      <div className="mt-1.5 flex items-center gap-3 text-body-sm">
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-bias-left" />
          {segmentLabel("left", left, compact)}
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-bias-center" />
          {segmentLabel("center", center, compact)}
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-bias-right" />
          {segmentLabel("right", right, compact)}
        </span>
      </div>
    </div>
  );
}
