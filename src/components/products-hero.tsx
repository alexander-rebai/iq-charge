"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { ProductsCarousel } from "./carousels/products-carousel";

const stats = [
  { id: 1, name: "Company Installations", value: "3,000+" },
  { id: 3, name: "Love our work", value: "99.9%" },
  { id: 4, name: "Revenue", value: "$70M" },
];

const ProductsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        <div className="mx-40 h-full max-w-7xl px-8">
          <div className="flex h-full flex-col justify-end pb-96">
            {/* Left content */}
            <div className="flex max-w-xl flex-col space-y-6">
              <h1
                className="text-5xl font-semibold text-white drop-shadow-lg md:text-[64px]"
                data-aos="fade-up"
              >
                Ons aanbod
              </h1>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <ProductsCarousel />
      </div>
    </section>
  );
};

export default ProductsHero;
