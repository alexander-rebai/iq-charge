"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { Container } from "./container";

export type Information = {
  title: string;
  info: string;
  info2?: string;
  image: string;
  path?: string;
};

export default function SpecificInfo({
  information,
  isReverse = false,
}: {
  information: Information;
  isReverse?: boolean;
}) {
  return (
    <Container
      className="my-4 overflow-hidden rounded-xl p-12"
      data-aos={"fade-up"}
    >
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Mobile layout (always the same regardless of isReverse) */}
        <div className="block md:hidden">
          <p className="mt-2 text-xl font-medium tracking-tight sm:text-4xl">
            {information.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {information.info}
          </p>
          {information.info2 && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {information.info2}
            </p>
          )}
        </div>

        <div className="relative block h-64 overflow-hidden rounded-xl md:hidden">
          <Image
            priority
            src={information.image}
            alt="Product screenshot"
            className="rounded-xl object-cover shadow-xl"
            fill
            sizes="100vw"
          />
        </div>

        {/* Desktop layout (respects isReverse) */}
        {isReverse ? (
          <>
            <div className="relative hidden h-64 overflow-hidden rounded-xl md:block lg:h-96">
              <Image
                priority
                src={information.image}
                alt="Product screenshot"
                className="rounded-xl object-cover shadow-xl"
                fill
                sizes="(max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
              />
            </div>

            <div className="hidden md:block">
              <p className="mt-2 text-xl font-medium tracking-tight sm:text-4xl">
                {information.title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {information.info}
              </p>
              {information.info2 && (
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {information.info2}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="hidden md:block">
              <p className="mt-2 text-xl font-medium tracking-tight sm:text-4xl">
                {information.title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {information.info}
              </p>
              {information.info2 && (
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {information.info2}
                </p>
              )}
            </div>

            <div className="relative hidden h-64 overflow-hidden rounded-xl md:block lg:h-96">
              <Image
                priority
                src={information.image}
                alt="Product screenshot"
                className="rounded-xl object-cover shadow-xl"
                fill
                sizes="(max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
              />
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
