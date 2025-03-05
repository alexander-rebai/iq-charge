import Image from "next/image";

const stats = [
  {
    id: 1,
    name: "Focus op laadpalen",
    iconSrc: "/icons/USPs/focus op laadpalen.png",
    iconAlt: "100% focus op laadpalen",
  },
  {
    id: 2,
    name: "Persoonlijke aanpak",
    iconSrc: "/icons/USPs/Persoonlijke aanpak.png",
    iconAlt: "Persoonlijke aanpak",
  },
  {
    id: 3,
    name: "Service op maat",
    iconSrc: "/icons/USPs/Service op maat.png",
    iconAlt: "Service op maat",
  },
  {
    id: 4,
    name: "Snel en zorgeloos",
    iconSrc: "/icons/USPs/Snel en zorgeloos.png",
    iconAlt: "Snel en zorgeloos",
  },
];

export default function Stats() {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
              Een slimme laadpaal - het laatste puzzelstuk van jouw{"   "}
              <span className="bg-primary-light/60 font-semibold">
                duurzame levensstijl
              </span>
              {"   "}
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-xl text-center sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </div>
    </div>
  );
}
