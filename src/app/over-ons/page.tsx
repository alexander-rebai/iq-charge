import { TeamCards } from "~/components/animated-team-card";
import Contact from "~/components/contact";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import OverOnsHero from "~/components/over-ons-hero";

const teamMembers = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Noam",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Robin",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Freddy",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <OverOnsHero />

        {/* <section className="mx-auto max-w-3xl px-8 py-16 text-center">
          <p className="text-base-content-secondary text-lg leading-relaxed">
            Bij Laadexpert zijn we gepassioneerd over het faciliteren van de
            transitie naar elektrisch rijden. Als specialist in laadoplossingen
            voor elektrische voertuigen, combineren we technische expertise met
            persoonlijke service om voor elke situatie de beste laadoplossing te
            vinden. Ons team van experts staat klaar om u te begeleiden bij het
            hele proces - van advies en installatie tot onderhoud en beheer van
            uw laadstation.
          </p>
        </section> */}

        <section
          className="flex flex-col items-center justify-center gap-8 py-12"
          data-aos="fade-up"
        >
          <h2 className="text-center text-4xl">Ons team</h2>
          <TeamCards testimonials={teamMembers} />
        </section>

        <section id="contact">
          <div className="mb-10  flex flex-col gap-8">
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
