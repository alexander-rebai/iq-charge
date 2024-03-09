"use client";

import { CheckIcon } from "lucide-react";
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
    <nav aria-label="Progress" className="select-none">
      <ol
        role="list"
        className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
      >
        {steps.map((step, idx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {idx + 1 < currentStep ? (
              <div
                onClick={() => setCustomStep(idx + 1)}
                className="group flex w-full cursor-pointer items-center"
              >
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary group-hover:scale-110">
                    <CheckIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="ml-4 text-sm font-medium text-primary">
                    {step.name}
                  </span>
                </span>
              </div>
            ) : idx + 1 === currentStep ? (
              <div
                onClick={() => setCustomStep(idx + 1)}
                className="group flex items-center px-6 py-4 text-sm font-medium"
                aria-current="step"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary group-hover:scale-110">
                  <span className="text-primary">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-primary">
                  {step.name}
                </span>
              </div>
            ) : (
              <div className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:scale-110">
                    <span className="text-gray-500 group-hover:text-gray-900">
                      {step.id}
                    </span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                    {step.name}
                  </span>
                </span>
              </div>
            )}

            {idx !== steps.length ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="absolute right-0 top-0 hidden h-full w-5 md:block"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
