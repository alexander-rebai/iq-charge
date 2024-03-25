"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import lockIcon from "~/../public/lock.svg";
import speedIcon from "~/../public/speed.svg";
import starIcon from "~/../public/star.svg";
import transformIcon from "~/../public/transform.svg";

import { cn } from "~/lib/utils";
import { Container } from "./container";

export default function Banner() {
  return (
    <div className={cn("relative overflow-hidden  py-32")}>
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={"/cover.jpeg"}
        alt=""
        width={2000}
        height={500}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 md:flex-row">
          <div
            className="flex items-center justify-center gap-4 rounded-xl border border-primary-foreground bg-white px-8 py-4 text-primary-foreground"
            data-aos="fade-up"
          >
            <Image src={starIcon as string} alt="star" width={24} height={24} />
            Toonaangevende en geavanceerde slimme functies
          </div>
          <div
            className="flex items-center justify-center gap-4 rounded-xl border border-primary-foreground bg-white px-8 py-4 text-primary-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src={speedIcon as string}
              alt="speed"
              width={24}
              height={24}
            />
            Ontworpen voor maximale laadsnelheden
          </div>
          <div
            className="flex items-center justify-center gap-4 rounded-xl border border-primary-foreground bg-white px-8 py-4 text-primary-foreground"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image src={lockIcon as string} alt="lock" width={24} height={24} />
            Robuust, veilig en betrouwbaar
          </div>
          <div
            className="flex items-center justify-center gap-4 rounded-xl border border-primary-foreground bg-white px-8 py-4 text-primary-foreground"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src={transformIcon as string}
              alt="transform"
              width={24}
              height={24}
            />
            Selecteer en wissel eenvoudig van managementsysteem
          </div>
        </div>
      </Container>
    </div>
  );
}
