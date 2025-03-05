"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { FlipWords } from "./flip-words";

const stats = [
  {
    id: 1,
    name: "Comfort en gemak voor werknemers",
    iconSrc: "/icons/voordelen zakelijk laden/comfort en gemak voor WN.png",
    iconAlt: "Comfort en gemak voor werknemers",
  },
  {
    id: 2,
    name: "Fiscale voordelen",
    iconSrc: "/icons/voordelen zakelijk laden/fiscale voordelen.png",
    iconAlt: "Fiscale voordelen",
  },
  {
    id: 3,
    name: "Groen imago",
    iconSrc: "/icons/voordelen zakelijk laden/groen imago.png",
    iconAlt: "Groen imago",
  },
];

const BedrijfHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const words = ["Bedrijf", "KMO", "Vastgoedproject", "Bedrijf", "KMO"];

  return (
    <div className="relative mb-20 h-screen">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/fotos/zakelijk.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero image"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="lg:px-8q absolute bottom-0 left-1/2 max-w-7xl -translate-x-1/2 translate-y-1/4 px-6 md:w-3/4">
        <div className="mx-auto max-w-2xl md:max-w-none">
          <dl className="mt-16 hidden overflow-hidden rounded-xl text-center md:grid md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-muted p-8">
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

      <div className="z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-8 text-center text-white lg:p-0">
        <div className="flex w-full flex-col items-center justify-center md:items-start md:justify-start">
          <h1
            className="mb-8 max-w-2xl text-left text-4xl font-semibold text-white drop-shadow-lg md:text-start md:text-5xl lg:text-[64px]"
            data-aos="fade-up"
          >
            Laadoplossingen op maat voor jouw{" "}
            <span className="text-primary-light">
              <FlipWords words={words} />
            </span>
          </h1>

          <p
            className="mb-8 max-w-lg text-left text-base text-white drop-shadow-md md:text-start md:text-lg lg:self-auto lg:pr-4 lg:text-[24px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Of je nu 10 of 50 laadpunten nodig hebt: wij installeren snel en
            efficiënt wat bij jouw bedrijf past. Betrouwbare technologie,
            optimaal beheer en minimale kosten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BedrijfHero;
