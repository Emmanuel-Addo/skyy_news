# Prompt: Next.js Project Setup (Skyy News)

## Goal

Initialize the Skyy News Next.js project with all required dependencies, configuration, and base files so the design system, home page, and news details page prompts can build on a working foundation. This is the first step before implementing any UI.

## Skills read

- `AGENTS.md` — §1 (tech stack: Next.js, Tailwind CSS, shadcn/ui patterns), §21 (standards, TypeScript), §22 (checks: typecheck, lint, build).
- No feature skill applies yet (clerk/supabase/oxylabs/ai-sdk out of scope for project setup).

## Existing code inspected

- `lib/types.ts` — existing type definitions (BiasBreakdown, NewsArticleCard, etc.)
- `lib/utils.ts` — existing cn() helper (clsx + tailwind-merge)
- `prompts/design-system.md` — assumes Tailwind v4 with @theme tokens, Poppins font
- `prompts/home-page-ui.md` — assumes Next.js 16.2.10, React 19, Tailwind v4
- No package.json, next.config.js, or app/ directory exists

## Decisions / assumptions

- **Next.js version:** Use Next.js 16.x (as referenced in existing prompts)
- **React version:** Use React 19.x
- **Tailwind CSS:** Use Tailwind v4 with @theme tokens (as per design-system.md)
- **TypeScript:** Strict mode enabled
- **Package manager:** yarn
- **Base dependencies:** clsx, tailwind-merge (already in lib/utils.ts)
- **Scripts:** Add typecheck, lint, build, dev scripts per AGENTS.md §22

## Files likely to change / add

- `package.json` — project metadata (name: "skyy-news"), dependencies, scripts
- `next.config.ts` — Next.js configuration
- `tsconfig.json` — TypeScript configuration with @/* path alias
- `tailwind.config.ts` — Tailwind v4 configuration (if needed beyond @theme)
- `postcss.config.mjs` — PostCSS configuration for Tailwind
- `app/globals.css` — Tailwind v4 imports and @theme tokens
- `app/layout.tsx` — root layout with Poppins font
- `app/page.tsx` — placeholder home page
- `.env.example` — environment variable template for Skyy News (for reference)
- `.gitignore` — standard Next.js gitignore

## Implementation requirements

1. Initialize Next.js project with TypeScript, Tailwind CSS, ESLint
2. Install dependencies: clsx, tailwind-merge
3. Configure path alias @/* -> project root
4. Set up Tailwind v4 with @theme tokens from design-system.md
5. Create root layout with Poppins font (weights 400/500/600/700)
6. Create placeholder home page
7. Add required scripts: typecheck, lint, build, dev (using yarn)
8. Create .env.example with all required environment variables per AGENTS.md §21
9. Create .gitignore for Next.js projects

## Security requirements

- No secrets in client-side code
- .env.example should not contain actual secrets
- Environment variables properly scoped per AGENTS.md §21

## Acceptance criteria

- `yarn dev` starts successfully
- `yarn typecheck` passes
- `yarn lint` passes
- `yarn build` completes successfully
- Poppins font loads correctly
- Tailwind v4 @theme tokens are functional
- Path alias @/* works for imports
- No TypeScript errors
- No ESLint errors

## Checks to run

- `yarn typecheck`
- `yarn lint`
- `yarn build`

## Manual test steps

1. Run `yarn install` to install dependencies
2. Run `yarn dev` to start development server
3. Open http://localhost:3000 — verify placeholder page loads
4. Check browser console for any errors
5. Verify Poppins font is applied (inspect element)
6. Test path alias by importing from @/lib/utils in a component