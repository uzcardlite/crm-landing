import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import SectionAttendance from "./components/SectionAttendance";
import SectionPayments from "./components/SectionPayments";
import SectionDashboard from "./components/SectionDashboard";
import SectionParents from "./components/SectionParents";
import Partners from "./components/Partners";
import TrustSignal from "./components/TrustSignal";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

// Pricing is deliberately not on the site — deals are discussed per centre,
// not published as a fixed table. See src/components/Pricing.jsx (unused).
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Pillars />
      <SectionAttendance />
      <SectionPayments />
      <SectionDashboard />
      <SectionParents />
      <Partners />
      <TrustSignal />
      <FinalCTA />
      <Footer />
    </div>
  );
}
