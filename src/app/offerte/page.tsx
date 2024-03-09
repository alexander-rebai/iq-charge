"use client";

import { Container } from "~/components/container";
import ConfigureProduct from "~/components/offerte-formulier/configure-product";
import ConfigureProductCompany from "~/components/offerte-formulier/configure-product-company";
import Steps from "~/components/offerte-formulier/steps";
import UserInformation from "~/components/offerte-formulier/user-information";
import UserType from "~/components/offerte-formulier/user-type";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { useOfferte } from "../../context/offerte-context";

const OffertePagina = () => {
  const { currentStep, formData } = useOfferte();

  const Step = () => {
    switch (currentStep) {
      case 1:
        return <UserType />;
      case 2:
        return formData.userType === "particulier" ? (
          <ConfigureProduct />
        ) : (
          <ConfigureProductCompany />
        );
      case 3:
        return <UserInformation />;
    }
  };

  return (
    <Container className="flex w-full flex-col justify-center  ">
      <div className="w-full flex-col gap-8 first-letter:flex ">
        <Steps />
        <Card className="mt-10">
          <CardHeader />
          <CardContent>
            <Step />
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default OffertePagina;
