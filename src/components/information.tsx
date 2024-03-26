"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { Container } from "./container";

export type Information = {
  title: string;
  info: string;
  image: string;
};

export default function Information({
  information,
  reverse,
  isProduct,
}: {
  information: Information;
  reverse?: boolean;
  isProduct?: boolean;
}) {
  return (
    <Container
      className="my-4 overflow-hidden rounded-xl bg-gray-100 p-12"
      data-aos={"fade-right"}
    >
      <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
        <div className={cn(reverse ? "lg:col-start-2" : "lg:col-start-1")}>
          <p className="mt-2 text-xl font-medium tracking-tight sm:text-4xl">
            {information.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {information.info}
          </p>
          {!isProduct && (
            <div className="mt-10 flex w-full items-center justify-center gap-x-6">
              <a
                href={`/offerte`}
                className="rounded-lg  bg-primary-light px-3.5 py-2 font-medium text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Vraag uw offerte op maat <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </div>
        {isProduct ? (
          <div className="relative h-64 overflow-hidden rounded-xl lg:h-96">
            <Image
              priority
              src={information.image}
              alt="Product screenshot"
              className={cn(
                "object-contain",
                information.title === "Smappee EV Wall" && "mt-24",
              )}
              fill
              sizes="(max-width: 640px) 100vw,
         (max-width: 1280px) 50vw,
         (max-width: 1536px) 33vw,
         25vw"
            />
          </div>
        ) : (
          <div className="relative h-64 overflow-hidden rounded-xl lg:h-96">
            <Image
              priority
              src={information.image}
              alt="Product screenshot"
              className="rounded-xl object-cover shadow-xl"
              fill
              sizes="(max-width: 640px) 100vw,
         (max-width: 1280px) 50vw,
         (max-width: 1536px) 33vw,
         25vw"
            />
          </div>
        )}
      </div>
    </Container>
  );
}
