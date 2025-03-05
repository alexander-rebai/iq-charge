import CallToActionBanner from "~/components/call-to-action-banner";
import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Hero } from "~/components/hero";
import { type Information as InformationType } from "~/components/information";
import RoadMap from "~/components/roadmap";
import Stats from "~/components/stats";
import { TracingBeam } from "~/components/ui/tracing-beam";

const information: InformationType[] = [
  {
    title: "Laadexpert: Charge Intelligently",
    info: "Geef uw reis een krachtige impuls, of het nu gaat om uw dagelijkse woon-werkverkeer of het opladen van uw bedrijfsvloot, met Laadexpert. Stap in een wereld waar elke laadbeurt slimmere, data-verrijkte inzichten biedt, die uw energieverbruik optimaliseren en nieuwe niveaus van gemak en controle ontgrendelen. Het is niet zomaar opladen; het gaat om het verrijken van elke reis met intelligentie en vooruitziendheid. Naadloze Integratie voor Leven en Werk.",
    image: "/images/charging.jpg",
  },
  {
    title: "Seamless integration for Life and Work",
    info: "Laadexpert herdefinieert de oplaad ervaring door naadloos te integreren in zowel uw persoonlijke als professionele leven. Onze geavanceerde oplossingen zorgen ervoor dat uw voertuig, of uw hele vloot, altijd klaar en opgeladen is, zonder uw dag- of werkproces te onderbreken. Ervaar het gemak van een laadoplossing die zich aan u aanpast, waardoor elke dag efficiënter wordt en elke operatie soepeler verloopt.",
    image: "/images/road_lights.jpg",
  },
  {
    title: "Laadexpert, Drive Intelligent",
    info: "Stap in de snelle baan van efficiëntie met Laadexpert. Onze snellaadtechnologie verkort wachttijden aanzienlijk, waardoor u vooruit gaat met minimale downtime. Perfect voor de milieubewuste individu of het vooruitstrevende bedrijf, onze stations zijn ontworpen om u efficiënt en duurzaam in beweging te houden. Verhoog uw impact bij elke laadbeurt, door productiviteit en milieubeheer vooruit te drijven.",
    image: "/images/loading.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TracingBeam>
          <Hero />
          <Stats />
          <RoadMap />

          <CallToActionBanner
            title="Klaar om tijd én geld te besparen met jouw eigen laadpaal?"
            info="Vraag vandaag nog je gratis offerte aan en plan een persoonlijk
adviesgesprek. Wij regelen alles van administratie tot installatie, zodat jij
binnen twee weken zorgeloos elektrisch kunt laden."
          />

          {/* <SolutionCompany /> */}
          {/* 
          <CallToActionBanner
            title="Laadexpert by IQ Solar"
            info="IQ Solar biedt een compleet aanbod van zonnepanelen tot thuisbatterijen voor zowel particulieren als bedrijven."
            isIQSolar
          /> */}

          {/* <SolutionHome /> */}

          {/* <section id="over" className="pt-28">
            <div className="mb-10 mt-20 flex flex-col gap-8 p-2 md:p-0">
              <h2 className="text-center text-4xl" data-aos="fade-up">
                Over ons
              </h2>
              {information.map((info, i) => (
                <Information
                  key={i}
                  information={info}
                  reverse={i % 2 ? true : false}
                />
              ))}
            </div>
          </section> */}
          {/* <CallToActionBanner
            title="Meld uw laadpaal aan bij Fluvius"
            info="Het is verplicht om uw private laadpaal aangesloten op het laagspanningsnet met een vermogen van 5 kVA of meer aan te melden bij Fluvius."
            isFluvius
          /> */}
          <section id="contact">
            <div className="mb-10 mt-20 flex flex-col gap-8">
              <h2 className="text-center text-4xl" data-aos="fade-up">
                Neem vandaag nog contact met ons op
              </h2>
              <Contact />
            </div>
          </section>
        </TracingBeam>
      </main>
      <Footer />
    </>
  );
}
