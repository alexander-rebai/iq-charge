import Image from "next/image";
import { Container } from "./container";

const SolutionHome = () => {
  return (
    <Container className="mt-20">
      <div className="grid h-[32rem] grid-cols-1 gap-8 md:grid-cols-3">
        <div className="relative flex flex-col items-start justify-end overflow-hidden rounded-lg p-8 md:col-span-2">
          <Image
            className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 object-cover"
            src={"/info2.jpg"}
            alt=""
            width={2347}
            height={2044}
            unoptimized
          />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="z-10 flex flex-col gap-4" data-aos="fade-up">
            <h2 className="text-3xl font-medium text-white">
              Plug. Charge. Drive.
            </h2>
            <a
              href="/bedrijf"
              className="flex w-fit justify-center bg-gray-100 px-3.5 py-2 text-lg shadow-sm hover:bg-primary-light hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Ontdek onze producten
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between rounded-lg bg-muted-foreground p-8 md:col-span-1">
          <h2 className="text-xl font-medium text-white" data-aos="fade-up">
            Home Charging
          </h2>
          <div className="flex flex-col gap-2 text-white" data-aos="fade-up">
            <h2 className="text-3xl font-medium ">
              Bring intelligence to your charging game
            </h2>
            <p>
              Optimize your energy usage and save on costs thanks to smart
              charging features that give you full control and transparency.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SolutionHome;
