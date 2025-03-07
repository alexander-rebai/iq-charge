import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import type { articleType } from "../content";
import BadgeCategory from "./BadgeCategory";

// This is the article card that appears in the blog page and category pages
const CardArticle = ({
  article,
  tag = "h2",
  showCategory = true,
  isImagePriority = false,
}: {
  article: articleType;
  tag?: keyof JSX.IntrinsicElements;
  showCategory?: boolean;
  isImagePriority?: boolean;
}) => {
  const TitleTag = tag;

  return (
    <article className="max-w-sm overflow-hidden rounded shadow-lg">
      <Link
        href={`/blog/${article.slug}`}
        className="link link-hover hover:link-primary"
        title={article.title}
        rel="bookmark"
      >
        <div className="h-48 overflow-hidden">
          <Image
            src={article.image.urlRelative}
            alt={article.image.alt}
            width={600}
            height={338}
            priority={isImagePriority}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <div className="px-6 py-4">
        {/* TITLE WITH RIGHT TAG */}
        <TitleTag className="mb-2 text-xl font-bold">
          <Link
            href={`/blog/${article.slug}`}
            className="link link-hover hover:link-primary"
            title={article.title}
            rel="bookmark"
          >
            {article.title}
          </Link>
        </TitleTag>

        {/* DESCRIPTION */}
        <p className="text-base-content/80 text-base">{article.description}</p>
      </div>

      {/* CATEGORIES */}
      {showCategory && (
        <div className="px-6 pb-2 pt-4">
          {article.categories.map((category) => (
            <BadgeCategory category={category} key={category.title} />
          ))}
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            {new Date(article.publishedAt).toLocaleDateString("nl-NL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      )}
    </article>
  );
};

export default CardArticle;
