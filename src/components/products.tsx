"use client";

import Image from "next/image";
import { Container } from "./container";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";

export type Product = {
  name: string;
  path: string;
  img: string;
  features: string[];
};

export default function Products({ products }: { products: Product[] }) {
  const router = useRouter();
  return (
    <div className="bg-muted rounded-b-xl md:p-12">
      <Container className="overflow-hidden">
        <div className="flex flex-wrap justify-between md:gap-8">
          {products.map((product) => (
            <Card
              key={product.name}
              className="hover:bg-primary/50 group mb-8 min-w-full flex-1 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl md:min-h-[400px] md:min-w-[40%]"
              onClick={() => router.push(`/products/${product.path}`)}
            >
              <CardContent className="flex h-full flex-col items-center justify-between p-12">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={200}
                  height={500}
                  className="mb-4 group-hover:scale-110"
                />
                <div className="group-hover:text-primary-foreground text-center text-3xl font-bold">
                  {product.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
