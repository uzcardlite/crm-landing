import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Solutions from "./components/Solutions";
import SectionDashboard from "./components/SectionDashboard";
import SectionParents from "./components/SectionParents";
import AISpotlight from "./components/AISpotlight";
import Integrations from "./components/Integrations";
import Partners from "./components/Partners";
import TrustSignal from "./components/TrustSignal";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

// Pricing is deliberately not on the site — deals are discussed per centre,
// not published as a fixed table. See src/components/Pricing.jsx (unused).
//
// Solutions.jsx (tabbed Davomat/Moliya/AI phone mockups) replaces the old
// SectionAttendance + SectionPayments + SectionAI trio — same content, one
// interactive block instead of three long scroll sections. Dashboard and
// Parents stay as their own sections: real product depth the mockup never
// covered, worth keeping even though it wasn't in the reference design.
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <FeatureGrid />
      <Solutions />
      <SectionDashboard />
      <SectionParents />
      <AISpotlight />
      <Integrations />
      <Partners />
      <TrustSignal />
      <FinalCTA />
      <Footer />
    </div>
  );
}
