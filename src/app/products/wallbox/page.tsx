"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { Betrouwbaarheid, Gemoedsrust, Makkelijk } from "~/assets/assets";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import ImageCarousel from "~/components/image-carousel";
import Information from "~/components/information";
import Qualities from "~/components/qualities";
import Specs from "~/components/specs-table";

const specifications = [
  { category: "Technologie", value: "Intelligent geconnecteerd" },
  { category: "Model", value: "Wallbox Pulsar Plus" },
  {
    category: "Fase(n)",
    value: "Driefasig",
  },
  { category: "Max. vermogen", value: "22kW" },
  { category: "Gebruikersinterface", value: "Scherm" },
  { category: "Montage", value: "Muur - Optie paal" },
  { category: "Type stekker", value: "Type 2" },
  { category: "Afmetingen (mm) HxLxD", value: "163 x 166 x 82" },
  {
    category: "Lekstroomdetector (6mA DC Detector)",
    value: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Geconnecteerde services",
    value: <CheckCircle className="mx-auto text-green-600 " />,
  },
];

const products = [
  {
    title: "Wallbox",
    info: "Wallbox biedt een reeks functionele voordelen voor laadoplossingen voor elektrische voertuigen. Met snelle installatie, beheer op afstand en verbeterde service en onderhoudsmogelijkheden, streeft het bedrijf naar kostenoptimalisatie voor zijn klanten. De betrouwbaarheid van hun systemen, samen met de eenvoudige gebruikservaring, biedt gebruikers gemoedsrust bij het laden van hun voertuigen.",
    image: "/wallbox/w3.png",
  },
];

export default function ProductPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <main>
      <Header />
      <div className="mx-auto mb-10 mt-36 max-w-7xl px-4 pb-10 text-center sm:px-6 md:mt-28 lg:p-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-4">
          <div className="-md:mt-16 col-span-2 mt-6 flex flex-col items-center justify-center lg:items-start lg:text-left">
            <h1
              className="mb-8 max-w-xl text-center text-5xl font-medium tracking-tight text-slate-900  lg:text-left"
              data-aos="fade-up"
            >
              Wallbox
            </h1>
            <p
              className="desc text-md mb-4 max-w-lg self-center text-center text-slate-700 lg:self-auto lg:pr-4 lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Je elektrische wagen opladen aan je eigen laadstation? Dat kan met
              de slimme laadpaal van Wallbox.
            </p>
            <p
              className="desc text-md mb-4 max-w-lg self-center text-center text-slate-700 lg:self-auto lg:pr-4 lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              De Pulsar Pro is een nieuwe oplaadoplossing die perfect past bij
              situaties waarin privé en zakelijk gebruik wordt gemaakt van
              elektrisch vervoer. Een betrouwbare, toegankelijke lader voor
              gebruikers en eenvoudig te beheren. Zakelijk verrekenen kan
              gemakkelijk worden ingeregeld.
            </p>
            <p
              className="desc text-md mb-8 max-w-lg self-center text-center text-slate-700 lg:self-auto lg:pr-4 lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Indien je wilt gaan voor een optimaal rendement, dan kan je je
              laadpaal combineren met zonnepanelen en een thuisbatterij. Onze
              vakmensen stemmen alle installaties optimaal op elkaar af, zodat
              jij alles uit je groene stroom én installaties haalt. Zo ga jij
              voor een duurzame toekomst en een mooie besparing op je
              energiefactuur!
            </p>
            <div
              className="flex flex-col items-center justify-center gap-6 md:flex-row lg:items-start lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="/offerte"
                className="rounded-xl bg-primary-light  px-3.5 py-2 text-lg font-medium text-black shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Vraag een offerte
              </a>
            </div>
          </div>
          <div
            className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex h-full items-center justify-center p-10 lg:p-0">
              <ImageCarousel
                images={[
                  "/wallbox/w1.webp",
                  "/wallbox/w2.png",
                  "/wallbox/w3.png",
                  "/wallbox/w4.webp",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <Qualities
        stats={[
          {
            id: 1,
            name: "Gemoedsrust",
            icon: <Gemoedsrust />,
          },
          { id: 2, name: "Makkelijk te gebruiken", icon: <Makkelijk /> },
          { id: 3, name: "Betrouwbaar", icon: <Betrouwbaarheid /> },
        ]}
        title="Waarom kiezen voor Huawei?"
        description="Door te kiezen voor een Huawei laadpaal, kies je voor jarenlange zorgeloze laadervaringen."
      />
      <div className="mb-10 mt-20 flex flex-col px-2 md:gap-8">
        {products.map((product, i) => (
          <Information
            key={i}
            information={product}
            reverse={i % 2 ? true : false}
            isProduct
          />
        ))}
      </div>
      <div className="bg-gray-100 py-12 lg:py-16" data-aos="fade-up">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-12">
            <h2 className="text-center text-4xl font-medium text-primary">
              Specificaties
            </h2>
            <Specs specs={specifications} image1="/wallbox/w1.webp" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
