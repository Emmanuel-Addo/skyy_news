import { SidebarCard } from "@/components/ui/sidebar-card";
import { Button } from "@/components/ui/button";
import type { BiasBreakdown, FramingLabel } from "@/lib/types";

interface BiasAnalysisCardProps {
  bias: BiasBreakdown;
  biasLabel: FramingLabel;
  confidence?: number;
  sourceCount: number;
}

function BarSegment({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 text-body-sm text-text-secondary">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-divider">
        <div className={color} style={{ width: `${pct}%`, height: "100%" }} />
      </div>
      <span className="w-10 text-right text-body-sm">{pct}%</span>
    </div>
  );
}

export function BiasAnalysisCard({ bias, biasLabel, sourceCount }: BiasAnalysisCardProps) {
  const strongest =
    biasLabel === "left"
      ? bias.left
      : biasLabel === "right"
        ? bias.right
        : bias.center;

  const labelText = biasLabel.charAt(0).toUpperCase() + biasLabel.slice(1);

  return (
    <SidebarCard title="Bias Analysis">
      <p className="text-caption text-text-secondary">Overall Bias</p>
      <p className="mt-1 text-h2 text-accent">
        {labelText} {strongest}%
      </p>
      <p className="mt-1 text-body-sm text-accent">
        Based on {sourceCount} balanced sources
      </p>

      <div className="mt-4 space-y-2.5">
        <BarSegment label="Left" pct={bias.left} color="bg-bias-left" />
        <BarSegment label="Center" pct={bias.center} color="bg-bias-center" />
        <BarSegment label="Right" pct={bias.right} color="bg-bias-right" />
      </div>

      <p className="mt-4 text-body-sm text-text-secondary leading-relaxed">
        Political framing is estimated by AI based on article text analysis. It reflects how
        the story is presented, not an objective assessment of truth.
      </p>

      <Button variant="outline" size="sm" className="mt-4 w-full">
        How We Analyze Bias
      </Button>
    </SidebarCard>
  );
}
