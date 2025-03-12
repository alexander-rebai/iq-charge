"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const stats = [
  { id: 1, name: "Company Installations", value: "3,000+" },
  { id: 3, name: "Love our work", value: "99.9%" },
  { id: 4, name: "Revenue", value: "$70M" },
];

const OverOnsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="https://dx8uea1j8p9gd.cloudfront.net/public/images/night3.jpg"
          alt="Hero image"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-8 text-center text-white lg:p-0">
        <div className="flex w-full flex-col items-center justify-center gap-6 md:items-start md:justify-start">
          <h1
            className="text-4xl font-semibold text-primary-foreground drop-shadow-lg md:text-5xl lg:text-[64px]"
            data-aos="fade-up"
          >
            Over ons
          </h1>
          <p
            className="max-w-lg text-left text-base text-white drop-shadow-md md:text-start md:text-lg lg:self-auto lg:pr-4 lg:text-[24px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Leer meer over ons en onze missie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverOnsHero;
