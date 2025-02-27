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
    <div className="relative mb-20 h-screen">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/night3.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero image"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-8 text-center text-white lg:p-0">
        <div className="flex w-full flex-col items-center justify-center md:items-start md:justify-start">
          <h1
            className="mb-8 max-w-2xl text-left text-6xl font-medium tracking-tight text-white md:text-start "
            data-aos="fade-up"
          >
            Over ons
          </h1>

          <p
            className="desc mb-8 max-w-lg text-left text-lg text-white md:text-start lg:self-auto lg:pr-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Of je nu thuis oplaadt of op het werk, wij bieden de{" "}
            <span className="text-primary-light"> perfecte laadoplossing</span>{" "}
            voor iedere elektrische autobezitter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverOnsHero;
