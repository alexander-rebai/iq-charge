import Image from "next/image";
import Link from "next/link";
import BadgeCategory from "../_assets/components/BadgeCategory";
import { articles } from "../_assets/content";

export async function generateMetadata({
  params,
}: {
  params: { articleId: string };
}) {
  const article = articles.find((article) => article.slug === params.articleId);

  if (!article) {
    return {
      title: "Artikel niet gevonden | LaadExpert Blog",
      description: "Dit artikel bestaat niet in de LaadExpert Blog",
    };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      images: [
        {
          url: article.image.urlRelative,
          width: 1200,
          height: 660,
        },
      ],
      locale: "nl_NL",
      type: "article",
    },
  };
}

export default async function Article({
  params,
}: {
  params: { articleId: string };
}) {
  const article = articles.find((article) => article.slug === params.articleId);

  if (!article) {
    return (
      <div className="mx-auto mt-12 max-w-xl text-center">
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight lg:text-5xl">
          Artikel niet gevonden
        </h1>
        <p className="text-lg leading-relaxed opacity-80">
          Het opgevraagde artikel bestaat niet.
        </p>
        <div className="mt-8">
          <Link href="/blog" className="btn btn-primary">
            Terug naar Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* GO BACK LINK */}
      <div className="mb-8">
        <Link
          href="/realisaties"
          className="text-base-content/80 hover:text-base-content inline-flex items-center gap-1"
          title="Terug naar Realisaties"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Terug naar Realisaties
        </Link>
      </div>

      <article>
        {/* HEADER IMAGE */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <Image
            src={article.image.urlRelative}
            alt={article.image.alt}
            width={1200}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* HEADER WITH CATEGORIES AND DATE AND TITLE */}
        <section className="mb-12 max-w-6xl ">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            {article.categories.map((category) => (
              <BadgeCategory category={category} key={category.title} />
            ))}
          </div>

          <h1 className="mb-2 text-3xl font-extrabold tracking-tight  md:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="text-base-content/80 max-w-2xl text-lg">
            {article.description}
          </p>
        </section>

        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          {/* ARTICLE CONTENT */}
          <section className="prose prose-lg max-w-none md:col-span-2">
            {article.content}
          </section>
        </div>
        <span className="mb-2 mr-2 mt-8 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {new Date(article.publishedAt).toLocaleDateString("nl-NL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </article>
    </>
  );
}
