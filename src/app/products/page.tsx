import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import LogoCloud from "~/components/logo-cloud";
import ProductsHero from "~/components/products-hero";
import SpecificInfo from "~/components/specific-info";
import Specs from "~/components/specs-table";

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

        <LogoCloud />

        <div className="bg-white py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="relative text-center">
                <div className="absolute -right-72 top-14 hidden h-64 w-64 rotate-12 lg:block">
                  <img
                    src="https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/smappee-certified.png"
                    alt="Smappee Certified"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="mx-auto mb-6 h-24 w-64 lg:hidden">
                  <img
                    src="https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/smappee-certified.png"
                    alt="Smappee Certified"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Uitgelicht product:{" "}
                  <span className="bg-primary-light/60 font-semibold">
                    Smappee
                  </span>{" "}
                  <br />
                  De slimste all-in one laadoplossing.
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
            <div className="mx-auto max-w-4xl pt-16">
              <div className="grid grid-cols-3 gap-8">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img
                    src="https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/p1.jpg"
                    alt="Smappee"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img
                    src="https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/p3.jpg"
                    alt="Smappee"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img
                    src="https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/p2.jpg"
                    alt="Smappee"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
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
              "https://laadexpert.s3.eu-north-1.amazonaws.com/public/videoo.mp4",
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
                image1="https://laadexpert.s3.eu-north-1.amazonaws.com/public/smappee/s1.png"
                image2="https://laadexpert.s3.eu-north-1.amazonaws.com/public/smappee/s3.png"
                image3="https://laadexpert.s3.eu-north-1.amazonaws.com/public/images/ev-wall.png"
              />
            </div>
          </div>
        </div>

        <section id="contact">
          <div className="mb-10 mt-20 flex flex-col gap-8">
            <h2 className="text-center text-4xl" data-aos="fade-up">
              Vraag hier je persoonlijke adviesgesprek aan
            </h2>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
