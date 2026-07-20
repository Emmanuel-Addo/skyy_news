interface ArticleBodyProps {
  paragraphs: string[];
}

export function ArticleBody({ paragraphs }: ArticleBodyProps) {
  return (
    <div className="space-y-6">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-body-lg leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}
