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

const _products: ProductType[] = [
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
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV's) die is ontworpen voor thuisgebruik.",
      "Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV's) die is ontworpen voor thuisgebruik.",
    ],
  },
  {
    name: "Wallbox",
    path: "wallbox",
    img: "/products/wallbox_prod.jpeg",
    features: [
      "De Wallbox Pulsar Plus is een slimme laadoplossing voor elektrische voertuigen (EV's) die is ontworpen voor thuisgebruik.",
      "Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
      "De Wallbox Pulsar Plus is een slimme laadoplossing voor elektrische voertuigen (EV's) die is ontworpen voor thuisgebruik.",
    ],
  },
  {
    name: "Smappee",
    path: "smappee",
    img: "/products/smappee_prod.jpeg",

    features: [
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV's) die is ontworpen voor thuisgebruik.",
      "Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV's) die is ontworpen voor thuisgebruik.",
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
            title: "Een oplossing voor elk type onderneming",
            info: `Wij bieden voor iedere zakelijke situatie een passende oplossing. Of het nu
gaat om grote bedrijven die maximale energiebesparing zoeken, KMO's die
snel rendement willen halen uit hun laadinfrastructuur, vastgoedbeheerders
die de waarde van hun panden willen verhogen, of projectontwikkelaars die
duurzaamheid vroegtijdig willen integreren - wij maken elektrisch laden
eenvoudig, rendabel en toekomstbestendig voor jouw organisatie.`,
            image: "/images/night6.jpg",
          }}
        />

        <SpecificInfo
          isReverse
          information={{
            title: "Volledige ontzorging voor uw bedrijf",
            info: `We begeleiden je bij elke stap, van het eerste overleg tot de uiteindelijke
implementatie. Zo weet u zeker dat jouw investering rendeert en
toekomstbestendig is. Onze laadinfrastructuur sluit perfect aan bij de
behoeften van uw organisatie, medewerkers en bezoekers - of je nu één
laadpunt wilt installeren of een compleet netwerk zoekt. Wij regelen alles
efficiënt, zodat u zich kunt focussen op uw kernactiviteiten.`,
            image: "/images/night6.jpg",
          }}
        />

        <section id="contact">
          <div className="mb-10 mt-20 flex flex-col gap-8">
            <h2 className="text-center text-4xl" data-aos="fade-up">
              Neem vandaag nog contact op
            </h2>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
