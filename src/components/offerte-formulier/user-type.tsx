"use client";

import { useOfferte } from "~/context/offerte-context";
import { Card, CardContent } from "../ui/card";

const UserType = () => {
  const { handleNext, handleSubmitStep } = useOfferte();

  const onSelectUserType = async (userType: "particulier" | "bedrijf") => {
    await handleSubmitStep(userType, "userType");
    handleNext();
  };

  return (
    <div className="flex items-center justify-center gap-8 p-12">
      <div className="flex flex-col">
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-extrabold text-primary">Over u</h1>
          </div>
        </CardContent>
        <div className="flex flex-col gap-x-12 gap-y-6 md:flex-row">
          <Card
            className="cursor-pointer hover:bg-muted"
            onClick={() => onSelectUserType("bedrijf")}
          >
            <CardContent className="flex h-16 w-40 items-center justify-center p-4">
              Bedrijf
            </CardContent>
          </Card>
          <Card
            className="cursor-pointer hover:bg-muted"
            onClick={() => onSelectUserType("particulier")}
          >
            <CardContent className="flex h-16 w-40 items-center justify-center p-4">
              Particulier
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserType;
