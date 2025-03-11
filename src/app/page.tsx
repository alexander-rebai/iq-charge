import CallToActionBanner from "~/components/call-to-action-banner";
import { RealisationsCarousel } from "~/components/carousels/realisations-carousel";
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

          <section className="block xl:hidden">
            <div className="mb-6 mt-6 flex flex-col gap-8">
              <h2 className="text-center text-4xl" data-aos="fade-up">
                Onze realisaties
              </h2>
              <RealisationsCarousel variant="mobile" />
            </div>
          </section>

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
                Vraag hier je persoonlijke adviesgesprek aan
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
