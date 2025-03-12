import { type Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "~/styles/globals.css";

import { AOSInit } from "~/components/aos-init";
import { ChatBubbleBanner } from "~/components/ChatBubbleBanner";
import { LandbotProvider } from "~/components/landbot-provider";
import { cn } from "~/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IQ-Charge - Elektrische Laadpalen in Gent",
  description:
    "Verkoop van elektrische laadpalen, zonnepanelen en meer in Gent. Ontdek ons aanbod van Alfen, Huawei, Smappee en Wallbox producten.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          poppins.className,
          inter.className,
        )}
      >
        {children}
        <ChatBubbleBanner />
        <LandbotProvider />
        <AOSInit />
      </body>
    </html>
  );
}
