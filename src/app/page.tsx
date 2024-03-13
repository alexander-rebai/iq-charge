import CallToActionBanner from "~/components/call-to-action-banner";
import ItemsBanner from "~/components/call-to-action-items";
import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Hero } from "~/components/hero";
import Information, {
  type Information as InformationType,
} from "~/components/information";
import { type Product as ProductType } from "~/components/product";
import Products from "~/components/products";
import RoadMap from "~/components/roadmap";

const products: ProductType[] = [
  {
    name: "Alfen",
    path: "alfen",
    img: "/alfen/s1.png",
    features: [
      "U kunt de kosten van elke laadsessie opvolgen. Dankzij de optie split-billing kunt u de laadkosten van uw voertuig scheiden van het huishoudelijk energieverbruik en rechtstreeks factureren aan uw werkgever of uw bedrijf.",
    ],
  },
  {
    name: "Huawei",
    path: "huawei",
    img: "/huawei/h1.png",
    features: [
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
      "Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
    ],
  },
  {
    name: "Wallbox",
    path: "wallbox",
    img: "/wallbox/w2.png",
    features: [
      "De Wallbox Pulsar Plus is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
      "Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
      "De Wallbox Pulsar Plus is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
    ],
  },
  {
    name: "Smappee",
    path: "smappee",
    img: "/smappee/s2.png",
    features: [
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
      "Deze laadoplossing is compatibel met alle elektrische voertuigen en plug-in hybride elektrische voertuigen.",
      "De Huawei Smart Charger 7KS-SO is een slimme laadoplossing voor elektrische voertuigen (EV’s) die is ontworpen voor thuisgebruik.",
    ],
  },
];

const information: InformationType[] = [
  {
    title: "IQ Charge: Charge Intelligently",
    info: "Geef uw reis een krachtige impuls, of het nu gaat om uw dagelijkse woon-werkverkeer of het opladen van uw bedrijfsvloot, met IQ Charge. Stap in een wereld waar elke laadbeurt slimmere, data-verrijkte inzichten biedt, die uw energieverbruik optimaliseren en nieuwe niveaus van gemak en controle ontgrendelen. Het is niet zomaar opladen; het gaat om het verrijken van elke reis met intelligentie en vooruitziendheid. Naadloze Integratie voor Leven en Werk.",
  },
  {
    title: "Seamless integration for Life and Work",
    info: "Q Charge herdefinieert de oplaad ervaring door naadloos te integreren in zowel uw persoonlijke als professionele leven. Onze geavanceerde oplossingen zorgen ervoor dat uw voertuig, of uw hele vloot, altijd klaar en opgeladen is, zonder uw dag- of werkproces te onderbreken. Ervaar het gemak van een laadoplossing die zich aan u aanpast, waardoor elke dag efficiënter wordt en elke operatie soepeler verloopt.",
  },
  {
    title: "IQ Charge, Drive Intelligent",
    info: "Stap in de snelle baan van efficiëntie met IQ Charge. Onze snellaadtechnologie verkort wachttijden aanzienlijk, waardoor u vooruit gaat met minimale downtime. Perfect voor de milieubewuste individu of het vooruitstrevende bedrijf, onze stations zijn ontworpen om u efficiënt en duurzaam in beweging te houden. Verhoog uw impact bij elke laadbeurt, door productiviteit en milieubeheer vooruit te drijven.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CallToActionBanner
          title="Samen naar een duurzame toekomst met de juiste laadoplossing"
          info="Vraag een offerte aan of neem contact met ons op voor meer informatie."
        />
        <ItemsBanner />

        <Products products={products} />
        <RoadMap />

        <section id="over">
          <div className="mb-10 mt-20 flex flex-col gap-8">
            <h2 className="text-center text-5xl font-semibold">Over ons</h2>
            {information.map((info, i) => (
              <Information
                key={i}
                information={info}
                reverse={i % 2 ? true : false}
              />
            ))}
          </div>
        </section>
        <CallToActionBanner
          title="Meld uw laadpaal aan bij Fluvius"
          info="Het is verplicht om uw private laadpaal aangesloten op het laagspanningsnet met een vermogen van 5 kVA of meer aan te melden bij Fluvius."
          isFluvius
        />
        <section id="contact">
          <div className="mb-10 mt-20 flex flex-col gap-8">
            <h2 className="text-center text-5xl font-semibold">Contact</h2>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
