import { SidebarCard } from "@/components/ui/sidebar-card";
import { Button } from "@/components/ui/button";
import type { SourceRef } from "@/lib/types";

interface SourceBreakdownCardProps {
  sourceCount: number;
  topSources: SourceRef[];
}

const leanColor: Record<string, string> = {
  left: "text-bias-left",
  center: "text-text-secondary",
  right: "text-bias-right",
};

export function SourceBreakdownCard({ sourceCount, topSources }: SourceBreakdownCardProps) {
  const leftCount = topSources.filter((s) => s.bias === "left").length;
  const centerCount = topSources.filter((s) => s.bias === "center").length;
  const rightCount = topSources.filter((s) => s.bias === "right").length;

  function Row({ label, count, color }: { label: string; count: number; color: string }) {
    const pct = sourceCount > 0 ? Math.round((count / sourceCount) * 100) : 0;
    return (
      <div className="flex items-center justify-between text-body-sm">
        <span className="text-text-secondary">{label}</span>
        <span className={color}>
          {count} ({pct}%)
        </span>
      </div>
    );
  }

  return (
    <SidebarCard title="Source Breakdown">
      <p className="text-body-sm font-medium">{sourceCount} Total Sources</p>

      <div className="mt-3 space-y-1.5">
        <Row label="Left" count={leftCount} color="text-bias-left" />
        <Row label="Center" count={centerCount} color="text-text-secondary" />
        <Row label="Right" count={rightCount} color="text-bias-right" />
      </div>

      {topSources.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-caption font-medium text-text-secondary uppercase tracking-wider">
            Top Sources / Bias
          </p>
          <div className="space-y-1.5">
            {topSources.map((src) => (
              <div key={src.name} className="flex items-center justify-between text-body-sm">
                <span>{src.name}</span>
                <span className={leanColor[src.bias]}>
                  {src.bias.charAt(0).toUpperCase() + src.bias.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button variant="outline" size="sm" className="mt-4 w-full">
        View All Sources
      </Button>
    </SidebarCard>
  );
}
