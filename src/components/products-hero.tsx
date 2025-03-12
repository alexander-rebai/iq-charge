"use client";

import Image from "next/image";
import { FlipWords } from "./flip-words";

const ProductsHero = () => {
  const words = ["Smappee", "Wallbox", "Peblar", "Easee"];

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      <div className="relative h-full overflow-hidden">
        <picture>
          {/* Mobile optimized image */}
          <Image
            src="https://dx8uea1j8p9gd.cloudfront.net/public/fotos/products-hero (1).webp"
            alt="Hero image"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="h-full w-full object-cover"
            quality={90}
          />
        </picture>
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
                  className="max-w-3xl text-left text-3xl font-semibold text-white drop-shadow-lg sm:text-4xl md:text-start md:text-5xl lg:text-[64px]"
                  data-aos="fade-up"
                >
                  Ons aanbod:
                </h1>
                <h1
                  className="mb-4 max-w-3xl text-left text-3xl font-semibold text-white drop-shadow-lg sm:text-4xl md:text-start md:text-5xl lg:text-[64px]"
                  data-aos="fade-up"
                >
                  <FlipWords words={words} />
                </h1>
              </div>
              <p
                className="max-w-lg text-left text-sm text-white drop-shadow-md sm:text-base md:text-start md:text-lg lg:self-auto lg:pr-4 lg:text-[24px]"
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
