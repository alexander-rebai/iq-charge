"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0 h-full w-full">
        <video autoPlay muted loop className="h-full w-full object-cover">
          <source
            src="https://res.cloudinary.com/dnc1cyqbv/video/upload/v1711449457/EV_Fuel_Plugging_3840x2160_2_owmgmc.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      <div className="z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-8 text-center text-white md:py-32">
        <div className="flex h-full w-full flex-col items-center justify-center md:items-start lg:justify-end">
          <div>
            <h1
              className="mb-2 max-w-2xl text-left text-5xl font-medium tracking-tight text-white md:text-start md:text-6xl "
              data-aos="fade-up"
            >
              Met <span className="text-primary-light"> IQ Charge</span> kies je
              voor gemak, veiligheid
            </h1>
            <h1
              className="mb-4 max-w-2xl text-left text-5xl font-medium tracking-tight text-white md:mb-8 md:text-start md:text-6xl "
              data-aos="fade-up"
            >
              en efficiëntie.
            </h1>
          </div>

          <p
            className="desc text-md mb-8 max-w-lg text-left text-white md:text-start md:text-lg lg:self-auto lg:pr-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Of je nu thuis oplaadt of op het werk, wij bieden de{" "}
            <span className="text-primary-light"> perfecte laadoplossing</span>{" "}
            voor iedere elektrische autobezitter.
          </p>
          <div
            className="flex items-center justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="/bedrijf"
              className="flex justify-center rounded-xl border-2 border-primary-light px-3.5 py-2 text-lg font-medium text-primary-light shadow-sm hover:bg-primary-light hover:text-primary-foreground"
            >
              Bedrijf
            </a>
            <a
              href="/particulier"
              className="flex justify-center rounded-xl border-2 border-primary-light px-3.5 py-2 text-lg font-medium text-primary-light shadow-sm hover:bg-primary-light hover:text-primary-foreground"
            >
              Particulier
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
