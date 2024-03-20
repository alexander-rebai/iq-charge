"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { Container } from "./container";

export type Product = {
  name: string;
  path: string;
  img: string;
  features: string[];
};

export default function Products({ products }: { products: Product[] }) {
  return (
    <div className="bg-primary-background rounded-b-xl md:p-12">
      <Container className="overflow-hidden" data-aos="fade-up">
        <div className="flex flex-wrap justify-center md:gap-y-8">
          {products.map((product) => (
            <CardContainer className="flex-1 cursor-pointer" key={product.name}>
              <CardBody className="hover:bg-primary-light relative flex flex-col items-center justify-between rounded-xl border border-black/[0.1] bg-gray-50 p-12">
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
