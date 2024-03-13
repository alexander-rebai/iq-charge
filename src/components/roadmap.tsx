import { BatteryCharging, Car, Plug } from "lucide-react";
import { Container } from "./container";
import Image from "next/image";

const steps = [
  {
    name: "Online offerte aanvragen",
    description: "Vraag gratis en eenvoudig een offerte aan via onze website.",
    number: 1,
  },
  {
    name: "Bevestig uw offerte",
    description:
      "U ontvangt een offerte per mail. Bevestig deze en wij gaan voor u aan de slag.",
    number: 2,
  },
  {
    name: "Installatie van uw laadstation",
    description:
      "Plan een datum in en wij komen bij u langs voor de installatie.",
    number: 3,
  },
  {
    name: "Onafhankelijke keuring van uw installatie",
    description:
      "Na de installatie wordt uw laadstation gekeurd door een onafhankelijke expert.",
    number: 4,
  },
];

export default function RoadMap() {
  return (
    <Container className="relative mb-10 mt-10 lg:mb-80 lg:mt-24">
      <div className="relative hidden items-center justify-center lg:flex lg:gap-56 xl:gap-x-64">
        <div className="absolute bottom-1/2 left-0 z-10 -translate-y-1/4">
          <Plug size={38} className="text-primary-foreground rotate-90" />
        </div>
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="bg-primary h-0.5 w-full" />
        </div>

        {steps.map((step) => (
          <div className="relative" key={step.number}>
            <div
              className="border-primary-foreground relative flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white"
              aria-current="step"
            >
              <span className="text-primary-foreground absolute -top-8 text-xl font-bold">
                {step.number}
              </span>
              <span
                className="bg-primary-foreground h-2.5 w-2.5 rounded-full"
                aria-hidden="true"
              />
            </div>
            <div className="absolute left-1/2 top-8 -translate-x-1/2 transform">
              <div className="bg-primary mx-auto h-16 w-0.5" />
              <div className="border-primary-foreground bg-primary/50 text-primary-foreground relative flex h-44 w-60 flex-col justify-between rounded-md border-2 p-4 shadow-md">
                <h1 className=" text-center text-lg font-bold">{step.name}</h1>
                <p className="mt-2 text-center">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-1/2 right-0 z-10 -translate-y-1/4">
          <Car size={38} className="text-primary-foreground" />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:hidden">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border-primary-foreground bg-primary/50 text-primary-foreground relative flex w-full flex-col justify-between self-center rounded-md border-2 p-4 shadow-md md:w-1/2"
          >
            <div className="text-primary-foreground absolute left-2 top-0">
              {step.number}
            </div>
            <h1 className=" text-center text-lg font-bold">{step.name}</h1>
            <p className="mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
