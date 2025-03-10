"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { FlipWords } from "./flip-words";

const ProductsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const words = ["Smappee", "Wallbox", "Peblar", "Easee"];

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      <div className="relative h-full overflow-hidden">
        <Image
          src="https://laadexpert.s3.eu-north-1.amazonaws.com/public/images/night3.jpg"
          alt="Hero cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 1600px, 4800px"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0">
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 md:mx-40 md:px-8">
          {/* Mobile: centered content, Desktop: bottom-aligned content */}
          <div className="flex h-full flex-col justify-center md:justify-end md:pb-96">
            {/* Content container - centered on mobile, left-aligned on desktop */}
            <div className="flex flex-col space-y-6 text-center md:max-w-xl md:text-left">
              <div className="flex flex-col gap-1">
                <h1
                  className="max-w-3xl text-left text-4xl font-semibold text-white drop-shadow-lg md:text-start md:text-5xl lg:text-[64px]"
                  data-aos="fade-up"
                >
                  Ons aanbod:
                </h1>
                <h1
                  className="mb-4 max-w-3xl text-left text-4xl font-semibold text-white drop-shadow-lg md:text-start md:text-5xl lg:text-[64px]"
                  data-aos="fade-up"
                >
                  <FlipWords words={words} />
                </h1>
              </div>
              <p
                className="max-w-lg text-left text-base text-white drop-shadow-md md:text-start md:text-lg lg:self-auto lg:pr-4 lg:text-[24px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Wij werken niet voor een merk maar voor jou.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
