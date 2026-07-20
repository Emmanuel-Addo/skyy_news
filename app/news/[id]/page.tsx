import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/top-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { NewsletterCta } from "@/components/layout/newsletter-cta";
import { ArticleHeader } from "@/components/article/article-header";
import { ArticleHero } from "@/components/article/article-hero";
import { BiasDistribution } from "@/components/article/bias-distribution";
import { ArticleBody } from "@/components/article/article-body";
import { RelatedStories } from "@/components/article/related-stories";
import { BiasAnalysisCard } from "@/components/article/sidebar/bias-analysis-card";
import { AiSummaryCard } from "@/components/article/sidebar/ai-summary-card";
import { SourceBreakdownCard } from "@/components/article/sidebar/source-breakdown-card";
import { getArticleDetail } from "@/lib/mock/news";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = getArticleDetail(id);

  if (!article) {
    notFound();
  }

  return (
    <>
      <TopBar />
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-[var(--container-app)] px-6 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
            {/* Main article column */}
            <article>
              <ArticleHeader
                category={article.category}
                country={article.country}
                title={article.title}
                author={article.author}
                publishedDate={article.publishedDate}
                readTime={article.readTime}
              />

              <div className="mt-6">
                <ArticleHero
                  imageUrl={article.imageUrl}
                  caption={article.imageCaption}
                  credit={article.imageCredit}
                />
              </div>

              <div className="mt-6">
                <BiasDistribution
                  bias={article.bias}
                  sourceCount={article.sourceCount}
                />
              </div>

              <div className="mt-8">
                <ArticleBody paragraphs={article.bodyParagraphs} />
              </div>

              <RelatedStories articles={article.related} />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <BiasAnalysisCard
                bias={article.bias}
                biasLabel={article.biasLabel}
                confidence={article.confidence}
                sourceCount={article.sourceCount}
              />

              <AiSummaryCard
                summaryPoints={article.summaryPoints}
                generatedDate={article.summaryGenerated}
                readTime={article.summaryReadTime}
              />

              <SourceBreakdownCard
                sourceCount={article.sourceCount}
                topSources={article.topSources}
              />
            </aside>
          </div>
        </div>

        <NewsletterCta />
      </main>

      <SiteFooter />
    </>
  );
}
