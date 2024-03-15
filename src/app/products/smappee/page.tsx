import { CheckCircle, CheckCircleIcon, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import ImageCarousel from "~/components/image-carousel";
import Specs from "~/components/specs-table";

const specifications = [
  {
    category: "Model",
    value: <span className="font-semibold">Smappee EV Base</span>,
    value2: <span className="font-semibold">Smappee EV Ultra</span>,
    value3: <span className="font-semibold">Smappee EV One</span>,
    value4: <span className="font-semibold">Smappee EV Wall</span>,
  },
  {
    category: "Max. vermogen",
    value: "2 x 22kw",
    value2: "2 x 240 kW",
    value3: "22 kW",
    value4: "2 x 240 kW",
  },
  {
    category: "Gebruikersinterface",
    value: "App",
    value2: "2 dynamische displays",
    value3: "App",
    value4: "App",
  },
  {
    category: "Montage",
    value: "Muur",
    value2: "Muur",
    value3: "Muur",
    value4: "Muur",
  },
  {
    category: "Type stekker",
    value: "2 x Type 2",
    value2: "2 x Type 2",
    value3: "Type 2",
    value4: "2 x Type 2",
  },
  {
    category: "Afmetingen (mm) HxLxD",
    value: "1200 × 600 × 150 mm ",
    value2: "1870 x 920 x 650 mm",
    value3: "1100 × 120 × 120 mm",
    value4: "300 × 300 × 110  mm",
  },
  {
    category: "RFID - Laadbeveiliging",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
    value3: <CheckCircle className="mx-auto text-green-600" />,
    value4: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Lekstroomdetector (6mA DC Detector)",
    value: <CheckCircle className="mx-auto text-green-600" />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
    value3: <CheckCircle className="mx-auto text-green-600" />,
    value4: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Geconnecteerde services",
    value: <CheckCircle className="mx-auto text-green-600 " />,
    value2: <CheckCircle className="mx-auto text-green-600" />,
    value3: <CheckCircle className="mx-auto text-green-600" />,
    value4: <CheckCircle className="mx-auto text-green-600" />,
  },
  {
    category: "Vaste laadkabel",
    value: "2 kabels",
    value2: "2 kabels",
    value3: "1 kabel",
    value4: "2 kabels",
  },
];

const features = [
  "Standaard wandmontage (Montagepaal optioneel)",
  "MID certified energiemeter",
  "Load Balancing en/of Smart Charging Network",
];

export default function ProductPage() {
  return (
    <main>
      <Header />
      <div className="mt-28 py-12 lg:py-16">
        <div className="px-4 md:px-6">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 xl:gap-20">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter">Alfen</h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Charge your electric vehicle with speed and convenience. Our
                  electric car charger is designed to provide fast and reliable
                  charging for all compatible electric and hybrid vehicles.
                </p>
              </div>
              <Link
                href="/offerte"
                className="w-fit rounded-3xl border-2 border-primary-foreground bg-primary/50 px-3.5 py-2 text-xl font-medium text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Vraag uw offerte aan
              </Link>
            </div>
            <div className="flex items-center justify-center p-10 lg:p-0">
              <ImageCarousel
                images={[
                  "/smappee/s2.png",
                  "/smappee/s1.png",
                  "/smappee/s3.png",
                  "/smappee/s4.png",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
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
          <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_600px] lg:gap-12 lg:px-8 xl:gap-20">
            <div className="mx-auto max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Fast Charging. Effortless Power.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
                Our electric car charger offers rapid charging, allowing you to
                power up your vehicle quickly and get back on the road. With
                support for various car models and advanced energy management,
                it delivers efficient and reliable charging performance.
              </p>
            </div>
            <div className="flex w-full flex-col gap-4 self-center rounded-lg border border-primary bg-muted p-4 shadow-sm">
              {features.map((f, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                  <CheckCircleIcon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{f}</h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <div className="py-12 lg:py-16">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-12">
            <h2 className="text-center text-4xl font-bold text-primary">
              Specificaties
            </h2>
            <Specs
              specs={specifications}
              image1="/smappee/s1.png"
              image2="/smappee/s2.png"
              image3="/smappee/s3.png"
              image4="/smappee/s4.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}