import Image from "next/image";

const landingStats = [
  {
    id: 1,
    name: "Focus op laadpalen",
    iconSrc:
      "https://laadexpert.s3.eu-north-1.amazonaws.com/public/icons/USPs/focus op laadpalen.png",
    iconAlt: "100% focus op laadpalen",
  },
  {
    id: 2,
    name: "Persoonlijke aanpak",
    iconSrc:
      "https://laadexpert.s3.eu-north-1.amazonaws.com/public/icons/USPs/Persoonlijke aanpak.png",
    iconAlt: "Persoonlijke aanpak",
  },
  {
    id: 3,
    name: "Service op maat",
    iconSrc:
      "https://laadexpert.s3.eu-north-1.amazonaws.com/public/icons/USPs/Service op maat.png",
    iconAlt: "Service op maat",
  },
  {
    id: 4,
    name: "Snel en zorgeloos",
    iconSrc:
      "https://laadexpert.s3.eu-north-1.amazonaws.com/public/icons/USPs/Snel en zorgeloos.png",
    iconAlt: "Snel en zorgeloos",
  },
];

const zakelijkStats = [
  {
    id: 1,
    name: "Comfort en gemak voor werknemers",
    iconSrc:
      "https://laadexpert.s3.eu-north-1.amazonaws.com/public/icons/voordelen zakelijk laden/comfort en gemak voor WN.png",
    iconAlt: "Comfort en gemak voor werknemers",
  },
  {
    id: 2,
    name: "Fiscale voordelen",
    iconSrc:
      "https://laadexpert.s3.eu-north-1.amazonaws.com/public/icons/voordelen zakelijk laden/fiscale voordelen.png",
    iconAlt: "Fiscale voordelen",
  },
  {
    id: 3,
    name: "Groen imago",
    iconSrc:
      "https://laadexpert.s3.eu-north-1.amazonaws.com/public/icons/voordelen zakelijk laden/groen imago.png",
    iconAlt: "Groen imago",
  },
];

const thuisStats = [
  {
    id: 1,
    name: "Zonne-energie: Maximaal laden met je zonnepanelen",
    iconSrc:
      "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/sun-energy.png",
    iconAlt: "Zonne-energie: Maximaal laden met je zonnepanelen",
  },
  {
    id: 2,
    name: "Capaciteitstarief: Beperk jouw piekverbuik",
    iconSrc:
      "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/full-charge.png",
    iconAlt: "Capaciteitstarief: Beperk jouw piekverbuik",
  },
  {
    id: 3,
    name: "⁠Load balancing: Gebruik zorgeloos andere apparaten in huis",
    iconSrc:
      "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/load-balance.png",
    iconAlt: "⁠⁠Load balancing: Gebruik zorgeloos andere apparaten in huis",
  },
];

export default function StatsComponent({
  variant,
}: {
  variant: "landing" | "thuis" | "zakelijk";
}) {
  const stats =
    variant === "landing"
      ? landingStats
      : variant === "thuis"
        ? thuisStats
        : zakelijkStats;

  return (
    <dl
      className={`mt-16 grid grid-cols-1  overflow-hidden rounded-xl text-center sm:grid-cols-2 lg:grid-cols-${stats.length}`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center justify-center bg-muted p-8"
        >
          <dt className="mt-4 text-sm font-semibold leading-6 text-gray-600">
            {stat.name}
          </dt>
          <dd className="order-first flex h-24 items-center justify-center">
            <div className="relative h-20 w-20">
              <Image
                src={stat.iconSrc}
                alt={stat.iconAlt}
                fill
                className="object-contain"
              />
            </div>
          </dd>
        </div>
      ))}
    </dl>
  );
}
