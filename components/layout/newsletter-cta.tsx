import { Button } from "@/components/ui/button";

export function NewsletterCta() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[var(--container-app)] px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-bg-primary p-8 shadow-sm md:flex-row">
          <div>
            <h2 className="text-h2">Stay Informed. Stay Balanced.</h2>
            <p className="mt-2 text-body-md text-text-secondary">
              Get the top stories with AI-powered bias analysis delivered to your inbox.
            </p>
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-border bg-bg-primary px-4 py-2 text-body-md focus:outline-none focus:ring-2 focus:ring-accent md:w-64"
            />
            <Button variant="primary" size="md">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
