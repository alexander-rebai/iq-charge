"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { Container } from "./container";

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
  return (
    <div className={cn("relative overflow-hidden py-12")}>
      <Image
        className="absolute left-1/2 top-1/2 h-full w-screen max-w-none -translate-x-1/2 -translate-y-1/2"
        src={"/gradient.jpeg"}
        alt=""
        width={2347}
        height={2044}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <h2
            className="text-xl font-medium tracking-tight text-white sm:text-4xl"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            {title}
          </h2>
          <p
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            {info}
          </p>
        </div>
        {isFluvius ? (
          <div
            className="mt-10 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <a
              href="https://www.fluvius.be/nl/duurzame-mobiliteit/laadpaal-melden"
              target="_blank"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Laadpaal aanmelden
            </a>
          </div>
        ) : isIQSolar ? (
          <div
            className="mt-10 flex items-center justify-center gap-x-6"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ontdek IQ Solar
            </a>
          </div>
        ) : (
          <div
            className="mt-10 flex items-center justify-center gap-x-6"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Vraag een offerte
            </a>
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
