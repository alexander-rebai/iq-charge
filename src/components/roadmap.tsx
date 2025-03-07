"use client";

import "aos/dist/aos.css";
import { Car, Plug } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    name: "Gratis Offerte",
    description:
      "We luisteren naar jouw wensen en geven helder advies over de beste laadoplossing voor jouw situatie en budget.",
    number: 1,
    image: "/icons/Steps/(1) offerte.png",
  },
  {
    name: "Snelle installatie",
    description:
      "Onze gecertificeerde experts regelen alles van A tot Z, zonder gedoe. Binnen 2 weken staat jouw laadpaal gebruiksklaar.",
    number: 2,
    image: "/icons/Steps/(2) Installatie.png",
  },
  {
    name: "Dagelijks opladen",
    description:
      "Sluit 's avonds je auto aan, ga gerust slapen en start elke dag met een volle batterij. Zo bespaar je tijd én geld.",
    number: 3,
    image: "/icons/Steps/3 laadt elektrisch.png",
  },
  {
    name: "24/7 afterservice",
    description:
      "Bij vragen of storingen staan onze experts altijd voor je klaar – dag en nacht.",
    number: 4,
    image: "/icons/Steps/24:7.png",
  },
];

export default function RoadMap() {
  return (
    <section className="relative overflow-hidden rounded-b-xl p-8 md:p-12">
      <div className="mx-auto max-w-7xl pb-12 md:px-12 lg:px-12">
        <div data-aos="fade-up">
          <h3 className="text-4xl font-semibold">
            Snel, feilloos en efficiënt.
          </h3>
        </div>
        <div className="relative mt-24 flex flex-wrap">
          <div className="-z-1 absolute left-0 right-0 top-8 hidden h-[1px] lg:block">
            <div className="h-[1px] w-full bg-primary" data-aos="fade-left" />
          </div>
          <div className="absolute -top-6 left-0" data-aos="fade-right">
            <Plug className="hidden h-12 w-12 rotate-90 text-primary lg:block" />
          </div>
          <div className="absolute -top-6 right-0" data-aos="fade-left">
            <Car className="hidden h-12 w-12 text-primary lg:block" />
          </div>
          <div className="relative ml-[12.5%] grid grid-cols-2 gap-6 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                className="w-full border-b border-primary-foreground pb-4"
                key={step.number}
                data-aos="fade-up"
              >
                <div className="relative mb-6 h-16 w-16 ">
                  <Image
                    src={step.image}
                    alt={step.name}
                    fill
                    className="bg-background object-contain px-2"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="mt-4 h-8 text-xl font-medium leading-6">
                    {step.name}
                  </p>
                  <p className="mt-4 text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
