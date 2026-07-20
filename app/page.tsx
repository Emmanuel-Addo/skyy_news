import { TopBar } from "@/components/layout/top-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { CategoryBar } from "@/components/layout/category-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { NewsCard } from "@/components/ui/news-card";
import { MOCK_ARTICLES } from "@/lib/mock/news";

export default function Home() {
  return (
    <>
      <TopBar />
      <SiteHeader />
      <CategoryBar />

      <main className="flex-1">
        <div className="mx-auto max-w-[var(--container-app)] px-6 py-8">
          <h1 className="text-h1 mb-8">Top News</h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MOCK_ARTICLES.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
