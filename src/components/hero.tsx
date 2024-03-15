"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="mx-auto mb-10 max-w-7xl px-4 pb-10 text-center sm:px-6 lg:p-16">
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-4">
        <div className="-md:mt-16 col-span-2 mt-6 flex flex-col items-center justify-center lg:items-start lg:text-left">
          <h1
            className="mb-8 max-w-xl text-center text-5xl font-bold tracking-tight text-slate-900 md:text-[64px] lg:text-left"
            data-aos="fade-up"
          >
            Charge your vehicle with IQ
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
              className="rounded-3xl border-2 border-primary-foreground bg-primary/50  px-3.5 py-2 text-lg font-medium text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
          <video
            className="mx-auto w-[11.3rem] max-w-full rounded-[28px] bg-primary object-cover p-2 drop-shadow-xl sm:rounded-[36px] md:w-[18.875rem] md:rounded-[36px]"
            autoPlay
            playsInline
            preload="metadata"
            loop
            muted
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
