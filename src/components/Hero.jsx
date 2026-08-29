import { useLeadModal } from "../context/LeadModalContext";
import HeroArt from "./HeroArt";
import HeroChatFloat from "./HeroChatFloat";

export default function Hero() {
  const { openLead } = useLeadModal();

  return (
    <header className="hero" id="top">
      <div className="hero-blob b1" />
      <div className="hero-blob b2" />
      <div className="hero-blob b3" />
      <HeroChatFloat />
      <div className="wrap hero-inner">
        <h1>
          O'quv markazingiz uchun <span className="hl">AI bilan boshqariladigan</span> tizim
        </h1>
        <p className="lead">
          Qo'lda yuritiladigan jadvallar, yo'qolgan to'lovlar va tarqoq Excel fayllarni unuting.
          ncrm davomat, moliya, marketing va hisobotlarni avtomatlashtiradi — sun'iy intellekt esa
          savollaringizga javob berib, bannerlaringizni chizib beradi.
        </p>
        <div className="hero-ctas">
          <a
            className="btn btn-dark"
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              openLead();
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            Bepul sinab ko'ring
          </a>
          <a className="btn btn-ghost" href="#ai">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M10 8l6 4-6 4V8z" />
            </svg>
            AI imkoniyatlarini ko'rish
          </a>
        </div>
      </div>

      <div className="wrap">
        <HeroArt />
        <div className="feature-strip">
          <span className="feature-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />
            </svg>
            AI Tahlil va Poster Studiyasi
          </span>
          <span className="feature-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Bir bosishda davomat
          </span>
          <span className="feature-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
            Moliya va qarzdorlik nazorati
          </span>
          <span className="feature-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.8 4.6a5 5 0 00-7.1 0L12 6.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 21l8.8-9.3a5 5 0 000-7.1z" />
            </svg>
            Ota-onalar uchun Farzandim ilovasi
          </span>
        </div>
      </div>
    </header>
  );
}
