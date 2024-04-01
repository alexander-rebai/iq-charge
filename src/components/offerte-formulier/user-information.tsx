"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useOfferte } from "~/context/offerte-context";
import { Button } from "../ui/button";
import { CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  firstname: z.string().min(2, { message: "Voornaam is verplicht" }),
  lastname: z.string().min(2, { message: "Achternaam is verplicht" }),
  email: z.string().email({ message: "Ongeldige email" }),
  phone: z.string().min(2, { message: "Telefoon is verplicht" }),
  street: z.string().min(2, { message: "Straat is verplicht" }),
  number: z.string().min(1, { message: "Nummer is verplicht" }),
  bus: z.string().optional(),
  postalCode: z.string().min(2, { message: "Postcode is verplicht" }),
  city: z.string().min(2, { message: "Stad is verplicht" }),
  country: z.string().min(2, { message: "Land is verplicht" }),
  companyName: z.string().optional(),
  vatNumber: z.string().optional(),
});

type ContactFormType = z.infer<typeof formSchema>;

export default function UserInformation() {
  const [loading, setLoading] = useState(false);

  const { formData, handleSubmitStep } = useOfferte();

  const form = useForm<ContactFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
      companyName: "",
      vatNumber: "",
    },
  });

  const resetForm = () => {
    form.setValue("firstname", "");
    form.setValue("lastname", "");
    form.setValue("email", "");
    form.setValue("phone", "");
    form.setValue("street", "");
    form.setValue("number", "");
    form.setValue("bus", "");
    form.setValue("postalCode", "");
    form.setValue("city", "");
    form.setValue("country", "");
    form.setValue("companyName", "");
    form.setValue("vatNumber", "");
  };

  const onSubmit = async (values: ContactFormType) => {
    setLoading(true);
    handleSubmitStep(values, "profile");
    resetForm();
    toast.success("Bedankt! Bevestigings e-mail is verstuurd.", {
      duration: 5000,
    });
    setLoading(false);
  };
  return (
    <div className="flex w-full items-center justify-center gap-8 lg:p-12">
      <div className="flex w-full flex-col">
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-medium">Bevestig uw gegevens</h1>
          </div>
        </CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center justify-center lg:px-12"
          >
            <div className="w-full">
              <div className="flex flex-col gap-x-8 gap-y-6 md:grid md:grid-cols-2 md:p-8 xl:p-0">
                {formData.userType === "bedrijf" && (
                  <>
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bedrijfsnaam*</FormLabel>
                          <FormControl>
                            <Input placeholder="IQ-Charge" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="vatNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>BTW nummer*</FormLabel>
                          <FormControl>
                            <Input placeholder="BE0756127931" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Voornaam*</FormLabel>
                      <FormControl>
                        <Input placeholder="Voornaam" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Achternaam*</FormLabel>
                      <FormControl>
                        <Input placeholder="Achternaam" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail*</FormLabel>
                      <FormControl>
                        <Input placeholder="hello@contact.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefoon*</FormLabel>
                      <FormControl>
                        <Input placeholder="+32 485 96 72 92" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <hr className="col-span-2" />
                <div className="col-span-2 grid grid-cols-7 gap-x-6 gap-y-6">
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem className="col-span-7 md:col-span-4">
                        <FormLabel>Straat*</FormLabel>
                        <FormControl>
                          <Input placeholder="Straat" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem className="col-span-3 md:col-span-2">
                        <FormLabel>Nummer*</FormLabel>
                        <FormControl>
                          <Input placeholder="Nummer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bus"
                    render={({ field }) => (
                      <FormItem className="col-span-3 md:col-span-1">
                        <FormLabel>Bus</FormLabel>
                        <FormControl>
                          <Input placeholder="Bus" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="col-span-7 md:col-span-3">
                        <FormLabel>Stad*</FormLabel>
                        <FormControl>
                          <Input placeholder="Stad" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem className="col-span-3 md:col-span-2">
                        <FormLabel>Postcode*</FormLabel>
                        <FormControl>
                          <Input placeholder="Postcode" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="col-span-3 md:col-span-2">
                        <FormLabel>Land*</FormLabel>
                        <FormControl>
                          <Input placeholder="Land" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button type="submit" disabled={loading} className="w-1/3">
                  Bevestigen
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
