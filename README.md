## Introduction

Skyy News is a full-stack AI news platform that scrapes real articles from multiple sources, analyzes each one for sentiment and political framing, and surfaces a bias breakdown before you ever open the story. Every article card shows a bias metric; every details page shows the full AI-estimated framing, and a pgvector-powered Related Articles section connects stories by meaning instead of shared keywords, so the whole feed refreshes itself every hour with nobody at the keyboard.

Skyy News is also built with Vibe Engineering: an AGENTS.md file defines the project's rules, architecture, and data model once, so the AI coding agent reads it before every feature, drafts its own implementation prompt, and only writes code after you approve it. Every route, page, and pipeline in this repo was shipped through that same prompt → approve → build loop.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 50k+ members. It's a place where people help each other out.

## Tech Stack

- **Next.js** is a production-ready React framework offering server-side rendering, the App Router, and API routes. It powers Skyy News's full stack, from the authenticated UI to the scraping and analysis API endpoints.

- **TypeScript** is a strongly typed superset of JavaScript that adds static type definitions across the codebase, keeping the data model, Supabase queries, and AI-validated analysis output type-safe end to end.

- **Tailwind CSS** is a utility-first CSS framework used to build Skyy News's responsive design system, from article cards to the bias breakdown UI, directly in markup.

- **Supabase** is the Postgres-based backend that acts as Skyy News's single source of truth. It stores sources, articles, AI analyses, and scraping logs, and its pgvector extension powers the semantic Related Articles search.

- **Clerk** is a complete authentication and user-management platform. It provides sign-in, sign-up, middleware, and protected routes, so identity is fully handled without hand-rolled auth screens or session logic.

- **Oxylabs** is a web data platform whose Web Scraper API gives uninterrupted access to real news homepages, and whose Scheduler runs those fetches on a recurring basis, powering Skyy News's hourly scrape.

- **Vercel AI SDK** is used with Google Gemini to run structured article analysis — sentiment, framing labels, framing percentages, and a neutral summary — validated with Zod before it's ever saved.

- **Google Gemini** powers both the article analysis calls and embeddings that pgvector uses to find related stories by meaning.

- **PostHog** is the product analytics and session replay layer, used here to move beyond dashboards toward self-driving insights: agents that read product data and can open a pull request with a fix attached.

- **Vercel Cron** triggers Skyy News's pipeline route on a schedule, processing completed Oxylabs scrapes and running AI analysis automatically, hour after hour, once deployed.

## Features

- **Real Scraped News Feed:** A home page of real articles pulled from configured sources, with a bias metric shown right on every card.

- **AI Bias & Sentiment Analysis:** Each article is scored for sentiment, an AI-estimated political framing label, and left / center / right percentages that always add up to 100 — clearly disclosed as an estimate, not objective truth.

- **News Details Page:** Full article view with the AI-generated summary, sentiment, framing breakdown, framing notes, and loaded terms for the story.

- **Related Articles by Meaning:** A pgvector-powered semantic search that surfaces similar stories by what they're actually about, not by shared keywords or source.

- **Authentication:** Clerk-powered sign-in and sign-up, middleware-protected routes, and redirect handling, with the home feed staying public.

- **Fully Automated Pipeline:** Oxylabs Scheduler scrapes active sources hourly, and Vercel Cron processes and analyzes the results 15 minutes later — fresh, bias-scored news with no manual trigger.

- **Self-Driving Analytics:** PostHog session replay and event tracking, wired up to read product data and surface (or even draft fixes for) issues automatically.

And many more, including code architecture and reusability.

## Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- Yarn (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/your-username/skyy_news.git
cd skyy_news
```

### Installation

Install the project dependencies using yarn:

```bash
yarn install
```

### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

OXY_WSA_USERNAME=
OXY_WSA_PASSWORD=
SKYY_ADMIN_SECRET=

GOOGLE_GENERATIVE_AI_API_KEY=
ANALYSIS_BATCH_SIZE=

CRON_SECRET=
```

Replace the placeholder values with your real credentials. You can get these by signing up at: Clerk, Supabase, Oxylabs, Google AI Studio, PostHog.

### Set Up the Database

1. Open the Supabase dashboard, go to the SQL editor
2. Paste the contents of `supabase/schema.sql` and run it to create the sources, articles, article_analyses, logs, oxylabs_schedules, and oxylabs_schedule_runs tables (plus the pgvector embedding column and cosine index)
3. Paste the contents of `supabase/seed.sql` and run it to seed a handful of active news sources

### Running the Project

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

### Trigger the Pipeline Manually

With the dev server running, scrape and analyze on demand:

```bash
curl -X POST http://localhost:3000/api/scrape \
  -H "Content-Type: application/json" \
  -H "x-skyy-admin-secret: YOUR_SECRET" \
  -d '{}'

curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -H "x-skyy-admin-secret: YOUR_SECRET" \
  -d '{}'
```

### Automate It (Oxylabs Scheduler + Vercel Cron)

Once deployed, Skyy News keeps itself fresh on its own:

```bash
curl -X POST http://localhost:3000/api/oxylabs/schedules \
  -H "Content-Type: application/json" \
  -H "x-skyy-admin-secret: YOUR_SECRET"
```

This registers one Oxylabs schedule per active source. `vercel.json` schedules `/api/cron/pipeline` for 15 minutes past every hour — Vercel Cron only runs once deployed, and the route is protected in production by a `CRON_SECRET` set in your Vercel project settings (not in `.env.local`).
