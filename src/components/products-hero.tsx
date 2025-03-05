"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { ProductsCarousel } from "./carousels/products-carousel";

const ProductsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      <div className="relative h-full overflow-hidden">
        <Image
          src="/images/night3.jpg"
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
          <div className="flex h-full flex-col justify-center md:justify-end md:pb-96">
            {/* Content container - centered on mobile, left-aligned on desktop */}
            <div className="flex flex-col space-y-6 text-center md:max-w-xl md:text-left">
              <h1
                className="text-4xl font-semibold text-white drop-shadow-lg md:text-5xl lg:text-[64px]"
                data-aos="fade-up"
              >
                Ons aanbod
              </h1>
              <p className="text-base text-white drop-shadow-md md:text-lg lg:text-[24px]">
                Wij werken niet voor een merk, maar voor jou.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel - hidden on mobile */}
        <div className="hidden xl:block">
          <ProductsCarousel />
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
