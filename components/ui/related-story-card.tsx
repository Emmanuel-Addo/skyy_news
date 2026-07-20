import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NewsArticleCard } from "@/lib/types";

interface RelatedStoryCardProps {
  article: NewsArticleCard;
  className?: string;
}

export function RelatedStoryCard({ article, className }: RelatedStoryCardProps) {
  return (
    <Link
      href={`/news/${article.id}`}
      className={cn(
        "group flex gap-3 rounded-lg border border-border bg-bg-primary p-3 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-caption text-text-secondary">
          {article.category} &middot; {article.country}
        </p>
        <h4 className="mt-0.5 text-body-sm font-medium line-clamp-2 group-hover:text-accent">
          {article.title}
        </h4>
        {article.publishedDate && (
          <p className="mt-0.5 text-caption text-text-secondary">
            {article.publishedDate}
          </p>
        )}
      </div>
    </Link>
  );
}
