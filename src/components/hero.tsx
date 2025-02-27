"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { CardCarousel } from "./card-carousel";
import { Button } from "./ui/button";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section className="relative h-[calc(100vh-48px)] w-full overflow-hidden">
      <div className="relative h-full overflow-hidden">
        <Image
          src="https://bright-energy.eu/_vercel/image?url=%2Fimages%2Fhomepage-hero-sm.jpg&w=1536&q=100"
          alt="Hero cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 1600px, 4800px"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0">
        <div className="mx-40 h-full max-w-7xl px-8">
          <div className="flex h-full flex-col justify-end pb-80">
            {/* Left content */}
            <div className="flex max-w-xl flex-col space-y-6">
              <h1
                className="text-5xl font-semibold text-white md:text-[64px]"
                data-aos="fade-up"
              >
                Met <span className="text-primary-light">Laadexpert</span> kies
                je voor gemak
              </h1>
              <p
                className="text-lg text-gray-300 md:text-[24px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Of je nu thuis oplaadt of op het werk, wij bieden de perfecte
                laadoplossing
              </p>
              <div
                className="flex flex-col space-y-4 pt-4 md:flex-row md:space-x-4 md:space-y-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Button variant="secondary" className="!h-11 w-full md:w-64">
                  <a href="/particulier">Call To Action</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <CardCarousel />
      </div>
    </section>
  );
}
