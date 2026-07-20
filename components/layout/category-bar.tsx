"use client";

import { Chip } from "@/components/ui/chip";

const CATEGORIES = [
  "Politics",
  "World",
  "Business",
  "Technology",
  "Science",
  "Health",
  "Climate",
  "Economy",
  "Soccer",
  "Environment",
];

export function CategoryBar() {
  return (
    <div className="border-b border-border bg-bg-primary">
      <div className="mx-auto max-w-[var(--container-app)] px-6 py-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <Chip key={cat} label={cat} addable />
          ))}
        </div>
      </div>
    </div>
  );
}
