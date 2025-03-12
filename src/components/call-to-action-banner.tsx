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
}: {
  title: string;
  info: string;
}) {
  const { openChat } = useLandbot();

  return (
    <div className={cn("relative z-[9999] overflow-hidden py-36")}>
      <Image
        className="absolute left-1/2 top-1/2 h-full w-screen max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-bottom"
        src="https://dx8uea1j8p9gd.cloudfront.net/public/images/bridge.webp"
        alt=""
        width={2347}
        height={2044}
        unoptimized
      />
      <div className="absolute inset-0 bg-black opacity-40" />

      <Container className="relative">
        <div className={cn("mx-auto text-left")}>
          <h2
            className="text-4xl font-medium tracking-tight text-white"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            {title}
          </h2>
          <p
            className={cn("mt-4 max-w-xl text-lg leading-6 text-white")}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            {info}
          </p>
        </div>

        <div
          className="mt-10 flex items-center justify-start gap-x-6"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <Button variant="secondary" onClick={openChat}>
            Vraag een gratis offerte
          </Button>
        </div>
      </Container>
    </div>
  );
}
