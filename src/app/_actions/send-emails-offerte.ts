"use server";

import { Resend } from "resend";
import { OfferteMailAdmin } from "~/components/templates/offerte-mail-admin";
import { OfferteMailKlant } from "~/components/templates/offerte-mail-klant";

const resend = new Resend(process.env.RESEND_API_KEY);

export type UserType = "particulier" | "bedrijf";

export type ProductParticulier = {
  name: string;
  hasSmartMeter: boolean;
  includeCable: boolean;
  includeStand: boolean;
  selectedModel?: string;
};

export type ProductCompany = {
  name: string;
  amount: string;
  location: string;
};

export type Profile = {
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

export async function sendEmailsOfferte({
  userType,
  productParticulier,
  productCompany,
  profile,
}: {
  userType: UserType;
  productParticulier?: ProductParticulier;
  productCompany?: ProductCompany;
  profile: Profile;
}) {
  try {
    await resend.emails.send({
      from: "admin@socialize-ugc.com",
      to: "rebaialexander@hotmail.com",
      subject: `NEW LEAD: offerte aanvraag van ${profile.firstname} ${profile.lastname}`,
      text: `NEW LEAD: offerte aanvraag van ${profile.firstname} ${profile.lastname}`,
      react: OfferteMailAdmin({
        userType,
        productParticulier,
        productCompany,
        profile,
      }),
    });

    await resend.emails.send({
      from: "admin@socialize-ugc.com",
      to: profile.email,
      subject: `Offerte aanvraag bij IQ-Charge`,
      text: "Bedankt voor uw offerte aanvraag bij IQ Charge. Wij nemen zo snel mogelijk contact met u op.",
      react: OfferteMailKlant({
        productParticulier,
        productCompany,
        profile,
      }),
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
