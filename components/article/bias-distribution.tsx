import { BiasMeter } from "@/components/ui/bias-meter";
import type { BiasBreakdown } from "@/lib/types";

interface BiasDistributionProps {
  bias: BiasBreakdown;
  sourceCount: number;
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-secondary">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7v4M8 5.5v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BiasDistribution({ bias, sourceCount }: BiasDistributionProps) {
  return (
    <div className="rounded-lg border border-border bg-bg-primary p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-body-sm font-medium">Bias Distribution</span>
        <InfoIcon />
      </div>
      <BiasMeter left={bias.left} center={bias.center} right={bias.right} />
      <p className="mt-3 text-caption text-text-secondary">{sourceCount} sources</p>
    </div>
  );
}
