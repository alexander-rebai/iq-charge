import { Toaster } from "react-hot-toast";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { OfferteProvider } from "../../context/offerte-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OfferteProvider>
      <Toaster />
      <Header />
      {children}
      <Footer hideLinks />
    </OfferteProvider>
  );
}
