import Link from "next/link";
import { Button } from "@/components/ui/button";

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary">
      <div className="mx-auto flex max-w-[var(--container-app)] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button type="button" className="text-text-primary lg:hidden">
            <HamburgerIcon />
          </button>
          <Link href="/" className="flex items-baseline gap-1">
            <span className="text-h2 font-bold">Skew</span>
            <span className="text-body-md text-text-secondary">News</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="relative text-body-md font-medium text-text-primary">
            Home
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-text-primary" />
          </Link>
          <Link href="/" className="relative text-body-md text-text-secondary hover:text-text-primary">
            <span className="relative">
              For You
              <span className="absolute -right-2 -top-1 h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          </Link>
          <Link href="/" className="text-body-md text-text-secondary hover:text-text-primary">
            Local
          </Link>
          <Link href="/" className="text-body-md text-text-secondary hover:text-text-primary">
            Blindspot
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm">Subscribe</Button>
          <Button variant="outline" size="sm">Login</Button>
        </div>
      </div>
    </header>
  );
}
