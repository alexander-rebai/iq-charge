import BedrijfHero from "~/components/bedrijf-hero";
import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import SpecificInfo from "~/components/specific-info";

type ProductType = {
  name: string;
  path: string;
  img: string;
  features: string[];
};

const products: ProductType[] = [
  {
    name: "Alfen",
    path: "alfen",
    img: "/products/alfen_prod.jpeg",
    features: [
      "U kunt de kosten van elke laadsessie opvolgen. Dankzij de optie split-billing kunt u de laadkosten van uw voertuig scheiden van het huishoudelijk energieverbruik en rechtstreeks factureren aan uw werkgever of uw bedrijf.",
    ],
  },
  {
    name: "Huawei",
    path: "huawei",
    img: "/products/huawei_prod.jpeg",
    features: [
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
      "Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
    ],
  },
  {
    name: "Wallbox",
    path: "wallbox",
    img: "/products/wallbox_prod.jpeg",
    features: [
      "De Wallbox Pulsar Plus is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
      "Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
      "De Wallbox Pulsar Plus is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
    ],
  },
  {
    name: "Smappee",
    path: "smappee",
    img: "/products/smappee_prod.jpeg",

    features: [
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
      "Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BedrijfHero />

        <SpecificInfo
          information={{
            title: "Opladen van elektrische auto's voor je bedrijf",
            info: "Je moet succesvol zijn in een voortdurend veranderende omgeving. Maar anticiperen op toekomstige behoeften kan een uitdaging zijn. Ons laadnetwerk past zich aan de specifieke behoeften van je bedrijf en groeit met je mee. Hiermee kan je het laden beheren via een cloudplatform waardoor je inzicht en controle krijgt.",
            image: "/images/night6.jpg",
          }}
        />

        <SpecificInfo
          isReverse
          information={{
            title: "Opladen van elektrische auto's voor je bedrijf",
            info: "Je moet succesvol zijn in een voortdurend veranderende omgeving. Maar anticiperen op toekomstige behoeften kan een uitdaging zijn. Ons laadnetwerk past zich aan de specifieke behoeften van je bedrijf en groeit met je mee. Hiermee kan je het laden beheren via een cloudplatform waardoor je inzicht en controle krijgt.",
            image: "/images/night6.jpg",
          }}
        />

        <section id="contact">
          <div className="mb-10 mt-20 flex flex-col gap-8">
            <h2 className="text-center text-4xl" data-aos="fade-up">
              Contact
            </h2>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
