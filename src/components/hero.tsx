"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { useLandbot } from "~/hooks/useLandbot";
import { RealisationsCarousel } from "./carousels/realisations-carousel";
import { FlipWords } from "./flip-words";
import { Button } from "./ui/button";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const words = ["laadexpert.", "gemak."];

  const { openChat } = useLandbot();

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      <div className="relative h-full overflow-hidden">
        <Image
          src="/cover-test.jpg"
          alt="Hero cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 1600px, 4800px"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0">
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 md:mx-40 md:px-8">
          {/* Mobile: centered content, Desktop: bottom-aligned content */}
          <div className="flex h-full flex-col justify-center md:justify-end md:pb-80">
            {/* Content container - centered on mobile, left-aligned on desktop */}
            <div className="flex flex-col space-y-6 text-center md:max-w-xl md:text-left">
              <h1
                className="text-4xl font-semibold text-white drop-shadow-lg md:text-5xl lg:text-[64px]"
                data-aos="fade-up"
              >
                Kies voor <br />
                <FlipWords words={words} />
              </h1>
              <p
                className="text-base text-white drop-shadow-md md:text-lg lg:text-[24px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Of je nu thuis of op je werk wilt laden: wij regelen de perfecte
                laadoplossing. Snel, zorgeloos en op maat.
              </p>
              <div
                className="flex flex-col space-y-4 pt-4 md:flex-row md:space-x-4 md:space-y-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Button
                  variant="secondary"
                  className="mx-auto !h-11 w-full md:mx-0 md:w-64"
                  onClick={openChat}
                >
                  Gratis offerte & adviesgesprek
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel - hidden on mobile */}
        <div className="hidden xl:block">
          <RealisationsCarousel />
        </div>
      </div>
    </section>
  );
}
