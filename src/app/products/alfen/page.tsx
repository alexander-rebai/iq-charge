"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, XCircle } from "lucide-react";
import { useEffect } from "react";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import ImageCarousel from "~/components/image-carousel";
import Information from "~/components/information";
import Specs from "~/components/specs-table";

const specifications = [
  {
    category: "Model",
    value: <span className="font-semibold">Eve Single S-line</span>,
    value2: <span className="font-semibold">Eve Single Pro-line</span>,
    value3: <span className="font-semibold">Eve Double Pro-line</span>,
  },
  {
    category: "Fase(n)",
    value: "Beschikbaar als eenfasig of driefasig systeem",
    value2: "Beschikbaar als eenfasig of driefasig systeem",
    value3: "Driefasig",
  },
  {
    category: "Max. vermogen",
    value: "7,4 kW eenfasige - 22kW driefasige",
    value2: "7,4 kW eenfasige - 22kW driefasige",
    value3: "2 x 22kW",
  },
  {
    category: "Gebruikersinterface",
    value: "Scherm",
    value2: "Scherm",
    value3: "Scherm",
  },
  {
    category: "Montage",
    value: "Muur - Optie paal",
    value2: "Muur - Optie paal",
    value3: "Muur - Optie paal",
  },
  {
    category: "Type stekker",
    value: "Type 2",
    value2: "Type 2",
    value3: "2 x Type 2",
  },
  {
    category: "Afmetingen (mm) HxLxD",
    value: "370 x 240 x 130",
    value2: "370 x 240 x 130",
    value3: "590 x 338 x 230",
  },
  {
    category: "RFID - Laadbeveiliging",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
    value3: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Lekstroomdetector (6mA DC Detector)",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
    value3: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Geconnecteerde services",
    value: <CheckCircle className="mx-auto text-green-600 " />,
    value2: <CheckCircle className="mx-auto text-green-600 " />,
    value3: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Gecertificeerde energiemeter (split billing)",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
    value3: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Vaste laadkabel",
    value: "Optie (4.5 of 7.5m)",
    value2: "Optie (4.5 of 7.5m)",
    value3: <XCircle className="mx-auto text-red-600" />,
  },
  {
    category: "Smart charging",
    value: "Optie",
    value2: "Optie",
    value3: "Optie",
  },
  {
    category: "Solar optimization",
    value: <XCircle className="mx-auto text-red-600" />,
    value2: <XCircle className="mx-auto text-red-600" />,
    value3: <XCircle className="mx-auto text-red-600" />,
  },
];

const products = [
  {
    title: "Alfen Eve Single S-line",
    info: "De Eve Single S-line is ontworpen om slimme functies voor thuis opladen te bieden. De compacte behuizing bevat een laadindicatielamp en kan aan een muur of paal worden gemonteerd om een plug & play oplossing te bieden.",
    image: "/alfen/s1.png",
  },
  {
    title: "Alfen Eve Single Pro-line",
    info: "De Eve Single Pro-line van Alfen, geschikt voor zowel zakelijk als thuisgebruik, biedt een compact ontwerp met verscheidene functies, zoals een gebruiksvriendelijk kleurenscherm voor logo-upload en RFID voor eenvoudige identificatie.",
    image: "/alfen/s1.png",
  },
  {
    title: "Alfen Eve Double Pro-line",
    info: "De Eve Double Pro-line is een ideale laadpaal voor semi-openbare plaatsen zoals bedrijfs- en winkelparkeerterreinen. Deze stevige paal is gemaakt voor veelvuldig gebruik en snelle gebruikerswisselingen, met montageopties voor zowel muur als paal.",
    image: "/alfen/d1.png",
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
        <div className="items-center justify-around lg:flex lg:grid-cols-3 lg:gap-x-4">
          <div className="col-span-2 mt-6 flex flex-col items-center justify-center lg:items-start lg:text-left">
            <h1
              className="mb-8 max-w-xl text-center text-5xl font-bold tracking-tight text-slate-900 md:text-[64px] lg:text-left"
              data-aos="fade-up"
            >
              Alfen
            </h1>
            <p
              className="desc text-md mb-8 max-w-lg self-center text-center text-slate-700 lg:self-auto lg:pr-4 lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Alfen presenteert twee series van slimme laadstations, de Eve
              Single S-line en de Eve Single Pro-line. Deze laadpalen combineren
              innovatie met robuustheid voor een veilige laadervaring en staan
              bekend om zijn gebruiksvriendelijkheid en betrouwbaarheid.
            </p>
            <p
              className="desc text-md mb-8 max-w-lg self-center text-center text-slate-700 lg:self-auto lg:pr-4 lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Ontworpen voor optimale laadefficiëntie zijn ze compatibel met elk
              OCPP- managementsysteem, waardoor een flexibele integratie
              mogelijk is. Bovendien zijn ze naadloos integreerbaar met
              hernieuwbare energiebronnen en ondersteunen slimme functies zoals
              dynamic load balancing.
            </p>
            <p
              className="desc text-md mb-8 max-w-lg self-center text-center text-slate-700 lg:self-auto lg:pr-4 lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Dankzij meer dan een decennium aan technologische ontwikkeling,
              biedt Alfen een bewezen, hoogontwikkeld platform voor het
              betrouwbaar en veilig opladen van uw elektrische voertuig thuis.
            </p>
            <div
              className="flex flex-col items-center justify-center gap-6 md:flex-row lg:items-start lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="/offerte"
                className="rounded-3xl border-2 border-primary-foreground bg-primary-light  px-3.5 py-2 text-lg font-medium text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Vraag een offerte
              </a>
            </div>
          </div>
          <div
            className="mt-16 sm:mt-24 lg:mt-0 lg:w-1/3 lg:flex-shrink-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center justify-center p-10 lg:p-0">
              <ImageCarousel
                images={[
                  "/alfen/s1.png",
                  "/alfen/s2.png",
                  "/alfen/d1.png",
                  "/alfen/d2.webp",
                  "/alfen/d3.webp",
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
      <div className="bg-primary-background py-12 lg:py-16" data-aos="fade-up">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-12">
            <h2 className="text-center text-4xl font-bold text-primary">
              Specificaties
            </h2>
            <Specs
              specs={specifications}
              image1="/alfen/s1.png"
              image2="/alfen/s1.png"
              image3="/alfen/d1.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
