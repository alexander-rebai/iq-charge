"use client";

import { Cable, PlugZap, PlugZap2 } from "lucide-react";
import { useState } from "react";
import { useOfferte } from "~/context/offerte-context";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";

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
    name: "DC snellader ( > 30 kW )",
    icon: PlugZap,
  },
];

type Tier = (typeof tiers)[0];

export default function ConfigureProductCompany() {
  const [selectedTier, setSelectedTier] = useState<Tier>(tiers[0]!);
  const [amount, setAmount] = useState(1);

  const { handleNext, handleSubmitStep } = useOfferte();

  const submit = () => {
    if (!selectedTier) return;

    handleSubmitStep(
      {
        name: selectedTier.name,
        amount,
      },
      "productCompany",
    );
    handleNext();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-extrabold text-primary">
            Configureer uw product
          </h1>
        </div>
      </CardContent>
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-4 md:flex-row">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "cursor-pointer select-none hover:bg-muted md:w-1/3",
                selectedTier === tier && "border-2 border-primary text-primary",
              )}
              onClick={() => setSelectedTier(tier)}
            >
              <CardContent className="flex items-center gap-x-6 p-6 text-lg">
                <tier.icon size={24} />
                <span>{tier.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex select-none flex-col items-center gap-2">
          <Label>Aantal</Label>
          <div className="flex items-center gap-4 text-4xl ">
            <Button
              variant={"outline"}
              onClick={() => setAmount((prev) => Math.max(1, prev - 1))}
            >
              -
            </Button>
            <span className="flex w-24 justify-center">{amount}</span>
            <Button
              variant={"outline"}
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Button
          variant={"outline"}
          className="text-lg font-bold"
          onClick={submit}
        >
          Volgende
        </Button>
      </div>
    </div>
  );
}
