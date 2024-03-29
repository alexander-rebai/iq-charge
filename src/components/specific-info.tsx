"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { Container } from "./container";

export type Information = {
  title: string;
  info: string;
  image: string;
  path?: string;
};

export default function SpecificInfo({
  information,
}: {
  information: Information;
}) {
  return (
    <Container
      className="my-4 overflow-hidden rounded-xl p-12"
      data-aos={"fade-up"}
    >
      <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
        <div>
          <p className="mt-2 text-xl font-medium tracking-tight sm:text-4xl">
            {information.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {information.info}
          </p>
        </div>

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
      </div>
    </Container>
  );
}
