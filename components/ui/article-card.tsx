import Image from "next/image";
import { cn } from "@/lib/utils";
import { BiasMeter } from "./bias-meter";
import type { NewsArticleCard } from "@/lib/types";

interface ArticleCardProps {
  article: NewsArticleCard;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <div
      className={cn(
        "flex gap-4 rounded-lg border border-border bg-bg-primary p-4 shadow-sm",
        className,
      )}
    >
      <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-caption text-text-secondary">
            {article.category} &middot; {article.country}
          </p>
          <h3 className="mt-1 text-h4 line-clamp-2">{article.title}</h3>
        </div>
        <BiasMeter
          left={article.bias.left}
          center={article.bias.center}
          right={article.bias.right}
          compact
        />
      </div>
    </div>
  );
}
