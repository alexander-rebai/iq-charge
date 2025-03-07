import type { JSX } from "react";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

export type categoryType = {
  title: string;
  description: string;
};

// ==================================================================================================================================================================
// BLOG ARTICLES 📝
// ==================================================================================================================================================================

export type articleType = {
  slug: string;
  title: string;
  description: string;
  categories: categoryType[];
  publishedAt: string;
  image: {
    urlRelative: string;
    alt: string;
  };
  content: JSX.Element;
};

// Blog articles - Only articles that are meant for the blog section
export const articles: articleType[] = [
  // {
  //   slug: "thuisladen-voordelen",
  //   title: "De voordelen van een thuislaadpunt voor uw elektrische auto",
  //   description:
  //     "Ontdek waarom een eigen laadpunt thuis de beste keuze is voor EV-rijders.",
  //   categories: [
  //     {
  //       title: "Residentieel Laden",
  //       description: "Alles over laadoplossingen voor thuis en in woonwijken.",
  //     },
  //   ],
  //   publishedAt: "2023-11-15",
  //   image: {
  //     urlRelative: "/cover.webp",
  //     alt: "Thuislaadpunt voor elektrische auto",
  //   },
  //   content: (
  //     <div className="flex flex-col gap-4">
  //       <p>
  //         Een eigen laadpunt thuis biedt talloze voordelen voor eigenaren van
  //         elektrische voertuigen.
  //       </p>
  //       <p>
  //         Met een thuislaadpunt kunt u uw auto opladen wanneer het u uitkomt,
  //         zonder afhankelijk te zijn van openbare laadinfrastructuur.
  //       </p>
  //       <p>
  //         Bovendien is thuisladen vaak voordeliger dan opladen bij openbare
  //         laadpalen, en kunt u gebruikmaken van voordelige nachttarieven voor
  //         elektriciteit.
  //       </p>
  //     </div>
  //   ),
  // },
];
