"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import ImageCarousel from "~/components/image-carousel";
import Information from "~/components/information";
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
    info: "De Wallbox is een compacte en slimme laadpaal voor elektrische voertuigen. De laadpaal is geschikt voor eenfase aansluitingen en heeft een maximaal vermogen van 7,4 kW. De laadpaal is voorzien van een geïntegreerde DC lekstroomdetector en is geschikt voor wandmontage. De laadpaal is voorzien van een type 2 stekker en is geschikt voor zowel thuis als op het werk.",
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
              className="mb-8 max-w-xl text-center text-5xl font-medium tracking-tight text-slate-900 md:text-[64px] lg:text-left"
              data-aos="fade-up"
            >
              Wallbox
            </h1>
            <p
              className="desc text-md mb-8 max-w-lg self-center text-center text-slate-700 lg:self-auto lg:pr-4 lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Snel, veilig en betrouwbaar opladen van uw elektrische voertuig.
              IQ-Charge is de specialist in het plaatsen van laadpalen voor
              elektrische voertuigen. Wij bieden een totaaloplossing voor zowel
              particulieren als bedrijven.
            </p>
            <div
              className="flex flex-col items-center justify-center gap-6 md:flex-row lg:items-start lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="/offerte"
                className="rounded-xl  bg-primary-light  px-3.5 py-2 text-lg font-medium text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
            <div className="flex items-center justify-center p-10 lg:p-0">
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
