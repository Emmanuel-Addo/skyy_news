import Link from "next/link";

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-400 hover:text-white cursor-pointer transition-colors">
      <path d={path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-text-primary text-gray-400">
      <div className="mx-auto max-w-[var(--container-app)] px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-h2 font-bold text-white">Skew</span>
              <span className="text-body-md text-gray-400">News</span>
            </div>
            <p className="mt-3 text-body-sm text-gray-500">
              Balanced news coverage with AI-powered bias analysis.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-body-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-body-sm">
              <li><Link href="/" className="hover:text-white">About</Link></li>
              <li><Link href="/" className="hover:text-white">Careers</Link></li>
              <li><Link href="/" className="hover:text-white">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-body-sm font-semibold text-white">Help</h4>
            <ul className="space-y-2 text-body-sm">
              <li><Link href="/" className="hover:text-white">Contact</Link></li>
              <li><Link href="/" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/" className="hover:text-white">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-body-sm font-semibold text-white">Connect</h4>
            <div className="flex gap-3">
              <SocialIcon label="Twitter" path="M18.258 3.266a7.5 7.5 0 01-2.166.6 3.78 3.78 0 001.658-2.08 7.56 7.56 0 01-2.395.916A3.78 3.78 0 0012.3 5.01a10.72 10.72 0 01-7.8-3.958 3.78 3.78 0 001.17 5.045A3.77 3.77 0 011.4 6.1v.05a3.78 3.78 0 003.033 3.705 3.78 3.78 0 01-1.705.065 3.78 3.78 0 003.528 2.624A7.58 7.58 0 010 15.01a10.67 10.67 0 005.782 1.694c6.94 0 10.73-5.752 10.73-10.73 0-.164-.004-.328-.011-.49a7.65 7.65 0 001.898-1.962z" />
              <SocialIcon label="Facebook" path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              <SocialIcon label="LinkedIn" path="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-caption text-gray-500">
          &copy; {new Date().getFullYear()} Skew News. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
