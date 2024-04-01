"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { Kwaliteit, LoadBalancing, Mid, Small } from "~/assets/assets";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import ImageCarousel from "~/components/image-carousel";
import Information from "~/components/information";
import Qualities from "~/components/qualities";
import Specs from "~/components/specs-table";

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
  {
    category: "RFID - Laadbeveiliging",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
    value3: <CheckCircle className="mx-auto text-green-600" />,
    value4: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Lekstroomdetector (6mA DC Detector)",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
    value3: <CheckCircle className="mx-auto text-green-600" />,
    value4: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Geconnecteerde services",
    value: <CheckCircle className="mx-auto text-green-600 " />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
    value3: <CheckCircle className="mx-auto text-green-600" />,
    value4: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Vaste laadkabel",
    value: "2 kabels",
    value2: "2 kabels",
    value3: "1 kabel",
    value4: "2 kabels",
  },
];

const products = [
  {
    title: "Smappee EV Base",
    info: "De Smappee EV Base is een laadpaal met een maximaal vermogen van 2 x 22 kW. De laadpaal is voorzien van een gebruikersinterface via een app en is geschikt voor muurmontage. De laadpaal is voorzien van 2 x Type 2 stekkers en heeft een afmeting van 1200 × 600 × 150 mm. De laadpaal is voorzien van een RFID-laadbeveiliging, lekstroomdetector (6mA DC Detector) en geconnecteerde services.",
    image: "/smappee/s1.png",
  },
  {
    title: "Smappee EV Ultra",
    info: "De Smappee EV Base is een laadpaal met een maximaal vermogen van 2 x 22 kW. De laadpaal is voorzien van een gebruikersinterface via een app en is geschikt voor muurmontage. De laadpaal is voorzien van 2 x Type 2 stekkers en heeft een afmeting van 1200 × 600 × 150 mm. De laadpaal is voorzien van een RFID-laadbeveiliging, lekstroomdetector (6mA DC Detector) en geconnecteerde services.",
    image: "/smappee/s2.png",
  },
  {
    title: "Smappee EV One",
    info: "De Smappee EV Base is een laadpaal met een maximaal vermogen van 2 x 22 kW. De laadpaal is voorzien van een gebruikersinterface via een app en is geschikt voor muurmontage. De laadpaal is voorzien van 2 x Type 2 stekkers en heeft een afmeting van 1200 × 600 × 150 mm. De laadpaal is voorzien van een RFID-laadbeveiliging, lekstroomdetector (6mA DC Detector) en geconnecteerde services.",
    image: "/smappee/s3.png",
  },
  {
    title: "Smappee EV Wall",
    info: "De Smappee EV Base is een laadpaal met een maximaal vermogen van 2 x 22 kW. De laadpaal is voorzien van een gebruikersinterface via een app en is geschikt voor muurmontage. De laadpaal is voorzien van 2 x Type 2 stekkers en heeft een afmeting van 1200 × 600 × 150 mm. De laadpaal is voorzien van een RFID-laadbeveiliging, lekstroomdetector (6mA DC Detector) en geconnecteerde services.",
    image: "/smappee/s4.png",
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
              Smappee
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
            <div className="flex items-center justify-center p-10 lg:p-0">
              <ImageCarousel
                images={[
                  "/smappee/s2.png",
                  "/smappee/s1.png",
                  "/smappee/s3.png",
                  "/smappee/s4.png",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <Qualities
        stats={[
          { id: 1, name: "Compacte behuizing", icon: <Small /> },
          { id: 2, name: "Montage aan wand of losstaand", icon: <Mid /> },
          { id: 3, name: "Europese A-kwaliteit", icon: <Kwaliteit /> },
          {
            id: 4,
            name: "Dynamic load balancing",
            icon: <LoadBalancing />,
          },
        ]}
        title="Waarom kiezen voor Smappee?"
        description="Smappee is een toonaangevende specialist in energieoplossingen voor de toekomst. Met meer dan 80 jaar ervaring in het ontwerpen, ontwikkelen en bouwen van elektrische energieproducten, is Smappee een betrouwbare partner voor het opladen van elektrische voertuigen."
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
              image1="/smappee/s1.png"
              image2="/smappee/s2.png"
              image3="/smappee/s3.png"
              image4="/smappee/s4.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
