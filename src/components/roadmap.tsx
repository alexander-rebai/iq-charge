"use client";

import "aos/dist/aos.css";
import { Car, Plug } from "lucide-react";

const steps = [
  {
    name: "GratisOfferte",
    description: "Vraag eenvoudig een offerte aan via onze website.",
    number: 1,
  },
  {
    name: "Bevestig je offerte",
    description: "Bevestig offerte via mail en wij gaan voor jou aan de slag.",
    number: 2,
  },
  {
    name: "Installatie",
    description: "Wij komen langs voor de installatie.",
    number: 3,
  },
  {
    name: "Keuring",
    description:
      "Na de installatie wordt je laadstation gekeurd door een expert.",
    number: 4,
  },
];

export default function RoadMap() {
  return (
    <section className="relative overflow-hidden rounded-b-xl bg-primary-background">
      <div className="mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-36">
        <div data-aos="fade-up">
          <h3 className="text-4xl">This is how it works</h3>
        </div>
        <div className="relative mt-24 flex flex-wrap">
          <div className="-z-1 absolute left-0 right-0 top-8 hidden h-[1px] lg:block">
            <div
              className="h-[1px] w-full bg-primary"
              data-aos="fade-left"
            ></div>
          </div>
          <div className="absolute -top-6 left-0" data-aos="fade-right">
            <Plug className="hidden h-12 w-12 rotate-90 text-primary lg:block" />
          </div>
          <div className="absolute -top-6 right-0" data-aos="fade-left">
            <Car className="hidden h-12 w-12 text-primary lg:block" />
          </div>
          <div className="relative ml-[12.5%] mr-[12.5%] grid grid-cols-2 gap-6 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                className="w-full border-b border-primary-foreground pb-4"
                key={step.number}
                data-aos="fade-up"
              >
                <span
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-primary-foreground bg-primary-light text-primary-foreground lg:mb-16`}
                >
                  {step.number}
                </span>
                <div className="flex flex-col">
                  <p className="mt-12 h-20 text-xl font-medium leading-6">
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
        <div
          data-aos="fade-up"
          className="rounded-4xl relative mt-24 h-full rounded-xl border border-primary-foreground bg-primary-light p-8 text-center shadow-lg ring-primary lg:col-span-full lg:px-20"
        >
          <h4 className="lg:text-3xl">
            &quot;IQ Charge has a team of experts
            <span className="md:block">
              who are ready to help at any moment.&quot;
            </span>
          </h4>
          <p className="mt-6 text-xl font-medium uppercase italic text-primary-foreground">
            Alexander Rebai
          </p>
        </div>
      </div>
    </section>
  );
}
