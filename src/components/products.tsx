"use client";

import Image from "next/image";
import { Container } from "./container";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export type Product = {
  name: string;
  path: string;
  img: string;
  features: string[];
};

export default function Products({ products }: { products: Product[] }) {
  return (
    <div className="rounded-b-xl bg-muted md:p-12">
      <Container className="overflow-hidden" data-aos="fade-up">
        <div className="flex flex-wrap justify-center md:gap-y-8">
          {products.map((product) => (
            <CardContainer className="flex-1 cursor-pointer" key={product.name}>
              <CardBody className="relative flex flex-col items-center justify-between rounded-xl border border-black/[0.1] bg-gray-50 p-12 hover:bg-primary/50">
                <CardItem
                  translateZ="100"
                  className="flex w-full items-center justify-center"
                >
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={200}
                    height={500}
                    className="mb-4 group-hover:scale-110"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {product.name}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </Container>
    </div>
  );
}
