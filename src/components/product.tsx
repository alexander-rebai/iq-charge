import Image from "next/image";
import { cn } from "~/lib/utils";
import { Container } from "./container";

export type Product = {
  name: string;
  path: string;
  img: string;
  features: string[];
};

export default function Product({
  product,
  reverse,
}: {
  product: Product;
  reverse?: boolean;
}) {
  return (
    <Container className="overflow-hidden">
      <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
        <div className={cn(reverse ? "md:col-start-2" : "md:col-start-1")}>
          <p className="text-primary-foreground mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {product.name}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {product.features.map((feature, i) => (
              <span key={i} className="mt-2 block">
                {feature}
              </span>
            ))}
          </p>
          <div className="mt-10 flex w-full items-center justify-center gap-x-6">
            <a
              href={`/products/${product.path}`}
              className="border-primary-foreground bg-primary/50 text-primary-foreground focus-visible:outline-primary rounded-lg border-2 px-3.5 py-2 font-medium shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Meer weten <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative h-64 rounded-xl lg:h-96">
          <Image
            src={product.img}
            alt="Product screenshot"
            className={cn(
              "rounded-xl object-contain p-6",
              product.name === "Wallbox Pulsar Plus" && "brightness-110",
            )}
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
