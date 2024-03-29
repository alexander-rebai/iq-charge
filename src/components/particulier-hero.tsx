"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const stats = [
  { id: 1, name: "Home Installations", value: "3,000+" },
  { id: 3, name: "Love our work", value: "99.9%" },
  { id: 4, name: "Revenue", value: "$70M" },
];

const PartiulierHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="relative mb-20 h-screen">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/products/alfen_prod.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Hero image"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      <div className="absolute bottom-0 left-1/2 max-w-7xl -translate-x-1/2 translate-y-1/3 px-6 md:w-3/4 lg:px-8">
        <div className="mx-auto max-w-2xl md:max-w-none">
          <dl className="mt-16 hidden overflow-hidden rounded-2xl text-center md:grid md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-muted p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-8 text-center text-white lg:p-0">
        <div className="flex w-full flex-col items-center justify-center md:items-start md:justify-start">
          <h1
            className="mb-8 max-w-2xl text-left text-5xl font-medium tracking-tight text-white md:text-start "
            data-aos="fade-up"
          >
            <span className="text-primary-light">IQ Charge</span> voor
            particulieren
          </h1>

          <p
            className="desc text-md mb-8 max-w-lg text-left text-white md:text-start lg:self-auto lg:pr-4"
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

export default PartiulierHero;
