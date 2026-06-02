import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Symptoms } from "./components/Symptoms";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { WhyLifeGames } from "./components/WhyLifeGames";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { WhatsappFab } from "./components/WhatsappFab";
import { EcgScrollDivider } from "./components/ui/EcgLine";

export default function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Header />

      <main>
        <Hero />
        <TrustBar />
        <Symptoms />
        <EcgScrollDivider />
        <Services />
        <HowItWorks />
        <WhyLifeGames />
        <EcgScrollDivider />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <WhatsappFab />
    </>
  );
}
