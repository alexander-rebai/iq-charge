"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import "aos/dist/aos.css";
import { Building, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  firstname: z.string({ required_error: "Firstname is required" }),
  lastname: z.string({ required_error: "Lastname is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  phone: z.string({ required_error: "Phone is required" }),
  message: z.string({ required_error: "Message is required" }),
});

type ContactFormType = z.infer<typeof formSchema>;

interface ApiResponse {
  success: boolean;
  data?: {
    id: string;
    from: string;
    to: string[];
    created_at: string;
  };
  error?: string;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const resetForm = () => {
    form.setValue("firstname", "");
    form.setValue("lastname", "");
    form.setValue("email", "");
    form.setValue("phone", "");
    form.setValue("message", "");
  };

  const onSubmit = async (values: ContactFormType) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const responseData = (await response.json()) as ApiResponse;

      if (responseData.success) {
        resetForm();
      } else {
        console.error("Failed to send message:", responseData.error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative isolate" data-aos="fade-up">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3">
        <div className="relative px-6 pt-6 lg:static lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-center text-xl font-medium tracking-tight lg:text-start">
              Laat een berichtje achter
            </h2>

            <dl className="mb-5 mt-5 flex flex-col items-center space-y-4 text-base leading-7 text-gray-600 lg:mt-10 lg:items-start">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Adres</span>
                  <Building
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Beertegemstraat 45B
                  <br />
                  9750 Kruisem
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telefoon</span>
                  <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="tel:+1 (555) 234-5678"
                  >
                    +32 472 83 75 40
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">E-mail</span>
                  <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:hello@Contact.com"
                  >
                    info@laadexpert.be{" "}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center justify-center p-6 lg:col-span-2 lg:p-0"
          >
            <div className="w-full">
              <div className="flex flex-col gap-x-8 gap-y-6 md:grid md:grid-cols-2 md:p-8 xl:p-0">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Voornaam</FormLabel>
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
                      <FormLabel>Achternaam</FormLabel>
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
                      <FormLabel>E-mail</FormLabel>
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
                      <FormLabel>Telefoon</FormLabel>
                      <FormControl>
                        <Input placeholder="+32 485 96 72 92" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Bericht</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Bericht" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-8 flex justify-center">
                <Button type="submit" disabled={loading} variant={"secondary"}>
                  Verstuur bericht
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
