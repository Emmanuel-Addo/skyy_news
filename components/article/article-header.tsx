interface ArticleHeaderProps {
  category: string;
  country: string;
  title: string;
  author: string;
  publishedDate: string;
  readTime: string;
}

function BookmarkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3h10a1 1 0 011 1v13l-6-3-6 3V4a1 1 0 011-1z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="15" cy="4" r="2.5" /><circle cx="5" cy="10" r="2.5" /><circle cx="15" cy="16" r="2.5" />
      <path d="M7.2 8.8l5.6-3.6M7.2 11.2l5.6 3.6" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <circle cx="4" cy="10" r="1.5" /><circle cx="10" cy="10" r="1.5" /><circle cx="16" cy="10" r="1.5" />
    </svg>
  );
}

export function ArticleHeader({
  category,
  country,
  title,
  author,
  publishedDate,
  readTime,
}: ArticleHeaderProps) {
  return (
    <div>
      <p className="text-caption text-text-secondary">
        {category} &middot; {country}
      </p>
      <h1 className="mt-2 text-h1 leading-tight">{title}</h1>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-body-md text-text-secondary">
          By {author} &middot; {publishedDate} &middot; {readTime}
        </p>
        <div className="flex items-center gap-3 text-text-secondary">
          <button type="button" className="hover:text-text-primary transition-colors"><BookmarkIcon /></button>
          <button type="button" className="hover:text-text-primary transition-colors"><ShareIcon /></button>
          <button type="button" className="hover:text-text-primary transition-colors"><MoreIcon /></button>
        </div>
      </div>
    </div>
  );
}
