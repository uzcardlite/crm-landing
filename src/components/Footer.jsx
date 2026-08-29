import { CONTACT_PHONE, CONTACT_PHONE_TEL, TELEGRAM_USERNAME } from "../config";
import { useLeadModal } from "../context/LeadModalContext";

export default function Footer() {
  const { openLead } = useLeadModal();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand" style={{ marginBottom: 12 }}>
              <div className="brand-mark">
                <img src="/logo.svg" alt="" />
              </div>
              ncrm
            </div>
            <p style={{ color: "var(--muted)", fontSize: 13.5, lineHeight: 1.6, maxWidth: "34ch" }}>
              O'zbek o'quv markazlari uchun AI bilan boshqariladigan boshqaruv tizimi.
            </p>
          </div>
          <div>
            <h6>Tizim</h6>
            <ul>
              <li>
                <a href="#features">Imkoniyatlar</a>
              </li>
              <li>
                <a href="#ai">AI</a>
              </li>
              <li>
                <a href="#integrations">Integratsiyalar</a>
              </li>
              <li>
                <a href="#faq">Savollar</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Bog'lanish</h6>
            <ul>
              <li>
                <a href={`https://t.me/${TELEGRAM_USERNAME}`} target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE}</a>
              </li>
              <li>
                <a
                  href="#cta"
                  onClick={(e) => {
                    e.preventDefault();
                    openLead();
                  }}
                >
                  Bepul konsultatsiya
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 ncrm. Barcha huquqlar himoyalangan.</span>
          <span>Maxfiylik kelishuvi · Foydalanish shartlari</span>
        </div>
      </div>
    </footer>
  );
}
