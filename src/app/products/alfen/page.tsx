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
    value: <span className="font-semibold">Eve Single Pro-line</span>,
    value2: <span className="font-semibold">Eve Double Pro-line</span>,
  },
  {
    category: "Fase(n)",
    value: "Beschikbaar als eenfasig of driefasig systeem",
    value2: "Driefasig",
  },
  {
    category: "Max. vermogen",
    value: "7,4 kW eenfasige - 22kW driefasige",
    value2: "2 x 22kW",
  },
  { category: "Gebruikersinterface", value: "Scherm", value2: "Scherm" },
  {
    category: "Montage",
    value: "Muur - Optie paal",
    value2: "Muur - Optie paal",
  },
  { category: "Type stekker", value: "Type 2", value2: "2 x Type 2" },
  {
    category: "Afmetingen (mm) HxLxD",
    value: "370 x 240 x 130",
    value2: "590 x 338 x 230",
  },
  {
    category: "RFID - Laadbeveiliging",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Lekstroomdetector (6mA DC Detector)",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Geconnecteerde services",
    value: <CheckCircle className="mx-auto text-green-600 " />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Gecertificeerde energiemeter (split billing)",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Vaste laadkabel",
    value: "Optie (4.5 of 7.5m)",
    value2: <XCircle className="mx-auto text-red-600" />,
  },
  { category: "Smart charging", value: "Optie", value2: "Optie" },
  {
    category: "Solar optimization",
    value: <XCircle className="mx-auto text-red-600" />,
    value2: <XCircle className="mx-auto text-red-600" />,
  },
];

const products = [
  {
    title: "Alfen Eve Single Pro-line",
    info: "De Alfen Eve Single Pro-line is een laadpunt voor elektrische voertuigen dat beschikbaar is als eenfasig of driefasig systeem. Het laadpunt is beschikbaar met een maximaal vermogen van 7,4 kW (eenfasig) of 22 kW (driefasig).",
    image: "/alfen/s1.png",
  },
  {
    title: "Alfen Eve Double Pro-line",
    info: "De Alfen Eve Double Pro-line is een laadpunt voor elektrische voertuigen dat beschikbaar is als een driefasig systeem. Het laadpunt is beschikbaar met een maximaal vermogen van 2 x 22 kW.",
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
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-4">
          <div className="-md:mt-16 col-span-2 mt-6 flex flex-col items-center justify-center lg:items-start lg:text-left">
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
                className="bg-primary-light rounded-3xl border-2 border-primary-foreground  px-3.5 py-2 text-lg font-medium text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
                  "/alfen/s1.png",
                  "/alfen/s2.webp",
                  "/alfen/d1.jpeg",
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
              image2="/alfen/d1.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
