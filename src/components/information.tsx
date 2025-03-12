"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { Container } from "./container";
import { Button } from "./ui/button";

export type Information = {
  title: string;
  info: string;
  image: string;
  path?: string;
};

export default function Information({
  information,
  reverse,
  isProduct,
  isOfferte,
  onSelect,
  isColumn,
}: {
  information: Information;
  reverse?: boolean;
  isProduct?: boolean;
  isOfferte?: boolean;
  onSelect?: () => void;
  isColumn?: boolean;
}) {
  return (
    <Container
      className={cn("my-4 overflow-hidden rounded-xl bg-muted p-12")}
      data-aos={isOfferte ? null : "fade-right"}
    >
      <div
        className={
          isColumn
            ? "gap-8 lg:flex lg:flex-col lg:gap-12"
            : "grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12"
        }
      >
        <div
          className={cn(
            reverse && !isColumn ? "lg:col-start-2" : "lg:col-start-1",
          )}
        >
          <p className="mt-2 text-xl font-medium tracking-tight sm:text-4xl">
            {information.title}
          </p>
          <p
            className={cn(
              "mt-6 text-lg leading-8 text-gray-600",
              isColumn && "xl:h-96",
            )}
          >
            {information.info}
          </p>
          {isProduct && !isOfferte ? (
            <div className="mt-10 flex w-full items-center justify-center gap-x-6">
              <a
                href={`/offerte`}
                className="flex w-fit justify-center rounded-xl bg-primary-light px-3.5 py-2 text-lg font-medium text-black shadow-sm hover:opacity-90"
              >
                Vraag jouw offerte op maat <span aria-hidden="true">→</span>
              </a>
            </div>
          ) : isOfferte ? (
            <div className="mt-10 flex w-full items-center justify-center gap-x-6 ">
              <Button variant={"outline"} onClick={onSelect}>
                <span>
                  Configureer <span aria-hidden="true">→</span>
                </span>
              </Button>
            </div>
          ) : (
            <div className="mt-10 flex w-full items-center justify-center gap-x-6">
              <a
                href={`/products/${information.path}`}
                className="flex w-fit justify-center rounded-xl bg-primary-light px-3.5 py-2 text-lg font-medium text-black shadow-sm hover:opacity-90"
              >
                Meer info
              </a>
            </div>
          )}
        </div>
        {isProduct ? (
          <div className="relative mt-10 h-64 overflow-hidden rounded-xl lg:mt-0 lg:h-96">
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
