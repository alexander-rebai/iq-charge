"use client";

import { Label } from "@radix-ui/react-label";
import { Cable, PlugZap, PlugZap2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useOfferte } from "~/context/offerte-context";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const tiers = [
  {
    name: "Enkel laadstation",
    icon: PlugZap2,
  },
  {
    name: "Dubbel laadstation",
    icon: Cable,
  },
  {
    name: "DC snellader",
    icon: PlugZap,
  },
];

type Tier = (typeof tiers)[0];

export default function ConfigureProductCompany() {
  const [selectedTier, setSelectedTier] = useState<Tier>(tiers[0]!);
  const [amount, setAmount] = useState("1-5");
  const [location, setLocation] = useState("Werkplaats");

  const { handleNext, handleSubmitStep } = useOfferte();

  const submit = () => {
    if (!selectedTier) return;

    handleSubmitStep(
      {
        name: selectedTier.name,
        amount,
        location,
      },
      "productCompany",
    );
    handleNext();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-medium">Configureer uw product</h1>
        </div>
      </CardContent>
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-4 md:flex-row">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "h-60 cursor-pointer select-none bg-muted md:h-96 md:w-1/3",
                selectedTier === tier &&
                  "border-2 border-black bg-muted-foreground text-white",
              )}
              onClick={() => setSelectedTier(tier)}
            >
              <CardContent className="h-full rounded-xl p-4">
                <div className="flex h-full flex-col justify-between">
                  <Image
                    src={`/cover.jpeg`}
                    width={400}
                    height={200}
                    className="rounded-xl"
                    alt=""
                  />
                  <div className="flex items-center gap-x-6 text-lg md:text-2xl">
                    <tier.icon size={24} />
                    <span>{tier.name}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex select-none items-center justify-center gap-12">
          <Label className="text-lg font-medium">Aantal</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecteer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5" onClick={() => setAmount("1-5")}>
                1-5
              </SelectItem>
              <SelectItem value="5-20" onClick={() => setAmount("5-20")}>
                5-20
              </SelectItem>
              <SelectItem value="20+" onClick={() => setAmount("20+")}>
                20+
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex select-none items-center justify-center gap-12">
          <Label className="text-lg font-medium">Locatie</Label>
          <Select>
            <SelectTrigger className="w-[180px] min-w-fit">
              <SelectValue placeholder="Selecteer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="Werkplaats"
                onClick={() => setLocation("Werkplaats")}
              >
                Werkplaats
              </SelectItem>
              <SelectItem
                value="Kantoor"
                onClick={() => setLocation("Kantoor")}
              >
                Kantoor
              </SelectItem>
              <SelectItem
                value="Commerciële parking"
                onClick={() => setLocation("Commerciële parking")}
              >
                Commerciële parking
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Button className="text-lg font-medium" onClick={submit}>
          Volgende
        </Button>
      </div>
    </div>
  );
}
