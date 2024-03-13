"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useOfferte } from "~/context/offerte-context";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

const tiers = [
  {
    name: "Alfen",
    price: "$1500",
    img: "/alfen/s1.png",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    models: ["Eve Pro Single-Line", "Eve Pro Double-line"],
  },
  {
    name: "Huawei",
    price: "$1500",
    img: "/huawei/h1.png",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    models: ["Smart Charger 7KS-S0", "Smart Charger 22KT-S0"],
  },
  {
    name: "Wallbox",
    price: "$1500",
    img: "/wallbox/w1.webp",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
];

type Tier = (typeof tiers)[0];

export default function ConfigureProduct() {
  const [selectedTier, setSelectedTier] = useState<Tier>();
  const [hasSmartMeter, setHasSmartMeter] = useState(true);
  const [includeCable, setIncludeCable] = useState(false);
  const [includeStand, setIncludeStand] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>();

  const { handleNext, handleSubmitStep } = useOfferte();

  const submit = () => {
    if (!selectedTier) return;

    handleSubmitStep(
      {
        name: selectedTier.name,
        hasSmartMeter,
        includeCable,
        includeStand,
        selectedModel,
      },
      "productParticulier",
    );
    handleNext();
  };

  return (
    <div className="flex items-center justify-center gap-4 p-6">
      {!selectedTier && (
        <div className="flex flex-col">
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-primary text-center text-4xl font-extrabold">
                Onze producten
              </h1>
            </div>
          </CardContent>
          <div className="isolate mx-auto mt-4 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className="rounded-3xl p-8 xl:p-10">
                <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-44">
                  <Image
                    src={tier.img}
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                    alt={tier.name}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="text-primary focus-visible:outline-primary mt-6 block rounded-md px-3 py-2 text-center text-3xl font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  {tier.name}
                </div>
                <ul
                  role="list"
                  className="mt-2 space-y-3 leading-6 text-slate-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="text-primary h-6 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="focus-visible:outline-primary mt-6 flex flex-col rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  <span className="text-2xl font-bold tracking-tight text-slate-900">
                    {tier.price}
                  </span>
                  <Button
                    onClick={() => setSelectedTier(tier)}
                    variant={"outline"}
                    className="mt-2"
                  >
                    Configureer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedTier && (
        <div className="relative flex w-full flex-col md:w-4/5">
          <div
            onClick={() => setSelectedTier(undefined)}
            className="focus:shadow-outline-blue bg-primary absolute -left-5 -top-14 inline-block cursor-pointer rounded-full px-2 py-2 text-white hover:opacity-90 focus:outline-none md:left-0 md:top-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              className="lucide lucide-arrow-left text-primary-foreground"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </div>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-primary text-4xl font-extrabold">
                {selectedTier
                  ? `Configureer uw ${selectedTier.name}`
                  : "Onze producten"}
              </h1>
            </div>
          </CardContent>
          <div className="rounded-3xl lg:p-8 xl:p-10">
            <div className="flex items-center justify-center gap-6">
              <div className="border-primary h-32 w-1/2 overflow-hidden rounded-md border-2 p-4 lg:h-48">
                <Image
                  src={selectedTier.img}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  alt={selectedTier.name}
                  width={600}
                  height={600}
                />
              </div>
              <div className="border-primary flex h-32 w-1/2 flex-col items-center justify-center overflow-hidden rounded-md border-2 p-4 lg:h-48">
                <h2 className="text text-primary font-extrabold">Uw prijs:</h2>
                <p className="text-2xl font-bold tracking-tight text-slate-900">
                  {selectedTier.price}
                </p>
              </div>
            </div>
            <hr className="border-primary my-6 border-t" />
            <div className="mt-6 flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="bg-primary flex h-8 w-8 items-center justify-center gap-x-3 rounded-full text-lg font-semibold text-white">
                  1
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary text-lg font-semibold">
                    Inbegrepen
                  </span>
                  <ul className="list-disc text-slate-600">
                    <li>Standaardinstallatie</li>
                    <li>Solar</li>
                    <li>Keuring</li>
                    <li>Service Pro Pack</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <div className="bg-primary flex h-8 w-8 items-center justify-center gap-x-3 rounded-full text-lg font-semibold text-white">
                    2
                  </div>
                  <span className="text-primary text-lg font-semibold">
                    Uitrusting
                  </span>
                </div>
                <span className="list-disc text-slate-600">
                  Heeft u een slimme meter?
                </span>
                <div className="mt-4 flex gap-8">
                  <Card
                    className={cn(
                      "hover:border-primary-foreground hover:border-2 hover:opacity-90",
                      hasSmartMeter &&
                        "border-primary-foreground bg-primary/50 text-primary-foreground border-2",
                    )}
                  >
                    <CardContent
                      className=" px-10 py-2 hover:cursor-pointer"
                      onClick={() => setHasSmartMeter(true)}
                    >
                      <div className="flex flex-col items-center">
                        <h1 className="text-primary text-xl font-semibold">
                          Ja
                        </h1>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className={cn(
                      "hover:border-primary-foreground hover:border-2",
                      !hasSmartMeter &&
                        "border-primary-foreground bg-primary/50 text-primary-foreground border-2 hover:opacity-90",
                    )}
                  >
                    <CardContent
                      className="px-10 py-2 hover:cursor-pointer"
                      onClick={() => setHasSmartMeter(false)}
                    >
                      <div className="flex flex-col items-center">
                        <h1 className="text-primary text-xl font-semibold">
                          Nee
                        </h1>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {selectedTier.models && (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center gap-x-3 rounded-full text-lg font-semibold text-white">
                      3
                    </div>
                    <span className="text-primary text-lg font-semibold">
                      Model
                    </span>
                  </div>

                  <div className="mt-4 flex flex-col gap-4 md:flex-row md:gap-8">
                    <Card
                      className={cn(
                        "hover:border-primary-foreground hover:border-2 hover:opacity-90",
                        selectedModel === selectedTier.models[0] &&
                          "border-primary-foreground bg-primary/50 text-primary-foreground border-2",
                      )}
                    >
                      <CardContent
                        className=" px-10 py-2 hover:cursor-pointer "
                        onClick={() => setSelectedModel(selectedTier.models[0])}
                      >
                        <div className="flex flex-col items-center">
                          <h1 className="text-primary text-xl font-semibold">
                            {selectedTier.models[0]}
                          </h1>
                        </div>
                      </CardContent>
                    </Card>
                    <Card
                      className={cn(
                        "hover:border-primary-foreground hover:border-2 hover:opacity-90",
                        selectedModel === selectedTier.models[1] &&
                          "border-primary-foreground bg-primary/50 text-primary-foreground border-2",
                      )}
                    >
                      <CardContent
                        className="px-10 py-2 hover:cursor-pointer"
                        onClick={() => setSelectedModel(selectedTier.models[1])}
                      >
                        <div className="flex flex-col items-center">
                          <h1 className="text-primary text-xl font-semibold">
                            {selectedTier.models[1]}
                          </h1>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              <div className="flex gap-4">
                <div className="bg-primary flex h-8 w-8 items-center justify-center gap-x-3 rounded-full text-lg font-semibold text-white">
                  {selectedTier.models ? 4 : 3}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary text-lg font-semibold">
                    Opties
                  </span>
                  <div className="flex items-center space-x-2 text-lg text-slate-600">
                    <Switch
                      id="vaste-kabel"
                      checked={includeCable}
                      onCheckedChange={setIncludeCable}
                    />
                    <Label htmlFor="vaste-kabel">Vaste kabel</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Switch
                      id="paal"
                      checked={includeStand}
                      onCheckedChange={setIncludeStand}
                    />
                    <Label htmlFor="paal">Op een paal</Label>
                  </div>
                </div>
              </div>
              <Button
                variant={"outline"}
                onClick={submit}
                className="w-1/2 self-center"
              >
                Bevestigen
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
