import Image from "next/image";

interface ArticleHeroProps {
  imageUrl: string;
  caption: string;
  credit: string;
}

export function ArticleHero({ imageUrl, caption, credit }: ArticleHeroProps) {
  return (
    <figure>
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={imageUrl}
          alt={caption}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
          priority
        />
      </div>
      <figcaption className="mt-2 flex flex-col gap-0.5 text-caption text-text-secondary">
        <span>{caption}</span>
        <span>Photo: {credit}</span>
      </figcaption>
    </figure>
  );
}
