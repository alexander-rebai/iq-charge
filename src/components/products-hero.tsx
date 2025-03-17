"use client";

import Image from "next/image";
import { FlipWords } from "./flip-words";

const ProductsHero = () => {
  const words = ["Smappee", "Wallbox", "Peblar", "Easee"];

  return (
    <div className="relative mb-20 h-screen">
      <div className="absolute inset-0 z-0 h-full w-full">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://dx8uea1j8p9gd.cloudfront.net/public/fotos/product-mobile.webp"
          />
          <Image
            src="https://dx8uea1j8p9gd.cloudfront.net/public/fotos/product.webp"
            alt="Hero image"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 1600px, 4800px"
            className="h-full w-full object-cover"
            quality={90}
          />
        </picture>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-8 text-center text-white lg:p-0">
        <div className="flex w-full flex-col items-center justify-center md:items-start md:justify-start">
          <div className="flex flex-col gap-1">
            <h1
              className="max-w-3xl text-center text-4xl font-semibold text-white drop-shadow-lg md:text-start md:text-5xl lg:text-[64px]"
              data-aos="fade-up"
            >
              Ons aanbod:
            </h1>
            <h1
              className="mb-8 max-w-3xl text-center text-4xl font-semibold text-white drop-shadow-lg md:text-start md:text-5xl lg:text-[64px]"
              data-aos="fade-up"
            >
              <FlipWords words={words} />
            </h1>
          </div>

          <p
            className="mb-8 max-w-lg text-center text-base text-white drop-shadow-md md:text-start md:text-lg lg:self-auto lg:pr-4 lg:text-[24px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Wij selecteren wat écht bij jou past.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
