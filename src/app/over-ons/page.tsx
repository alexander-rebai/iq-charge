import { TeamCards } from "~/components/animated-team-card";
import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import OverOnsHero from "~/components/over-ons-hero";

const teamMembers = [
  {
    quote: `Ik ben iemand die geen drempels kent: ik wil trots zijn op wat ik doe en een stevige
carrière uitbouwen. Ik heb de evolutie naar elektrisch rijden zien aankomen en daarom
besloot ik op het juiste moment in te stappen. Met alle ervaring die ik opdeed -
bijvoorbeeld bij installaties en klantbegeleiding - weet ik exact hoe ik je op weg kan
helpen.`,
    name: "Liam",
    designation: "Voldoening en Groei",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: `Elk project, elke laadpaal is voor mij een bouwsteen in het groter geheel. Dankzij mijn
ruime ervaring weet ik de kneepjes van het vak. Ik heb maar één visie: het elektrisch laden
toegankelijk en zorgeloos maken voor iedereen. Zo bouw ik mee aan een duurzaam
België waar iedereen vol vertrouwen elektrisch rijdt.`,
    name: "Noam",
    designation: "Groot Denken, Duurzame Toekomst",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: `Jouw laadpaal-installatie ligt in mijn handen - en dat is voor mij de perfecte kans om te
laten zien dat Laadexpert.be écht het verschil maakt. Met mijn passie voor innovatie zorg
ik ervoor dat we altijd met de nieuwste trends meegaan, zonder dat onze klanten daar
hoofdpijn van krijgen. Wij kennen de skipiste van elektrische installaties inmiddels als
geen ander - en zorgen dat jij vlot én veilig naar beneden glijdt.`,
    name: "Robin",
    designation: "Innoveren en Vooruit Gaan",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <OverOnsHero />

        <div className="bg-white py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="mb-10  flex flex-col gap-8" data-aos="fade-up">
                <h2 className="text-center text-4xl">Wat wij doen</h2>
                <p className="pt-4 text-center text-gray-500">
                  Bij Laadexpert.be geloven we dat elektrisch rijden véél meer
                  is dan alleen een groene keuze - het is pure vrijheid. Met een
                  laadpaal bij je thuis of op je werk verlies je nooit meer tijd
                  aan de pomp.
                </p>
                <p className="pt-4 text-center text-gray-500">
                  Wij willen de hele rompslomp rond laden voor jou wegwerken,
                  zodat je zorgeloos de weg op kunt. Of je nu pas een
                  elektrische wagen hebt gekocht of all-in gaat met zonnepanelen
                  en een thuisbatterij: wij zorgen dat jouw laad ervaring
                  vlekkeloos verloopt. In ons team vind je gepassioneerde
                  experts die elk aspect van jouw laadoplossing verzorgen. We
                  luisteren, adviseren, installeren en bieden 24/7 service. Zo
                  krijg je niet alleen een laadpaal - je krijgt gemoedsrust.
                </p>
                <p className="pt-4 text-center text-gray-500">
                  Stel dat je ‘s ochtends een storing ervaart, dan staan wij
                  dezelfde dag nog aan je deur. Die persoonlijke aanpak is voor
                  ons heilig. Want als je vandaag voor Laadexpert.be kiest,
                  verdien je ook vandaag een oplossing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section
          className="flex flex-col items-center justify-center py-12"
          data-aos="fade-up"
        >
          <h2 className="text-center text-4xl">Ons team</h2>
          <TeamCards testimonials={teamMembers} />
        </section>

        <section id="contact">
          <div className="mb-10  flex flex-col gap-8">
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
