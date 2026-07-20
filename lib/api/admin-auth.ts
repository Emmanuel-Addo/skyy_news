import "server-only";

import { timingSafeEqual } from "node:crypto";

/**
 * Shared admin-secret guard for action routes (AGENTS.md §15). Routes that
 * start or mutate work require the `x-skyy-admin-secret` header to match
 * `SKYY_ADMIN_SECRET`. The secret is server-only and never appears in a URL or
 * response body.
 */

const HEADER = "x-skyy-admin-secret";

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/** True when the request carries a valid admin secret. */
export function isAuthorized(request: Request): boolean {
  const expected = process.env.SKYY_ADMIN_SECRET;
  if (!expected) return false;

  const provided = request.headers.get(HEADER);
  if (!provided) return false;

  return safeEqual(provided, expected);
}
