"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useOfferte } from "~/context/offerte-context";
import { CardContent } from "../ui/card";

const UserType = () => {
  const { handleNext, handleSubmitStep } = useOfferte();

  const onSelectUserType = (userType: "particulier" | "bedrijf") => {
    handleSubmitStep(userType, "userType");
    handleNext();
  };

  const searchParams = useSearchParams();
  const userType = searchParams.get("userType");

  if (userType) {
    onSelectUserType(userType as "particulier" | "bedrijf");
  } else
    return (
      <div className="flex items-center justify-center gap-8 p-12">
        <div className="flex flex-col">
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl font-medium">Over u</h1>
            </div>
          </CardContent>
          <div className="flex h-96 flex-col gap-x-12 gap-y-6 md:flex-row">
            <div
              className="group relative flex w-1/2 cursor-pointer  flex-col items-start justify-end overflow-hidden rounded-xl bg-primary-light p-8"
              onClick={() => onSelectUserType("bedrijf")}
            >
              <Image
                className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 object-cover group-hover:scale-95"
                src={"/info1.jpg"}
                alt=""
                width={2347}
                height={2044}
                unoptimized
              />
              <div className="absolute inset-0 bg-black opacity-40" />
              <div className="z-10 flex flex-col gap-4">
                <h2 className="text-3xl font-medium text-white">
                  Business Charging
                </h2>
                <div className="flex w-fit justify-center rounded-full bg-muted px-3.5 py-2 text-sm font-medium shadow-sm">
                  Ik ben een bedrijf
                </div>
              </div>
            </div>
            <div
              className="group relative flex w-1/2 cursor-pointer flex-col items-start justify-end overflow-hidden rounded-xl bg-primary-light p-8"
              onClick={() => onSelectUserType("particulier")}
            >
              <Image
                className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 object-cover group-hover:scale-95"
                src={"/info2.jpg"}
                alt=""
                width={2347}
                height={2044}
                unoptimized
              />
              <div className="absolute inset-0 bg-black opacity-40" />
              <div className="z-10 flex flex-col gap-4">
                <h2 className="text-3xl font-medium text-white">
                  Home Charging
                </h2>
                <div className="flex w-fit justify-center rounded-full bg-muted px-3.5 py-2 text-sm font-medium shadow-sm">
                  Ik ben een particulier
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserType;
