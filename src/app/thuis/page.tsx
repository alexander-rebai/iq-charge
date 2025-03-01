import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import PartiulierHero from "~/components/particulier-hero";
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
        <PartiulierHero />

        <SpecificInfo
          information={{
            title: "Een opgeladen auto, wanneer jij het nodig hebt",
            info: "Met onze laadoplossingen voor thuis is het tanken van je auto moeiteloos. Plan je oplaadsessie en je auto zal automatisch laden terwijl je slaapt of aan het eten bent. Waarom zou je tijd verspillen aan het opladen als je wilt focussen op wat echt belangrijk is als je thuis bent?",
            image: "/images/charging.jpg",
          }}
        />

        <SpecificInfo
          isReverse
          information={{
            title: "Een opgeladen auto, wanneer jij het nodig hebt",
            info: "Met onze laadoplossingen voor thuis is het tanken van je auto moeiteloos. Plan je oplaadsessie en je auto zal automatisch laden terwijl je slaapt of aan het eten bent. Waarom zou je tijd verspillen aan het opladen als je wilt focussen op wat echt belangrijk is als je thuis bent?",
            image: "/images/charging.jpg",
          }}
        />

        {/* <section id="products"> */}
        {/* <div className="flex flex-col gap-8 px-4 pb-10 pt-20">
            <h2 className="text-center text-4xl" data-aos="fade-up">
              Onze Laadoplossingen
            </h2>

            {_products.map((product, i) => (
              <Information
                key={i}
                information={{
                  title: product.name,
                  info: product.features.join(" "),
                  image: product.img,
                  path: product.path,
                }}
                isProduct
                reverse={i % 2 ? true : false}
              />
            ))}
          </div>
        </section> */}

        {/* <CallToActionBanner
          title="Bespaar tijd en geld met onze efficiënte laadoplossingen."
          info="Vraag een offerte aan of neem contact met ons op voor meer informatie"
        /> */}

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
