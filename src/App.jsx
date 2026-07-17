import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import SectionAttendance from "./components/SectionAttendance";
import SectionPayments from "./components/SectionPayments";
import SectionDashboard from "./components/SectionDashboard";
import SectionParents from "./components/SectionParents";
import TrustSignal from "./components/TrustSignal";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

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
      <TrustSignal />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
