import Image from "next/image";

const landingStats = [
  {
    id: 1,
    name: "Focus op laadpalen",
    iconSrc:
      "https://dx8uea1j8p9gd.cloudfront.net/public/icons/USPs/focus_op_laadpalen.png",
    iconAlt: "100% focus op laadpalen",
  },
  {
    id: 2,
    name: "Persoonlijke aanpak",
    iconSrc:
      "https://dx8uea1j8p9gd.cloudfront.net/public/icons/USPs/persoonlijke_aanpak.png",
    iconAlt: "Persoonlijke aanpak",
  },
  {
    id: 3,
    name: "Service op maat",
    iconSrc:
      "https://dx8uea1j8p9gd.cloudfront.net/public/icons/USPs/service_aanpak.png",
    iconAlt: "Service op maat",
  },
  {
    id: 4,
    name: "Snel en zorgeloos",
    iconSrc:
      "https://dx8uea1j8p9gd.cloudfront.net/public/icons/USPs/snel_zorgeloos.png",
    iconAlt: "Snel en zorgeloos",
  },
];

const zakelijkStats = [
  {
    id: 1,
    name: "Comfort en gemak voor werknemers",
    iconSrc:
      "https://dx8uea1j8p9gd.cloudfront.net/public/icons/voordelen zakelijk laden/comfort_gemak.png",
    iconAlt: "Comfort en gemak voor werknemers",
  },
  {
    id: 2,
    name: "Fiscale voordelen",
    iconSrc:
      "https://dx8uea1j8p9gd.cloudfront.net/public/icons/voordelen zakelijk laden/fiscale.png",
    iconAlt: "Fiscale voordelen",
  },
  {
    id: 3,
    name: "Groen imago",
    iconSrc:
      "https://dx8uea1j8p9gd.cloudfront.net/public/icons/voordelen zakelijk laden/groen.png",
    iconAlt: "Groen imago",
  },
];

const thuisStats = [
  {
    id: 1,
    name: "Zonne-energie",
    iconSrc: "https://dx8uea1j8p9gd.cloudfront.net/public/fotos/solar.png",
    iconAlt: "Zonne-energie",
  },
  {
    id: 2,
    name: "Capaciteitstarief",
    iconSrc: "https://dx8uea1j8p9gd.cloudfront.net/public/fotos/capaciteit.png",
    iconAlt: "Capaciteitstarief",
  },
  {
    id: 3,
    name: "⁠Load balancing",
    iconSrc: "https://dx8uea1j8p9gd.cloudfront.net/public/fotos/load.png",
    iconAlt: "⁠⁠Load balancing",
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
