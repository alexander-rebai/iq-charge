import type { JSX } from "react";

// ==================================================================================================================================================================
// REALISATIES CATEGORIES 🏷️
// ==================================================================================================================================================================

export type categoryType = {
  title: string;
  description: string;
};

// ==================================================================================================================================================================
// REALISATIES ARTICLES 📝
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

// Realisaties articles - Only articles about completed projects and implementations
export const articles: articleType[] = [
  {
    slug: "kantoorcomplex-antwerpen",
    title: "Modern kantoorcomplex in Antwerpen voorzien van 12 laadstations",
    description:
      "Een succesvol project waarbij we een kantoorcomplex hebben uitgerust met slimme laadinfrastructuur voor werknemers en bezoekers.",
    categories: [
      {
        title: "Realisaties",
        description: "Onze voltooide projecten en succesvolle implementaties.",
      },
    ],
    publishedAt: "2023-12-10",
    image: {
      urlRelative: "/cover.jpeg",
      alt: "Laadstations bij kantoorcomplex in Antwerpen",
    },
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Voor een modern kantoorcomplex in het hart van Antwerpen hebben we een
          uitgebreide laadinfrastructuur geïmplementeerd met 12 laadstations.
        </p>
        <p>
          De installatie omvat geavanceerde load balancing technologie die
          ervoor zorgt dat de beschikbare stroomcapaciteit optimaal wordt
          verdeeld over alle aangesloten voertuigen.
        </p>
        <p>
          Dankzij ons slimme beheersysteem kunnen werknemers en bezoekers
          eenvoudig een laadpunt reserveren via een mobiele app, en wordt het
          energieverbruik nauwkeurig bijgehouden voor facturatie.
        </p>
      </div>
    ),
  },
  {
    slug: "residentieel-project-gent",
    title: "Grootschalig residentieel project in Gent met 24 laadpunten",
    description:
      "Een ambitieus project waarbij we een nieuw appartementencomplex hebben voorzien van een toekomstbestendige laadinfrastructuur.",
    categories: [
      {
        title: "Realisaties",
        description: "Onze voltooide projecten en succesvolle implementaties.",
      },
    ],
    publishedAt: "2024-02-20",
    image: {
      urlRelative: "/cover2.jpg",
      alt: "Ondergrondse parking met laadpunten in Gent",
    },
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Voor een nieuw residentieel project in Gent hebben we de ondergrondse
          parking uitgerust met 24 laadpunten, perfect geïntegreerd in de
          architectuur van het gebouw.
        </p>
        <p>
          De installatie is voorbereid op toekomstige uitbreiding en maakt
          gebruik van dynamisch load management om overbelasting van de
          elektrische installatie te voorkomen.
        </p>
        <p>
          Bewoners kunnen via een gebruiksvriendelijk platform hun laadsessies
          beheren en monitoren, terwijl de beheerder van het gebouw een
          duidelijk overzicht heeft van het totale energieverbruik.
        </p>
        <p>
          Dit project toont aan hoe moderne woongebouwen kunnen inspelen op de
          groeiende vraag naar elektrisch rijden, zonder compromissen te sluiten
          op het gebied van gebruiksgemak en efficiëntie.
        </p>
      </div>
    ),
  },
];

export const imageOnlyArticles: string[] = [
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/1.png",
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/2.png",
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/3.png",
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/4.png",
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/5.png",
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/6.png",
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/7.png",
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/8.png",
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/9.png",
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/10.png",
  "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/realisaties/11.png",
];
