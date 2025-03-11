import { TeamCards } from "~/components/animated-team-card";
import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

const teamMembers = [
  {
    quote: `Door mijn jarenlange ervaring met installaties en persoonlijke
klantbegeleiding ken ik alle uitdagingen én oplossingen rondom elektrisch
laden. Ik weet precies welke laadpaal bij jouw situatie past en hoe we die
perfect kunnen integreren in je dagelijks leven.`,
    name: "Liam",
    designation: "Elke tevreden klant geeft mij energie.",
    src: "https://laadexpert.s3.eu-north-1.amazonaws.com/public/team/Liam.png",
  },
  {
    quote: `Mijn missie is helder: elektrisch laden zo eenvoudig en zorgeloos mogelijk
maken. Want alleen als we de drempel verlagen, kunnen we samen bouwen
aan een duurzaam België waar elektrisch rijden de standaard wordt.`,
    name: "Noam",
    designation: "Ik bouw mee aan een elektrische toekomst voor iedereen.",
    src: "https://laadexpert.s3.eu-north-1.amazonaws.com/public/team/Noam.png",
  },
  {
    quote: `Als technisch expert bij Laadexpert zorg ik dat jouw laadpaal perfect
geïnstalleerd wordt. Elke installatie bewijst dat we écht het verschil maken in
service en kwaliteit.`,
    name: "Robin",
    designation: "Innoveren en Vooruit Gaan",
    src: "https://laadexpert.s3.eu-north-1.amazonaws.com/public/team/Robin.png",
  },
  {
    quote: `Of het nu gaat om een eenvoudige thuislaadpaal of een complexe
bedrijfsoplossing - Dennis levert technische perfectie zonder compromissen.
Zijn klanten waarderen vooral zijn oog voor detail en de rust die hij uitstraalt
tijdens het hele installatieproces.`,
    name: "Dennis",
    designation: "Perfectie zit in de details",
    src: "https://laadexpert.s3.eu-north-1.amazonaws.com/public/team/Dennis.png",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 ">
        {/* <OverOnsHero /> */}

        <section
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <h2 className="text-center text-5xl font-bold">Ons team</h2>
          <TeamCards testimonials={teamMembers} autoplay />
        </section>

        <div className="bg-white py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div
                className="mb-10 flex flex-col gap-2 text-center"
                data-aos="fade-up"
              >
                <h2 className="text-4xl">
                  Jouw partner in elektrische vrijheid
                </h2>
                <p className="pt-4  text-gray-500">
                  Bij Laadexpert geloven we dat elektrisch rijden veel meer is
                  dan alleen een groene keuze - het is pure vrijheid. Met een
                  laadpaal bij je thuis of op je werk verlies je nooit meer
                  kostbare tijd aan de pomp en start je elke dag met een volle
                  batterij.
                </p>

                <h3 className="pt-6  text-2xl">
                  Persoonlijke aanpak als fundament
                </h3>
                <p className="pt-1  text-gray-500">
                  Of je nu net je eerste elektrische wagen hebt aangeschaft of
                  jouw woning volledig verduurzaamt met zonnepanelen en een
                  thuisbatterij: wij zorgen dat jouw laadervaring perfect
                  aansluit bij jouw levensstijl.
                </p>

                <h3 className="pt-6  text-2xl">
                  Snel, deskundig en betrouwbaar
                </h3>
                <p className="pt-1  text-gray-500">
                  Kies je vandaag voor Laadexpert, dan krijg je vandaag nog een
                  oplossing. Ons team van gecertificeerde experts luistert naar
                  je wensen, adviseert de beste oplossing voor jouw situatie en
                  installeert alles vakkundig - meestal binnen twee weken.
                </p>

                <h3 className="pt-6  text-2xl">Vragen of storingen?</h3>
                <p className="pt-1  text-gray-500">
                  Onze helpdesk staat 24/7 voor je klaar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section id="contact">
          <div className="mb-10  flex flex-col gap-8">
            <h2 className="text-center text-4xl" data-aos="fade-up">
              Vraag hier je persoonlijke adviesgesprek aan
            </h2>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
