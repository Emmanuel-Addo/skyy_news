import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { BiasMeter } from "@/components/ui/bias-meter";
import { Badge } from "@/components/ui/badge";
import { ArticleCard } from "@/components/ui/article-card";
import { MOCK_ARTICLES } from "@/lib/mock/news";

export default function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-[var(--container-app)] px-6 py-12">
      <h1 className="text-h1 mb-2">Design System</h1>
      <p className="mb-12 text-body-lg text-text-secondary">
        Skyy News component library and token reference
      </p>

      {/* Brand */}
      <section className="mb-12">
        <h2 className="text-h2 mb-4">Brand</h2>
        <div className="flex items-baseline gap-2">
          <span className="text-h1 font-bold">Skew</span>
          <span className="text-h2 text-text-secondary">News</span>
        </div>
      </section>

      {/* Color Swatches */}
      <section className="mb-12">
        <h2 className="text-h2 mb-4">Colors</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {[
            { name: "Text Primary", color: "bg-text-primary", hex: "#0D0D0F" },
            { name: "Text Secondary", color: "bg-text-secondary", hex: "#6B7280" },
            { name: "Surface", color: "bg-surface", hex: "#F6F6F6" },
            { name: "BG Primary", color: "bg-bg-primary border", hex: "#FFFFFF" },
            { name: "BG Secondary", color: "bg-bg-secondary", hex: "#F0F0F0" },
            { name: "Border", color: "bg-border", hex: "#E5E7EB" },
            { name: "Bias Left", color: "bg-bias-left", hex: "#B42318" },
            { name: "Bias Center", color: "bg-bias-center", hex: "#E5E7EB" },
            { name: "Bias Right", color: "bg-bias-right", hex: "#1D4ED8" },
            { name: "Accent", color: "bg-accent", hex: "#1D4ED8" },
          ].map((swatch) => (
            <div key={swatch.name}>
              <div className={`h-16 w-full rounded-lg ${swatch.color}`} />
              <p className="mt-1 text-body-sm font-medium">{swatch.name}</p>
              <p className="text-caption text-text-secondary">{swatch.hex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Type Scale */}
      <section className="mb-12">
        <h2 className="text-h2 mb-4">Type Scale</h2>
        <div className="space-y-3">
          <p className="text-h1">H1 &mdash; 32px / Bold / 1.2</p>
          <p className="text-h2">H2 &mdash; 24px / SemiBold / 1.3</p>
          <p className="text-h3">H3 &mdash; 20px / SemiBold / 1.3</p>
          <p className="text-h4">H4 &mdash; 16px / Medium / 1.4</p>
          <p className="text-body-lg">Body LG &mdash; 16px / Regular / 1.6</p>
          <p className="text-body-md">Body MD &mdash; 14px / Regular / 1.6</p>
          <p className="text-body-sm">Body SM &mdash; 13px / Regular / 1.6</p>
          <p className="text-caption">Caption &mdash; 11px / Regular / 1.4</p>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="text-h2 mb-4">Buttons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
        </div>
      </section>

      {/* Chips */}
      <section className="mb-12">
        <h2 className="text-h2 mb-4">Chips</h2>
        <div className="flex flex-wrap gap-2">
          <Chip label="Politics" addable />
          <Chip label="World" />
          <Chip label="Technology" active />
          <Chip label="Health" addable />
          <Chip label="Science" />
        </div>
      </section>

      {/* Bias Meter */}
      <section className="mb-12">
        <h2 className="text-h2 mb-4">Bias Meter</h2>
        <div className="max-w-xl space-y-6">
          <div>
            <p className="mb-2 text-body-sm text-text-secondary">Full labels with scale</p>
            <BiasMeter left={20} center={31} right={49} showScale />
          </div>
          <div>
            <p className="mb-2 text-body-sm text-text-secondary">Compact labels</p>
            <BiasMeter left={20} center={31} right={49} compact />
          </div>
          <div>
            <p className="mb-2 text-body-sm text-text-secondary">Balanced</p>
            <BiasMeter left={33} center={34} right={33} />
          </div>
          <div>
            <p className="mb-2 text-body-sm text-text-secondary">Left-leaning</p>
            <BiasMeter left={54} center={28} right={18} compact />
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="mb-12">
        <h2 className="text-h2 mb-4">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge label="Positive" variant="sentiment" sentiment="positive" />
          <Badge label="Neutral" variant="sentiment" sentiment="neutral" />
          <Badge label="Negative" variant="sentiment" sentiment="negative" />
          <Badge label="Left" variant="framing" framing="left" />
          <Badge label="Center" variant="framing" framing="center" />
          <Badge label="Right" variant="framing" framing="right" />
          <Badge label="Mixed" variant="framing" framing="mixed" />
          <Badge label="Unclear" variant="framing" framing="unclear" />
        </div>
      </section>

      {/* Article Card Example */}
      <section className="mb-12">
        <h2 className="text-h2 mb-4">Article Card</h2>
        <div className="max-w-xl">
          <ArticleCard article={MOCK_ARTICLES[0]} />
        </div>
      </section>
    </div>
  );
}
