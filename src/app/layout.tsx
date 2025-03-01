import "~/styles/globals.css";

import { Poppins } from "next/font/google";

import { LandbotProvider } from "~/components/landbot-provider";
import { cn } from "~/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
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
        )}
      >
        {children}
        <LandbotProvider />
      </body>
    </html>
  );
}
