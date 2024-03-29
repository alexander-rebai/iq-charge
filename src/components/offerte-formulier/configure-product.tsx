"use client";

import Image from "next/image";
import { useState } from "react";
import Information from "~/components/information";
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
    info: "De Alfen Eve Pro is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik. Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
    models: ["Eve Pro Single-Line", "Eve Pro Double-line"],
  },
  {
    name: "Huawei",
    price: "$1500",
    img: "/huawei/h1.png",
    info: "De Huawei Smart Charger 7KS-S0 is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik. Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
    models: ["Smart Charger 7KS-S0", "Smart Charger 22KT-S0"],
  },
  {
    name: "Wallbox",
    price: "$1500",
    img: "/wallbox/w1.webp",
    info: "De Wallbox Pulsar Plus is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik. Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
  },
  {
    name: "Smappee",
    price: "$1500",
    img: "/smappee/s2.png",
    info: "De Smappee EV Base is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik. Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
    models: ["Smart Charger 7KS-S0", "Smart Charger 22KT-S0", "test"],
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

  const selectTier = (tier: Tier) => {
    setSelectedTier(tier);
    window.scrollTo(0, 0);
  };

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
              <h1 className="text-center text-4xl font-medium">
                Onze producten
              </h1>
            </div>
          </CardContent>
          {/* <div className="isolate mx-auto mt-4 grid max-w-md grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {tiers.map((tier) => (
              <div key={tier.name} className="rounded-xl p-8 xl:p-10">
                <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-xl group-hover:opacity-75 lg:h-44">
                  <Image
                    src={tier.img}
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                    alt={tier.name}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="mt-6 block rounded-xl px-3 py-2 text-center text-xl font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {tier.name}
                </div>
                <ul
                  role="list"
                  className="mt-2 space-y-3 leading-6 text-slate-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-primary-foreground"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col rounded-xl px-3 py-2 text-center text-sm font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <span className="text-2xl font-medium tracking-tight">
                    {tier.price}
                  </span>
                  <Button
                    onClick={() => {
                      setSelectedTier(tier);
                      window.scrollTo(0, 0);
                    }}
                    variant={"outline"}
                    className="mt-2"
                  >
                    Configureer
                  </Button>
                </div>
              </div>
            ))}
          </div> */}
          <div>
            {tiers.map((product, i) => (
              <Information
                key={i}
                information={{
                  title: product.name,
                  info: product.info,
                  image: product.img,
                }}
                isProduct
                reverse={i % 2 ? true : false}
                isOfferte
                onSelect={() => selectTier(product)}
              />
            ))}
          </div>
        </div>
      )}
      {selectedTier && (
        <div className="relative flex w-full flex-col md:w-4/5">
          <div
            onClick={() => setSelectedTier(undefined)}
            className="focus:shadow-outline-blue absolute -left-5 -top-14 inline-block cursor-pointer rounded-full bg-primary px-2 py-2 text-white hover:opacity-90 focus:outline-none md:left-0 md:top-0"
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
              <h1 className="text-4xl font-medium">
                {selectedTier
                  ? `Configureer uw ${selectedTier.name}`
                  : "Onze producten"}
              </h1>
            </div>
          </CardContent>
          <div className="rounded-xl lg:p-8 xl:p-10">
            <div className="flex items-center justify-center gap-6">
              <div className="h-32 w-1/2 overflow-hidden rounded-xl border-2 border-primary p-4 lg:h-48">
                <Image
                  src={selectedTier.img}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  alt={selectedTier.name}
                  width={600}
                  height={600}
                />
              </div>
              <div className="flex h-32 w-1/2 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-primary p-4 lg:h-48">
                <h2 className="text font-medium text-primary">Min. prijs:</h2>
                <p className="text-2xl font-medium tracking-tight">
                  {selectedTier.price}
                </p>
              </div>
            </div>
            <hr className="my-6 border-t border-primary" />
            <div className="mt-6 flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center gap-x-3 rounded-full bg-primary text-lg font-medium text-white">
                  1
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-medium">Inbegrepen</span>
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
                  <div className="flex h-8 w-8 items-center justify-center gap-x-3 rounded-full bg-primary text-lg font-medium text-white">
                    2
                  </div>
                  <span className="text-lg font-medium">Uitrusting</span>
                </div>
                <span className="list-disc text-slate-600">
                  Heeft u een slimme meter?
                </span>
                <div className="mt-4 flex gap-8">
                  <Card
                    className={cn(
                      "hover:border-2 hover:border-primary-foreground hover:opacity-90",
                      hasSmartMeter &&
                        " bg-primary-light text-primary-foreground",
                    )}
                  >
                    <CardContent
                      className=" px-10 py-2 hover:cursor-pointer"
                      onClick={() => setHasSmartMeter(true)}
                    >
                      <div className="flex flex-col items-center">
                        <h1 className="text-xl font-medium text-primary-foreground">
                          Ja
                        </h1>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className={cn(
                      "hover:border-2 hover:border-primary-foreground",
                      !hasSmartMeter &&
                        " bg-primary-light text-primary-foreground hover:opacity-90",
                    )}
                  >
                    <CardContent
                      className="px-10 py-2 hover:cursor-pointer"
                      onClick={() => setHasSmartMeter(false)}
                    >
                      <div className="flex flex-col items-center">
                        <h1 className="text-xl font-medium text-primary-foreground">
                          Nee
                        </h1>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {selectedTier.models && (
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center gap-x-3 rounded-full bg-primary text-lg font-medium text-white">
                      3
                    </div>
                    <span className="text-lg font-medium">Model</span>
                  </div>

                  <div className="mt-4 flex flex-col gap-4 md:flex-row md:gap-8">
                    {selectedTier.models.map((model) => (
                      <Card
                        key={model}
                        className={cn(
                          "hover:border-2 hover:border-primary-foreground hover:opacity-90",
                          selectedModel === model &&
                            " bg-primary-light text-primary-foreground",
                        )}
                      >
                        <CardContent
                          className=" px-10 py-2 hover:cursor-pointer "
                          onClick={() => setSelectedModel(model)}
                        >
                          <div className="flex flex-col items-center">
                            <h1 className="text-xl font-medium text-primary-foreground">
                              {model}
                            </h1>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center gap-x-3 rounded-full bg-primary text-lg font-medium text-white">
                  {selectedTier.models ? 4 : 3}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-medium">Opties</span>
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
