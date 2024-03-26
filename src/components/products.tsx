"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export type Product = {
  name: string;
  path: string;
  img: string;
  features: string[];
};

export default function Products({ products }: { products: Product[] }) {
  const router = useRouter();
  return (
    <div className="px-6 py-8 md:p-12">
      <div className="overflow-hidden" data-aos="fade-up">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
          {products.map((product) => (
            <CardContainer className="flex-1 cursor-pointer" key={product.name}>
              <CardBody className="relative flex flex-col items-center justify-between rounded-xl border border-black/[0.1] bg-gray-50 p-12 hover:bg-primary-light">
                <CardItem
                  translateZ="100"
                  className="flex w-full items-center justify-center"
                  onClick={() => router.push(`products/${product.path}`)}
                >
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={400}
                    height={200}
                    className="mb-4 rounded-xl group-hover:scale-110"
                  />
                </CardItem>
                <CardItem
                  onClick={() => router.push(`products/${product.path}`)}
                  translateZ="50"
                  className="text-xl font-medium text-neutral-600 dark:text-white"
                >
                  {product.name}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
