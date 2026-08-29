import { useLeadModal } from "../context/LeadModalContext";
import Reveal from "./ui/Reveal";

export default function CTABand() {
  const { openLead } = useLeadModal();

  return (
    <section>
      <div className="wrap">
        <Reveal as="div" className="cta-band">
          <h2 className="section-title">O'quv markazingizni bugundan boshqacha boshqaring</h2>
          <p>7 kun bepul sinab ko'ring — karta raqami talab qilinmaydi.</p>
          <a
            className="btn btn-accent"
            href="#cta"
            style={{ padding: "14px 28px", fontSize: 15 }}
            onClick={(e) => {
              e.preventDefault();
              openLead();
            }}
          >
            Bepul boshlash
          </a>
        </Reveal>
      </div>
    </section>
  );
}
