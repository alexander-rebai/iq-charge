"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import {
  Betrouwbaarheid,
  Design,
  Gebruiksvriendelijkheid,
} from "~/assets/assets";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import ImageCarousel from "~/components/image-carousel";
import Information from "~/components/information";
import Qualities from "~/components/qualities";
import Specs from "~/components/specs-table";

const specifications = [
  {
    category: "Model",
    value: <span className="font-medium">Smart Charger 7KS-S0</span>,
    value2: <span className="font-medium">Smart Charger 22KT-S0</span>,
  },
  {
    category: "Fase(n)",
    value: "Eenfasig",
    value2: "Driefasig",
  },
  { category: "Max. vermogen", value: "7,4 kW", value2: "22 kW" },
  { category: "Gebruikersinterface", value: "Scherm", value2: "Scherm" },
  { category: "Montage", value: "Muur", value2: "Muur" },
  { category: "Type stekker", value: "Type 2", value2: "Type 2" },
  {
    category: "Afmetingen (mm) HxLxD",
    value: "180 x 335 x 145",
    value2: "180 x 335 x 145",
  },
  {
    category: "Beschermingsgraad ( IP )",
    value: "IP54",
    value2: "IP54",
  },
  {
    category: "Lekstroomdetector (6mA DC Detector)",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
  },
];

const products = [
  {
    title: "Huawei Smart Charger 7KS-S0",
    info: "De Huawei Smart Charger 7KS-S0 is een compacte en slimme laadpaal voor elektrische voertuigen. De laadpaal is geschikt voor eenfase aansluitingen en heeft een maximaal vermogen van 7,4 kW. De laadpaal is voorzien van een geïntegreerde DC lekstroomdetector en is geschikt voor wandmontage. De laadpaal is voorzien van een type 2 stekker en is geschikt voor zowel thuis als op het werk.",
    image: "/huawei/h1.png",
  },
  {
    title: "Huawei Smart Charger 22KT-S0",
    info: "Huawei's laadoplossingen voor elektrische voertuigen bieden een scala aan voordelen, waaronder het Click-In Design voor snelle installatie, samen met een focus op veiligheid en betrouwbaarheid. Met IP54-bescherming bieden hun systemen een hoge mate van bescherming tegen weersinvloeden. Gebruiksvriendelijkheid staat centraal in hun ontwerp, terwijl de integratie van technologie en design zorgt voor een naadloze gebruikerservaring.",
    image: "/huawei/h2.png",
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
              className="mb-8 max-w-xl text-center text-5xl font-medium tracking-tight text-slate-900 lg:text-left"
              data-aos="fade-up"
            >
              Huawei
            </h1>
            <p
              className="desc text-md mb-4 max-w-lg self-center text-center text-slate-700 lg:self-auto lg:pr-4 lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              De laadpalen van het gerenommeerde merk Huawei staan bekend om
              betrouwbaarheid, efficiëntie en innovatie. Bovendien vereisen ze
              minimaal onderhoud, waardoor je kunt genieten van maximale
              prestaties zonder je zorgen te moeten maken over ingewikkelde
              onderhoudsprocedures. Deze laadpalen zorgen ervoor dat jouw
              elektrische wagen altijd veilig en efficiënt wordt opgeladen,
              zonder compromissen te hoeven sluiten op het gebied van
              prestaties.
            </p>
            <p
              className="desc text-md mb-8 max-w-lg self-center text-center text-slate-700 lg:self-auto lg:pr-4 lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Door te kiezen voor een Huawei laadpaal, kies je voor jarenlange
              zorgeloze laadervaringen.
            </p>
            <div
              className="flex flex-col items-center justify-center gap-6 md:flex-row lg:items-start lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="/offerte"
                className="rounded-xl bg-primary-light  px-3.5 py-2 text-lg font-medium text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
                images={["/huawei/h1.png", "/huawei/h2.png", "/huawei/h3.png"]}
              />
            </div>
          </div>
        </div>
      </div>
      <Qualities
        stats={[
          {
            id: 1,
            name: "Gebruiksvriendelijk",
            icon: <Gebruiksvriendelijkheid />,
          },
          { id: 2, name: "Knap design", icon: <Design /> },
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
            <Specs
              specs={specifications}
              image1="/huawei/h1.png"
              image2="/huawei/h2.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
