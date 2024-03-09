import { Container } from './container'
import { Card, CardContent, CardHeader } from './ui/card'

const ItemsBanner = () => {
  return (
    <Container>
      <div className="mb-10 mt-10 flex w-full flex-col gap-6 lg:grid lg:grid-cols-2">
        <Card className="border-primary border-t-[12px]">
          <CardHeader className="text-2xl font-bold">
            Onze Laadoplossingen
          </CardHeader>
          <CardContent className="text-muted-foreground flex flex-col gap-6">
            <h2>
              Vind uw ideale oplaadoplossing, van residentiële installaties tot
              grote bedrijven.
            </h2>
            <a
              href="/offerte"
              className="bg-primary/50 border-primary-foreground text-primary-foreground focus-visible:outline-primary w-fit self-center rounded-lg border-2 px-3.5 py-2 text-lg font-medium shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Vraag uw offerte op maat
            </a>
          </CardContent>
        </Card>
        <Card className="border-primary border-t-[12px]">
          <CardHeader className="text-2xl font-bold">
            IQ-Charge by IQ-Solar
          </CardHeader>
          <CardContent className="text-muted-foreground flex flex-col gap-6">
            <h2>
              Ontdek onze zonnepanelen en laadoplossingen voor een duurzame
              toekomst.
            </h2>
            <a
              href="https://iq-solar.be/"
              target="_blank"
              className="bg-primary/50 border-primary-foreground text-primary-foreground focus-visible:outline-primary w-fit self-center rounded-lg border-2 px-3.5 py-2 text-lg font-medium shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Meer weten over IQ-Solar
            </a>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

export default ItemsBanner
