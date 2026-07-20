export function TopBar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full bg-text-primary text-caption text-gray-400">
      <div className="mx-auto flex max-w-[var(--container-app)] items-center justify-between px-6 py-2">
        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:text-white">Browser Extension</span>
          <span className="flex items-center gap-2">
            Theme:
            <span className="cursor-pointer font-medium text-white">Light</span>
            <span className="cursor-pointer hover:text-white">Dark</span>
            <span className="cursor-pointer hover:text-white">Auto</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>{today}</span>
          <span className="cursor-pointer hover:text-white">Set Location</span>
          <span className="flex items-center gap-1 cursor-pointer hover:text-white">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M1 7h12M7 1c2 2 3 4 3 6s-1 4-3 6M7 1c-2 2-3 4-3 6s1 4 3 6" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            International Edition
          </span>
        </div>
      </div>
    </div>
  );
}
