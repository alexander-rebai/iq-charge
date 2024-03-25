"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="mx-auto mb-10 max-w-7xl px-4 pb-10 text-center sm:px-6 md:mb-12 md:mt-44 lg:p-16 ">
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-4">
        <div className="-md:mt-16 col-span-2 mt-6 flex flex-col items-center justify-center lg:items-start lg:text-left">
          <h1
            className="mb-8 max-w-xl text-center text-5xl font-bold tracking-tight text-slate-900 md:text-[64px] lg:text-left"
            data-aos="fade-up"
          >
            Met IQ Charge kies je voor gemak, veiligheid en efficiëntie.
          </h1>
          <p
            className="desc text-md mb-8 max-w-lg self-center text-center text-slate-700 lg:self-auto lg:pr-4 lg:text-left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Laad je elektrische voertuig snel, veilig én betrouwbaar op met IQ
            Charge, jouw expert in laadstations! Of je nu thuis oplaadt of op
            het werk, wij bieden de perfecte laadoplossing voor iedere
            elektrische autobezitter.
          </p>
          <div
            className="flex flex-col items-center justify-center gap-6 md:flex-row"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="/offerte?userType=bedrijf"
              className="flex w-40 justify-center rounded-3xl border-2 border-primary-foreground bg-primary-light px-3.5 py-2 text-lg font-medium text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Bedrijf
            </a>
            <a
              href="/offerte?userType=particulier"
              className="flex w-40 justify-center rounded-3xl border-2 border-primary-foreground px-3.5 py-2 text-lg font-medium text-primary-foreground shadow-sm transition duration-200 ease-in-out hover:bg-primary-light hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Particulier
            </a>
          </div>
        </div>
        <div
          className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Image
            src="/logo.png"
            alt="Hero image"
            width={800}
            height={800}
            layout="responsive"
            priority
          />
        </div>
      </div>
    </div>
  );
}
