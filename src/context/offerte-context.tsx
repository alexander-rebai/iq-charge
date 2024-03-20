"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { z } from "zod";
import { sendEmailsOfferte } from "~/app/_actions/send-emails-offerte";
// import { sendEmailsOfferte } from "~/app/_actions/send-emails-offerte";

const FormValues = z.object({
  userType: z.enum(["bedrijf", "particulier"]),
  productParticulier: z
    .object({
      name: z.string(),
      hasSmartMeter: z.boolean(),
      includeCable: z.boolean(),
      includeStand: z.boolean(),
      selectedModel: z.string().optional(),
    })
    .optional(),
  productCompany: z
    .object({
      name: z.string(),
      amount: z.number(),
    })
    .optional(),
  profile: z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    phone: z.string(),
    street: z.string(),
    number: z.string(),
    bus: z.string().optional(),
    postalCode: z.string(),
    city: z.string(),
    country: z.string(),
    companyName: z.string().optional(),
    vatNumber: z.string().optional(),
  }),
});

type FormValues = z.infer<typeof FormValues>;

type OfferteContextType = {
  formData: FormValues;
  currentStep: number;
  handleNext: () => void;
  handlePrevious: () => void;
  setCustomStep: (step: number) => void;
  handleSubmitStep: (
    values: FormValues[keyof FormValues],
    stepKey: keyof FormValues,
  ) => void;
  handleFinalSubmit: (data: FormValues) => Promise<void>;
};

const OfferteContext = createContext<OfferteContextType | undefined>(undefined);

export const OfferteProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormValues>({
    userType: "bedrijf",
    profile: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      street: "",
      number: "",
      bus: "",
      postalCode: "",
      city: "",
      country: "",
    },
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const setCustomStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleSubmitStep = (
    values: FormValues[keyof FormValues],
    stepKey: keyof FormValues,
  ) => {
    if (stepKey && currentStep !== 3) {
      setFormData((prevData) => ({
        ...prevData,
        [stepKey]: values,
      }));
    } else {
      void handleFinalSubmit({
        ...formData,
        [stepKey]: values,
      });
    }
  };

  const handleFinalSubmit = async (data: FormValues) => {
    await sendEmailsOfferte(data);
    setCurrentStep(1);
  };

  const contextValue: OfferteContextType = {
    formData,
    currentStep,
    handleNext,
    handlePrevious,
    setCustomStep,
    handleSubmitStep,
    handleFinalSubmit,
  };

  return (
    <OfferteContext.Provider value={contextValue}>
      {children}
    </OfferteContext.Provider>
  );
};

export const useOfferte = (): OfferteContextType => {
  const context = useContext(OfferteContext);
  if (!context) {
    throw new Error("useOfferte must be used within a OfferteProvider");
  }
  return context;
};
