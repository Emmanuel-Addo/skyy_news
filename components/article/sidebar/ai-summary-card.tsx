import { SidebarCard } from "@/components/ui/sidebar-card";
import { Button } from "@/components/ui/button";

interface AiSummaryCardProps {
  summaryPoints: string[];
  generatedDate: string;
  readTime: string;
}

export function AiSummaryCard({ summaryPoints, generatedDate, readTime }: AiSummaryCardProps) {
  return (
    <SidebarCard title="AI Summary">
      <p className="text-caption text-text-secondary">
        Generated {generatedDate} &middot; {readTime}
      </p>

      <ul className="mt-3 space-y-2">
        {summaryPoints.map((point, i) => (
          <li key={i} className="flex gap-2 text-body-sm leading-relaxed">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-secondary" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-caption text-text-secondary">
        AI summaries can make mistakes.
      </p>

      <Button variant="outline" size="sm" className="mt-3 w-full">
        Provide Feedback
      </Button>
    </SidebarCard>
  );
}
