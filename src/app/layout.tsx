import { type Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
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
  title: "Laadexpert - Jouw partner in elektrische vrijheid.",
  description:
    "Bij Laadexpert geloven geloven we dat elektrische rijden veel meer is dan alleen een groene keuze - het is pure vrijheid.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-597B4FETPL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-597B4FETPL');
          `}
        </Script>
      </head>
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
