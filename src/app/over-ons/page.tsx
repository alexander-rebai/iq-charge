import Contact from "~/components/contact";
import FeaturesAccordion from "~/components/features-accordion";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import OverOnsHero from "~/components/over-ons-hero";

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
        <OverOnsHero />

        <section className="mx-auto max-w-3xl px-8 py-16 text-center">
          <p className="text-base-content-secondary text-lg leading-relaxed">
            Bij Laadexpert zijn we gepassioneerd over het faciliteren van de
            transitie naar elektrisch rijden. Als specialist in laadoplossingen
            voor elektrische voertuigen, combineren we technische expertise met
            persoonlijke service om voor elke situatie de beste laadoplossing te
            vinden. Ons team van experts staat klaar om u te begeleiden bij het
            hele proces - van advies en installatie tot onderhoud en beheer van
            uw laadstation.
          </p>
        </section>

        <FeaturesAccordion />

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
