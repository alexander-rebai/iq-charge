"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const stats = [
  { id: 1, name: "Company Installations", value: "3,000+" },
  { id: 3, name: "Love our work", value: "99.9%" },
  { id: 4, name: "Revenue", value: "$70M" },
];

const OverOnsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/night3.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero image"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-8 text-center text-white lg:p-0">
        <div className="flex w-full flex-col items-center justify-center md:items-start md:justify-start">
          <h1
            className="mb-8 max-w-2xl text-left text-6xl font-medium tracking-tight text-white md:text-start "
            data-aos="fade-up"
          >
            Over ons
          </h1>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 z-10 mx-auto max-w-3xl px-8 text-center">
        <p
          className="rounded-lg bg-black/40 p-6 text-lg leading-relaxed text-white backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Bij Laadexpert zijn we gepassioneerd over het faciliteren van de
          transitie naar elektrisch rijden. Als specialist in laadoplossingen
          voor elektrische voertuigen, combineren we technische expertise met
          persoonlijke service om voor elke situatie de beste laadoplossing te
          vinden. Ons team van experts staat klaar om u te begeleiden bij het
          hele proces - van advies en installatie tot onderhoud en beheer van uw
          laadstation.
        </p>
      </div>
    </div>
  );
};

export default OverOnsHero;
