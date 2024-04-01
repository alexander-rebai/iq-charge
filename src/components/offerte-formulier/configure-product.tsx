"use client";

import Image from "next/image";
import { useState } from "react";
import Information from "~/components/information";
import { useOfferte } from "~/context/offerte-context";
import { Button } from "../ui/button";
import { CardContent } from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
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
    models: ["EV Base", "EV Ultra", "EV One", "EV Wall"],
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
    <div className="flex items-center justify-center gap-4">
      {!selectedTier && (
        <div className="flex flex-col">
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-center text-4xl font-medium">
                Onze producten
              </h1>
            </div>
          </CardContent>
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
        <div className="relative flex w-full flex-col p-6 md:w-4/5">
          <div
            onClick={() => setSelectedTier(undefined)}
            className="focus:shadow-outline-blue absolute -left-2 top-0 inline-block cursor-pointer rounded-full bg-muted-foreground px-2 py-2 text-white hover:opacity-90 focus:outline-none md:left-0 md:top-0"
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
              <div className="h-32 w-1/2 overflow-hidden rounded-xl border-2 border-muted-foreground p-4 lg:h-48">
                <Image
                  src={selectedTier.img}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  alt={selectedTier.name}
                  width={600}
                  height={600}
                />
              </div>
              <div className="flex h-32 w-1/2 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-muted-foreground p-4 lg:h-48">
                <h2 className="text font-medium">Min. prijs:</h2>
                <p className="text-2xl font-medium tracking-tight">
                  {selectedTier.price}
                </p>
              </div>
            </div>
            <hr className="my-6 border-t border-muted-foreground" />
            <div className="mt-16 flex flex-col gap-12">
              <div className="flex flex-col gap-12 md:flex-row md:justify-around md:gap-0">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center gap-x-3 rounded-full bg-muted-foreground text-lg font-medium text-white">
                    1
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-medium">Inbegrepen</span>
                    <ul className="list-disc text-muted-foreground">
                      <li>Standaardinstallatie</li>
                      <li>Solar</li>
                      <li>Keuring</li>
                      <li>Service Pro Pack</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 items-center justify-center gap-x-3 rounded-full bg-muted-foreground text-lg font-medium text-white">
                        2
                      </div>
                      <span className="text-lg font-medium">Uitrusting</span>
                    </div>
                    <span className="mb-2 list-disc text-muted-foreground">
                      Heeft u een slimme meter?
                    </span>
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecteer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          value="ja"
                          onClick={() => setHasSmartMeter(true)}
                        >
                          Ja
                        </SelectItem>
                        <SelectItem
                          value="nee"
                          onClick={() => setHasSmartMeter(false)}
                        >
                          Nee
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 md:flex-row md:justify-around md:gap-0">
                {selectedTier.models && (
                  <div className="flex flex-col gap-6">
                    <div>
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 items-center justify-center gap-x-3 rounded-full bg-muted-foreground text-lg font-medium text-white">
                          3
                        </div>
                        <span className="text-lg font-medium">Model</span>
                      </div>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Selecteer" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedTier.models.map((model, i) => (
                            <SelectItem
                              key={i}
                              value={model}
                              onClick={() => setSelectedModel(model)}
                            >
                              {model}
                            </SelectItem>
                          ))}
                          <SelectItem
                            value="Ik weet het niet"
                            onClick={() => setSelectedModel("Ik weet het niet")}
                          >
                            Ik weet het niet
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center gap-x-3 rounded-full bg-muted-foreground text-lg font-medium text-white">
                    {selectedTier.models ? 4 : 3}
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-medium">Opties</span>
                    <div className="flex items-center space-x-2 text-lg text-muted-foreground">
                      <Switch
                        id="vaste-kabel"
                        checked={includeCable}
                        onCheckedChange={setIncludeCable}
                      />
                      <Label htmlFor="vaste-kabel">Vaste kabel</Label>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Switch
                        id="paal"
                        checked={includeStand}
                        onCheckedChange={setIncludeStand}
                      />
                      <Label htmlFor="paal">Op een paal</Label>
                    </div>
                  </div>
                </div>
              </div>
              <Button onClick={submit} className="mt-4 w-1/2 self-center">
                Bevestigen
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
