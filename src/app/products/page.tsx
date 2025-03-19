import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";
import { Header } from "~/components/header";
import ProductsHero from "~/components/products-hero";

// Dynamic imports for non-critical components
const Contact = dynamic(() => import("~/components/contact"), {
  loading: () => <div className="h-[400px]" />,
});
const Footer = dynamic(() =>
  import("~/components/footer").then((mod) => mod.Footer),
);
const LogoCloud = dynamic(() => import("~/components/logo-cloud"));
const SpecificInfo = dynamic(() => import("~/components/specific-info"));
const Specs = dynamic(() => import("~/components/specs-table"));

const specifications = [
  {
    category: "Model",
    value: <span className="font-medium">EV Base</span>,
    value2: <span className="font-medium">EV One</span>,
    value3: <span className="font-medium">EV Wall</span>,
  },
  {
    category: "Max. vermogen",
    value: "2 x 22kw",
    value2: "22 kW",
    value3: "7,4kW / 22 kW",
  },
  {
    category: "Gebruikersinterface",
    value: "App",
    value2: "App",
    value3: "App",
  },
  {
    category: "Montage",
    value: "Sokkel",
    value2: "Sokkel",
    value3: "Muur",
  },
  {
    category: "Type stekker",
    value: "2 x Type 2",
    value2: "Type 2",
    value3: "Type 2",
  },
  {
    category: "Afmetingen (mm) HxLxD",
    value: "1200 × 600 × 150 mm ",
    value2: "1100 × 120 × 120 mm",
    value3: "300 × 300 × 110  mm",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />

        <Suspense fallback={<div className="h-[200px]" />}>
          <LogoCloud />
        </Suspense>

        <div className="bg-white py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="relative text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Uitgelicht product:{" "}
                  <span className="bg-primary-light/60 font-semibold">
                    Smappee
                  </span>{" "}
                  <br />
                  De slimste all-in-one laadoplossing.
                </h2>
                <p className="pt-4 text-gray-500">
                  Met Smappee laad je veilig en kostenefficiënt dankzij overload
                  beveiliging en geïntegreerd energiemanagement. Je hebt zowel
                  real-time als historisch inzicht in je verbruik en je kan
                  prioriteiten instellen of kortingen toekennen aan specifieke
                  gebruikers.
                </p>
                <p className="pt-4 text-gray-500">
                  Geschikt voor elke elektrische of hybride wagen, combineert
                  Smappee functionaliteit met een elegant design en instelbare
                  sfeerverlichting. Als{" "}
                  <span className="bg-primary-light/60 font-semibold">
                    Smappee Certified Partner
                  </span>{" "}
                  zorgen wij voor een snelle, veilige plaatsing, zodat jij
                  zorgeloos kunt laden.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl pt-8 sm:pt-16">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="https://dx8uea1j8p9gd.cloudfront.net/public/fotos/p1 (1).webp"
                    alt="Smappee"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 400px"
                    quality={75}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="https://dx8uea1j8p9gd.cloudfront.net/public/fotos/p3 (1).webp"
                    alt="Smappee"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-left"
                    loading="lazy"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 400px"
                    quality={75}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="https://dx8uea1j8p9gd.cloudfront.net/public/fotos/p2 (1).webp"
                    alt="Smappee"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-right"
                    loading="lazy"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 400px"
                    quality={75}
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto mt-6 h-16 w-48 sm:h-24 sm:w-64">
              <Image
                src="https://dx8uea1j8p9gd.cloudfront.net/public/fotos/smappee-certified.webp"
                alt="Smappee Certified"
                width={256}
                height={96}
                className="h-full w-full object-contain"
                loading="lazy"
                sizes="(max-width: 640px) 192px, 256px"
                quality={90}
              />
            </div>
          </div>
        </div>

        <SpecificInfo
          isReverse
          information={{
            title: "Brede keuze, één doel: jouw zorgeloze laadervaring",
            info: `We bieden een compleet scala aan laadoplossingen - van basisstations tot
geavanceerde slimme laadsystemen - zodat je altijd krijgt wat perfect bij jouw
situatie past. We werken met toonaangevende merken zoals Smappee,
Wallbox en Huawei. Bij Laadexpert draait alles om één ding: jouw
overstap naar elektrisch rijden zo zorgeloos mogelijk maken.`,
            video:
              "https://dx8uea1j8p9gd.cloudfront.net/public/UITLEG_NOAM.mp4",
          }}
        />

        <div className="bg-gray-100 py-12 lg:py-16" data-aos="fade-up">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-12">
              <h2 className="text-center text-4xl font-medium text-primary">
                Specificaties
              </h2>
              <Specs
                specs={specifications}
                image1="https://dx8uea1j8p9gd.cloudfront.net/public/fotos/s1.png"
                image2="https://dx8uea1j8p9gd.cloudfront.net/public/fotos/s2.png"
                image3="https://dx8uea1j8p9gd.cloudfront.net/public/fotos/ev-wal.png"
              />
            </div>
          </div>
        </div>

        <section id="contact">
          <div className="mb-10 mt-20 flex flex-col gap-8">
            <h2 className="text-center text-4xl" data-aos="fade-up">
              Vraag hier je persoonlijk adviesgesprek aan{" "}
            </h2>
            <Suspense fallback={<div className="h-[400px]" />}>
              <Contact />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
