import CallToActionBanner from "~/components/call-to-action-banner";
import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Hero } from "~/components/hero";
import LogoCloud from "~/components/logo-cloud";
import RoadMap from "~/components/roadmap";
import Stats from "~/components/stats";
import { TracingBeam } from "~/components/ui/tracing-beam";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TracingBeam>
          <Hero />
          <LogoCloud />
          <Stats />
          <RoadMap />

          <CallToActionBanner
            title="Klaar om tijd én geld te besparen met jouw eigen laadpaal?"
            info="Vraag vandaag nog je gratis offerte aan en plan een persoonlijk
adviesgesprek. Wij regelen alles van administratie tot installatie, zodat jij
binnen twee weken zorgeloos elektrisch kunt laden."
          />

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
