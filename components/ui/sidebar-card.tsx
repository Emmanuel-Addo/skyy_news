import { cn } from "@/lib/utils";

interface SidebarCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-secondary">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7v4M8 5.5v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SidebarCard({ title, children, className }: SidebarCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-bg-primary p-5 shadow-sm",
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-2">
        <h3 className="text-h4">{title}</h3>
        <InfoIcon />
      </div>
      {children}
    </div>
  );
}
