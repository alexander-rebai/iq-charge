import CardArticle from "./_assets/components/CardArticle";
import { articles } from "./_assets/content";

export const metadata = {
  title: "Laadexpert Blog | Laadoplossingen voor Elektrische Voertuigen",
  description:
    "Ontdek alles over laadoplossingen voor elektrische voertuigen, van thuisladen tot zakelijke laadinfrastructuur",
  alternates: {
    canonical: "/blog",
  },
};

export default async function Blog() {
  // Sort articles by date (newest first) and display the first 6
  const articlesToDisplay = articles
    .sort(
      (a, b) =>
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf(),
    )
    .slice(0, 6);

  return (
    <>
      <section className="mx-auto mb-16 max-w-xl text-center md:mb-24">
        <h1 className="mb-6 text-3xl font-bold tracking-tight lg:text-5xl">
          Onze blog
        </h1>
        <p className="text-lg leading-relaxed opacity-80">
          Hier vindt u alle informatie over laadoplossingen voor elektrische
          voertuigen
        </p>
      </section>

      <section className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-2">
        {articlesToDisplay.map((article, i) => (
          <CardArticle
            article={article}
            key={article.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>
    </>
  );
}
