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
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="absolute bottom-0 left-1/2 max-w-7xl -translate-x-1/2 translate-y-1/4 px-6 md:w-3/4 lg:px-8">
        <div className="mx-auto max-w-2xl md:max-w-none">
          <dl className="mt-16 hidden overflow-hidden rounded-xl text-center md:grid md:grid-cols-3">
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
            className="mb-8 max-w-2xl text-left text-4xl font-semibold text-white drop-shadow-lg md:text-start md:text-5xl lg:text-[64px]"
            data-aos="fade-up"
          >
            Zorgeloos wegrijden met een volle batterij?
          </h1>

          <p
            className="mb-8 max-w-lg text-left text-base text-white drop-shadow-md md:text-start md:text-lg lg:self-auto lg:pr-4 lg:text-[24px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Met onze{" "}
            <span className="text-primary-light">slimme laadoplossingen</span>{" "}
            maak je elektrisch rijden eenvoudiger dan ooit. Start elke dag met
            100% energie - zonder wachtrijen of omwegen langs het tankstation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartiulierHero;
