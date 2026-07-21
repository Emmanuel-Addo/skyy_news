"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSession, useClerk, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function AuthButtons() {
  const { session } = useSession();
  const { signOut } = useClerk();
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (session) {
    const initial = user?.firstName?.[0]?.toUpperCase() ?? user?.emailAddresses?.[0]?.emailAddress?.[0]?.toUpperCase() ?? "?";

    return (
      <div className="relative" ref={dropdownRef}>
        {/* Avatar circle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Account menu"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-text-primary !text-white font-semibold text-sm transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {initial}
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 top-10 z-50 min-w-[160px] rounded-lg border border-border bg-bg-primary p-1 shadow-md">
            {user?.firstName && (
              <p className="px-3 py-2 text-body-sm font-medium text-text-primary truncate border-b border-divider mb-1">
                Hi, {user.firstName} 👋
              </p>
            )}
            <button
              type="button"
              onClick={() => signOut({ redirectUrl: "/" })}
              className="w-full rounded-md px-3 py-2 text-left text-body-sm text-text-primary hover:bg-surface active:bg-bg-secondary transition-colors"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Link href="/sign-in">
        <Button variant="primary" size="sm">
          Login
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button variant="primary" size="sm">
          Sign Up
        </Button>
      </Link>
    </>
  );
}
