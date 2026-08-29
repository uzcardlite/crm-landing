import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Solutions from "./components/Solutions";
import FeatureGrid from "./components/FeatureGrid";
import AISpotlight from "./components/AISpotlight";
import Integrations from "./components/Integrations";
import CTABand from "./components/CTABand";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import { LeadModalProvider } from "./context/LeadModalContext";

// A literal, section-for-section port of the approved reference mockup
// (https://claude.ai/code/artifact/bc20a287-b9da-41fb-90ea-b061aba581ae) —
// same markup, same classes, same design tokens (src/mockup.css), same
// order. Pricing is intentionally not on the site — deals are discussed per
// centre, not published as a fixed table.
export default function App() {
  return (
    <LeadModalProvider>
      <div className="mcrm">
        <Nav />
        <Hero />
        <Partners />
        <Solutions />
        <FeatureGrid />
        <AISpotlight />
        <Integrations />
        <CTABand />
        <FAQ />
        <Footer />
        <LeadModal />
      </div>
    </LeadModalProvider>
  );
}
