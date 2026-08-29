import { useLeadModal } from "../context/LeadModalContext";

export default function AISpotlight() {
  const { openLead } = useLeadModal();

  return (
    <section id="ai">
      <div className="wrap">
        <div className="ai-section">
          <div className="ai-grid">
            <div>
              <div className="eyebrow">
                Farqimiz
                <span className="ai-live">
                  <span className="dot" />
                  Jonli ishlaydi
                </span>
              </div>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Haqiqiy ishlaydigan sun'iy intellekt
              </h2>
              <p className="lead">
                Ko'pchilik "AI" deb reklama qiladi. Bizniki — bazangizga ulangan, real javob beradigan,
                real banner chizadigan ishchi vosita.
              </p>
              <div className="ai-points">
                <div className="ai-point">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />
                    </svg>
                  </span>
                  <div>
                    <b>AI Tahlil</b>
                    <span>Tabiiy tilda savol so'rang — bazangizdagi haqiqiy raqamlar bilan javob keladi.</span>
                  </div>
                </div>
                <div className="ai-point">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </span>
                  <div>
                    <b>Poster Studiyasi</b>
                    <span>O'z brendingiz ranglari bilan professional banner — daqiqalarda, dizaynerga muhtoj bo'lmasdan.</span>
                  </div>
                </div>
                <div className="ai-point">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  </span>
                  <div>
                    <b>Xavfsizlik birinchi o'rinda</b>
                    <span>AI faqat agregat va maskalangan ma'lumotni ko'radi — shaxsiy ma'lumot tashqariga chiqmaydi.</span>
                  </div>
                </div>
              </div>
              <a
                className="btn btn-accent"
                href="#cta"
                onClick={(e) => {
                  e.preventDefault();
                  openLead();
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />
                </svg>
                AI imkoniyatlarini sinab ko'rish
              </a>
            </div>
            <div className="browser-window">
              <div className="browser-bar">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="browser-url">app.ncrm.uz/copilot</div>
              </div>
              <div className="browser-body">
                <div className="ai-bubble-u">Shu oy eng ko'p qarzi bor 10 ta ota-onani ko'rsat</div>
                <div className="ai-bubble-a-row">
                  <div className="ai-bubble-a-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="ai-bubble-a" style={{ marginBottom: 8 }}>
                      Avgust oyi bo'yicha <b>14 ta oila</b> qarzdor, jami <b>18 240 000 so'm</b>.
                    </div>
                    <div className="ai-result-card">
                      <div className="ai-result-row">
                        <span className="av" style={{ background: "#C4432B" }}>
                          DM
                        </span>
                        <span className="nm">Dilnoza Muhitdinova</span>
                        <span className="amt">2 400 000</span>
                      </div>
                      <div className="ai-result-row">
                        <span className="av" style={{ background: "#B9740F" }}>
                          SR
                        </span>
                        <span className="nm">Sardor Rahimov</span>
                        <span className="amt">2 100 000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
