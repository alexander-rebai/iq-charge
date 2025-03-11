"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { useLandbot } from "~/hooks/useLandbot";
import StatsComponent from "./stats-component";
import { Button } from "./ui/button";

const PartiulierHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const { openChat } = useLandbot();

  return (
    <div className="relative mb-20 h-screen">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/thuis.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero image"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="lg:px-8q absolute bottom-0 left-1/2 hidden max-w-7xl -translate-x-1/2 translate-y-1/4 px-6 md:w-3/4 lg:block">
        <div className="mx-auto max-w-2xl md:max-w-none">
          <StatsComponent variant={"thuis"} />
        </div>
      </div>

      <div className="z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-8 text-center text-white lg:p-0">
        <div className="flex w-full flex-col items-center justify-center md:items-start md:justify-start">
          <h1
            className="mb-8 max-w-2xl text-left text-4xl font-semibold text-white drop-shadow-lg md:text-start md:text-5xl lg:text-[64px]"
            data-aos="fade-up"
          >
            Zorgeloos wegrijden met een volle batterij.
          </h1>

          <p
            className="mb-8 max-w-lg text-left text-base text-white drop-shadow-md md:text-start md:text-lg lg:self-auto lg:pr-4 lg:text-[24px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Met onze{" "}
            <span className="text-primary-light">slimme laadoplossingen</span>{" "}
            maak je elektrisch rijden eenvoudiger dan ooit.
          </p>
          <div
            className="flex flex-col space-y-4 pt-4 md:flex-row md:space-x-4 md:space-y-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Button
              variant="secondary"
              className="mx-auto md:mx-0"
              onClick={openChat}
              size="lg"
            >
              Vraag je gratis adviesgesprek aan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartiulierHero;
