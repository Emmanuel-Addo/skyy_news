"use client";

import Link from "next/link";
import { useSession, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function AuthButtons() {
  const { session } = useSession();

  if (session) {
    return (
      <SignOutButton>
        <Button variant="outline" size="sm">
          Sign Out
        </Button>
      </SignOutButton>
    );
  }

  return (
    <>
      <Link href="/sign-in">
        <Button variant="outline" size="sm">
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
