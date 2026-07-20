import { RelatedStoryCard } from "@/components/ui/related-story-card";
import type { NewsArticleCard } from "@/lib/types";

interface RelatedStoriesProps {
  articles: NewsArticleCard[];
}

export function RelatedStories({ articles }: RelatedStoriesProps) {
  const capped = articles.slice(0, 5);

  if (capped.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-h2 mb-6">Related Stories</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {capped.map((article) => (
          <RelatedStoryCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
