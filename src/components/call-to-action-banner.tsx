import Image from "next/image";
import { Container } from "./container";

export default function CallToActionBanner({
  title,
  info,
  isFluvius,
}: {
  title: string;
  info: string;
  isFluvius?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl py-32">
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={"/gradient.jpeg"}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
            {info}
          </p>
        </div>
        {isFluvius ? (
          <div className="mt-10 flex items-center justify-center">
            <a
              href="https://www.fluvius.be/nl/duurzame-mobiliteit/laadpaal-melden"
              target="_blank"
              className="text-primary-foreground rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Laadpaal aanmelden
            </a>
          </div>
        ) : (
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="text-primary-foreground rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Vraag een offerte
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white transition-all duration-300 ease-in-out hover:scale-110"
            >
              Contact us <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </Container>
    </div>
  );
}
