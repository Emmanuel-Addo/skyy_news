"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { BiasMeter } from "./bias-meter";
import type { NewsArticleCard } from "@/lib/types";

interface NewsCardProps {
  article: NewsArticleCard;
  className?: string;
}

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white drop-shadow">
      <circle cx="10" cy="10" r="9" fill="rgba(0,0,0,0.4)" />
      <path d="M10 9v5M10 7v0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function NewsCard({ article, className }: NewsCardProps) {
  const { session } = useSession();
  const router = useRouter();

  function handleClick(e: React.MouseEvent) {
    if (!session) {
      e.preventDefault();
      router.push("/sign-in");
    }
  }

  return (
    <Link
      href={`/news/${article.id}`}
      onClick={handleClick}
      className={cn(
        "group block overflow-hidden rounded-lg border border-border bg-bg-primary shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute right-2 top-2">
          <InfoIcon />
        </div>
      </div>

      <div className="p-4">
        <p className="text-caption text-text-secondary">
          {article.source ?? article.category} &middot; {article.country}
        </p>

        <h3 className="mt-1 text-h3 line-clamp-2 leading-tight group-hover:text-accent">
          {article.title}
        </h3>

        <div className="mt-3">
          <BiasMeter
            left={article.bias.left}
            center={article.bias.center}
            right={article.bias.right}
            compact
          />
        </div>

        <div className="mt-2 flex items-center justify-between text-caption text-text-secondary">
          <span>{article.sources} sources</span>
          {article.publishedDate && <span>{article.publishedDate}</span>}
        </div>
      </div>
    </Link>
  );
}
