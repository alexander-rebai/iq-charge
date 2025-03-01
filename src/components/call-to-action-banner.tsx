"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { useLandbot } from "~/hooks/useLandbot";
import { cn } from "~/lib/utils";
import { Container } from "./container";
import { Button } from "./ui/button";

export default function CallToActionBanner({
  title,
  info,
  isFluvius,
  isIQSolar,
}: {
  title: string;
  info: string;
  isFluvius?: boolean;
  isIQSolar?: boolean;
}) {
  const { openChat } = useLandbot();

  return (
    <div className={cn("relative overflow-hidden py-36")}>
      <Image
        className="absolute left-1/2 top-1/2 h-full w-screen max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-bottom"
        src={"/images/bridge.jpg"}
        alt=""
        width={2347}
        height={2044}
        unoptimized
      />
      <div className="absolute inset-0 bg-black opacity-40" />

      <Container className="relative">
        <div className={cn("mx-auto text-left", isIQSolar && "text-right")}>
          <h2
            className="text-xl font-medium tracking-tight text-white sm:text-4xl"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            {title}
          </h2>
          <p
            className={cn(
              "mt-2 max-w-xl text-lg leading-8 text-white",
              isIQSolar && "ml-auto",
            )}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            {info}
          </p>
        </div>
        {isFluvius ? (
          <div
            className="mt-10 flex items-center justify-start"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <a
              href="https://www.fluvius.be/nl/duurzame-mobiliteit/laadpaal-melden"
              target="_blank"
              className="black rounded-xl bg-white px-3.5 py-2.5 text-sm font-medium shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Laadpaal aanmelden
            </a>
          </div>
        ) : isIQSolar ? (
          <div
            className="mt-10 flex items-center justify-end gap-x-6"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <a
              href="#"
              className="black rounded-xl bg-white px-3.5 py-2.5 text-sm font-medium shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ontdek IQ Solar
            </a>
          </div>
        ) : (
          <div
            className="mt-10 flex items-center justify-start gap-x-6"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <Button variant="secondary" onClick={openChat}>
              Vraag een gratis offerte
            </Button>
            <a
              href="#"
              className="text-sm font-medium leading-6 text-white transition-all duration-300 ease-in-out hover:scale-110"
            >
              Contacteer ons <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </Container>
    </div>
  );
}
