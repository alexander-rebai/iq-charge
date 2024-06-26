import { Column, Heading, Row, Section, Text } from "@react-email/components";
import * as React from "react";

type ProductParticulier = {
  name: string;
  hasSmartMeter: boolean;
  includeCable: boolean;
  includeStand: boolean;
  selectedModel?: string;
};

type ProductCompany = {
  name: string;
  amount: string;
  location: string;
};

type Profile = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  street: string;
  number: string;
  bus?: string;
  postalCode: string;
  city: string;
  country: string;
  companyName?: string;
  vatNumber?: string;
};

type EmailTemplateProps = {
  productParticulier?: ProductParticulier;
  productCompany?: ProductCompany;
  profile: Profile;
};

export const OfferteMailKlant: React.FC<Readonly<EmailTemplateProps>> = ({
  productParticulier,
  productCompany,
  profile,
}) => {
  return (
    <div>
      <Heading>Bedankt voor uw offerte aanvraag bij IQ-Charge.</Heading>
      <Text>
        Wij hebben uw offerte aanvraag in goede orde ontvangen. Wij zullen zo
        spoedig mogelijk contact met u opnemen.
      </Text>
      <Text>
        Hieronder vindt u een overzicht van de door u aangevraagde offerte.
      </Text>
      {productCompany && (
        <Section>
          <Row width={"100%"}>
            <Column width={"25%"}>
              <Text>
                <b>Product:</b> {productCompany.name}
              </Text>
            </Column>
            <Column width={"25%"}>
              <Text>
                <b>Amount:</b> {productCompany.amount}
              </Text>
            </Column>
          </Row>
        </Section>
      )}
      {productParticulier && (
        <Section>
          <Text>
            <b>Product:</b> {productParticulier.name}
          </Text>
          <Text>
            <b>Heeft smart meter?:</b>{" "}
            {productParticulier.hasSmartMeter ? "Ja" : "Nee"}
          </Text>
          <Text>
            <b>Kabel inbegrepen?:</b>{" "}
            {productParticulier.includeCable ? "Ja" : "Nee"}
          </Text>
          <Text>
            <b>Standpaal inbegrepen?:</b>{" "}
            {productParticulier.includeStand ? "Ja" : "Nee"}
          </Text>
          <Text>
            <b>Model:</b> {productParticulier.selectedModel}
          </Text>
        </Section>
      )}
      <Section>
        <Text>
          <b>Voornaam:</b> {profile.firstname}
        </Text>
        <Text>
          <b>Achternaam:</b> {profile.lastname}
        </Text>
        <Text>
          <b>Email:</b> {profile.email}
        </Text>
        <Text>
          <b>Telefoonnummer:</b> {profile.phone}
        </Text>
        <Text>
          <b>Adres:</b> {profile.street}
        </Text>
        <Text>
          <b>Adres:</b> {profile.number}
        </Text>
        <Text>
          <b>Postcode:</b> {profile.postalCode}
        </Text>
        <Text>
          <b>Woonplaats:</b> {profile.city}
        </Text>
        <Text>
          <b>Land:</b> {profile.country}
        </Text>
        {productCompany && (
          <>
            <Text>
              <b>Bedrijfsnaam:</b> {profile.companyName}
            </Text>
            <Text>
              <b>BTW nummer:</b> {profile.vatNumber}
            </Text>{" "}
          </>
        )}
      </Section>
    </div>
  );
};
