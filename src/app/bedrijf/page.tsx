import BedrijfHero from "~/components/bedrijf-hero";
import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import SpecificInfo from "~/components/specific-info";

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
            image:
              "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/zakelijk 2.jpg",
          }}
        />

        <SpecificInfo
          isReverse
          information={{
            title: "Volledige ontzorging voor uw bedrijf",
            info: `We begeleiden je bij elke stap, van het eerste overleg tot de uiteindelijke
implementatie. Zo weet u zeker dat jouw investering rendeert en
toekomstbestendig is. Onze laadinfrastructuur sluit perfect aan bij de
behoeften van uw organisatie, medewerkers en bezoekers. Wij regelen alles
efficiënt, zodat u zich kunt focussen op uw kernactiviteiten.`,
            image:
              "https://laadexpert.s3.eu-north-1.amazonaws.com/public/images/zakelijk2.jpg",
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
