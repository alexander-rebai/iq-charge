"use client";

import { useOfferte } from "~/context/offerte-context";

const steps = [
  { id: "1", name: "Over u" },
  {
    id: "2",
    name: "Configureer een product",
  },
  { id: "3", name: "Bevestig uw gegevens" },
];

export default function Steps() {
  const { currentStep, setCustomStep } = useOfferte();

  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step, idx) => (
          <li key={step.name} className="md:flex-1">
            {idx + 1 < currentStep ? (
              <div
                onClick={() => setCustomStep(idx + 1)}
                className="hover:primary-foreground group flex cursor-pointer flex-col border-l-4 border-primary py-2 pl-4 md:border-b-4 md:border-l-0 md:pb-4 md:pl-0 md:pt-0"
              >
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : idx + 1 === currentStep ? (
              <div
                onClick={() => setCustomStep(idx + 1)}
                className="flex cursor-pointer flex-col border-l-4 border-primary py-2 pl-4 md:border-b-4 md:border-l-0 md:pb-4 md:pl-0 md:pt-0"
                aria-current="step"
              >
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : (
              <div className="group flex cursor-pointer flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-b-4 md:border-l-0 md:pb-4 md:pl-0 md:pt-0">
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
