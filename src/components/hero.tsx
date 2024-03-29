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

      <div className="z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-8 text-center text-white lg:p-0">
        <div className="flex w-full flex-col items-center justify-center md:items-start md:justify-start">
          <h1
            className="mb-8 max-w-2xl text-left text-5xl font-medium tracking-tight text-white md:text-start "
            data-aos="fade-up"
          >
            Met <span className="text-primary-light"> IQ Charge</span> kies je
            voor gemak, veiligheid <br /> en efficiëntie.
          </h1>

          <p
            className="desc text-md mb-8 max-w-lg text-left text-white md:text-start lg:self-auto lg:pr-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Of je nu thuis oplaadt of op het werk, wij bieden de{" "}
            <span className="text-primary-light"> perfecte laadoplossing</span>{" "}
            voor iedere elektrische autobezitter.
          </p>
          <div
            className="flex flex-col items-center justify-center gap-6 md:flex-row"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="/bedrijf"
              className="flex w-40 justify-center bg-gray-100 px-3.5 py-2 text-lg font-medium text-black shadow-sm hover:bg-primary-light hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Bedrijf
            </a>
            <a
              href="/particulier"
              className="flex w-40 justify-center bg-gray-100 px-3.5 py-2 text-lg font-medium text-black shadow-sm transition duration-200 ease-in-out hover:bg-primary-light hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Particulier
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
