import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import PartiulierHero from "~/components/particulier-hero";
import SpecificInfo from "~/components/specific-info";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PartiulierHero />

        <SpecificInfo
          information={{
            title: "Waarom kiezen voor een laadpaal thuis?",
            info: `Een eigen laadpaal is méér dan gemak - het is de meest efficiënte en
voordelige manier om je elektrische auto op te laden. Thuis kan je eenvoudig
's nachts of tijdens daluren laden tegen het laagste tarief.`,
            info2: `Heb je al zonnepanelen of een thuisbatterij? Dan vormt de laadpaal het
laatste puzzelstuk van je duurzame energieplan. Geen gedoe met installaties
of onduidelijke kosten: je hoeft enkel in te pluggen en je auto laadt terwijl jij je
bezighoudt met wat er écht toe doet.`,
            image: "/images/charging.jpg",
          }}
        />

        <SpecificInfo
          isReverse
          information={{
            title: "Waarom Laadexpert.be?",
            info: `Wij hebben één focus: laadpalen. We adviseren je persoonlijk op basis van je
behoeften, budget, elektrische aansluiting en automerk. Ook de installatie
pakken we professioneel voor je op - van het eerste adviesgesprek met Noam
of Liam tot het vakkundig plaatsen van je laadpunt door Robin en Dennis.`,
            info2: `Zo ben je in één keer klaar voor jouw elektrische toekomst. Met één klik vraag
je een vrijblijvende offerte aan, en nemen we de volledige klus van je over. Dat
betekent geen frustratie, geen tijdverlies, maar puur laadgemak aan huis.`,
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
