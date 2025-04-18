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
voordelige manier om je elektrische auto op te laden.`,
            info2: `Heb je al zonnepanelen of een thuisbatterij? Dan vormt de laadpaal het
laatste puzzelstuk van je duurzame energieplan.`,
            video: "https://dx8uea1j8p9gd.cloudfront.net/public/video_ad.mp4",
          }}
        />

        <SpecificInfo
          isReverse
          information={{
            title: "Waarom Laadexpert?",
            info: `Wij hebben één focus: laadpalen. We adviseren je persoonlijk op basis van je
behoeften, budget, elektrische aansluiting en automerk. Ook de installatie
pakken we professioneel voor je aan - van het eerste adviesgesprek met Noam
of Liam tot het vakkundig plaatsen van je laadpunt door Robin en Dennis.`,
            info2: `Zo ben je in één keer klaar voor jouw elektrische toekomst. Met één klik vraag
je een vrijblijvende offerte aan, en nemen we de volledige klus van je over.`,
            image:
              "https://dx8uea1j8p9gd.cloudfront.net/public/fotos/noam_home.png",
          }}
        />

        <section id="contact">
          <div className="mb-10 mt-20 flex flex-col gap-8">
            <h2 className="text-center text-4xl" data-aos="fade-up">
              Vraag hier je persoonlijk adviesgesprek aan{" "}
            </h2>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
