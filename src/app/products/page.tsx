import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import ProductsHero from "~/components/products-hero";
import SpecificInfo from "~/components/specific-info";
import Specs from "~/components/specs-table";

type ProductType = {
  name: string;
  path: string;
  img: string;
  features: string[];
};

const specifications = [
  {
    category: "Model",
    value: <span className="font-medium">EV Base</span>,
    value2: <span className="font-medium">EV Ultra</span>,
    value3: <span className="font-medium">EV One</span>,
    value4: <span className="font-medium">EV Wall</span>,
  },
  {
    category: "Max. vermogen",
    value: "2 x 22kw",
    value2: "2 x 240 kW",
    value3: "22 kW",
    value4: "2 x 240 kW",
  },
  {
    category: "Gebruikersinterface",
    value: "App",
    value2: "2 dynamische displays",
    value3: "App",
    value4: "App",
  },
  {
    category: "Montage",
    value: "Muur",
    value2: "Muur",
    value3: "Muur",
    value4: "Muur",
  },
  {
    category: "Type stekker",
    value: "2 x Type 2",
    value2: "2 x Type 2",
    value3: "Type 2",
    value4: "2 x Type 2",
  },
  {
    category: "Afmetingen (mm) HxLxD",
    value: "1200 × 600 × 150 mm ",
    value2: "1870 x 920 x 650 mm",
    value3: "1100 × 120 × 120 mm",
    value4: "300 × 300 × 110  mm",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />

        <div className="bg-white py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Uitgelicht product:{" "}
                  <span className="bg-primary-light/60 font-semibold">
                    Smappee
                  </span>{" "}
                </h2>
                <p className="pt-4 text-gray-500">
                  De Smappee EV Base is een laadpaal met een maximaal vermogen
                  van 2 x 22 kW. De laadpaal is voorzien van een
                  gebruikersinterface via een app en is geschikt voor
                  muurmontage. De laadpaal is voorzien van 2 x Type 2 stekkers
                  en heeft een afmeting van 1200 × 600 × 150 mm.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl pt-16">
              <div className="grid grid-cols-3 gap-8">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/smappee/s1.png"
                    alt="Smappee"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/smappee/s2.png"
                    alt="Smappee"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/smappee/s3.png"
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
            title: "Opladen van elektrische auto's voor je bedrijf",
            info: "Je moet succesvol zijn in een voortdurend veranderende omgeving. Maar anticiperen op toekomstige behoeften kan een uitdaging zijn. Ons laadnetwerk past zich aan de specifieke behoeften van je bedrijf en groeit met je mee. Hiermee kan je het laden beheren via een cloudplatform waardoor je inzicht en controle krijgt.",
            image: "/images/night6.jpg",
          }}
        />

        <div className="bg-gray-100 py-12 lg:py-16" data-aos="fade-up">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-12">
              <h2 className="text-center text-4xl font-medium text-primary">
                Specificaties
              </h2>
              <Specs
                specs={specifications}
                image1="/smappee/s1.png"
                image2="/smappee/s2.png"
                image3="/smappee/s3.png"
                image4="/smappee/s4.png"
              />
            </div>
          </div>
        </div>

        <section id="contact">
          <div className="mb-10 mt-20 flex flex-col gap-8">
            <h2 className="text-center text-4xl" data-aos="fade-up">
              Contact
            </h2>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
