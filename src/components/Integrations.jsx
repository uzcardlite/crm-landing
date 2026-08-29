import Reveal from "./ui/Reveal";
import { handleTiltMove, handleTiltLeave } from "../lib/tilt";

const ITEMS = [
  {
    wide: true,
    iconBg: "linear-gradient(155deg, var(--accent-light), var(--accent))",
    iconColor: "#2A1B04",
    icon: <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />,
    name: "Google Gemini AI",
    badge: "Faol",
    text: "AI Tahlil savol-javobini va Poster Studiyasidagi banner generatsiyasini ishga tushiradi — bitta AI kaliti orqali.",
    strokeIcon: true,
  },
  {
    iconBg: "#DCEEFB",
    iconColor: "#1E88C7",
    icon: (
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.14-3.05-2 1.92c-.23.23-.42.42-.82.42z" />
    ),
    name: "Telegram bot",
    text: "Ota-onaga avtomatik xabar va bildirishnoma",
  },
  {
    iconBg: "var(--accent-light)",
    iconColor: "var(--accent-dark)",
    icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
    name: "SMS xabarnoma",
    text: "Eskiz orqali eslatma va to'lov xabarlari",
    strokeIcon: true,
  },
  {
    iconBg: "var(--good-bg)",
    iconColor: "var(--good)",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
      </>
    ),
    name: "Excel eksport",
    text: "Har qanday hisobotni bir bosishda yuklab oling",
    strokeIcon: true,
  },
  {
    iconBg: "#E3ECFB",
    iconColor: "#3E6FD9",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </>
    ),
    name: "Cloudinary",
    text: "O'quvchi va o'qituvchi rasmlari, banner fayllari xavfsiz saqlanadi",
    strokeIcon: true,
  },
  {
    iconBg: "#E4F3F1",
    iconColor: "#2E9E8F",
    icon: (
      <>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    name: "Turniket qurilmalari",
    text: "Kirish-chiqish vaqtini avtomatik qayd qiladigan qurilmalar bilan ulanadi",
    strokeIcon: true,
  },
];

export default function Integrations() {
  return (
    <section id="integrations">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 24 }}>
          <div className="eyebrow">Integratsiyalar</div>
          <Reveal as="h2" className="section-title">
            Allaqachon ulangan xizmatlar
          </Reveal>
          <Reveal as="p" className="section-sub">
            Xabar yuborishdan sun'iy intellektgacha — ncrm yadrosi bilan tayyor holda ishlaydi.
          </Reveal>
        </div>
        <Reveal as="div" className="integ-hub">
          <span className="integ-hub-line" />
          <span className="integ-hub-node">
            <span className="dot2" />
            ncrm yadrosi
          </span>
          <span className="integ-hub-line r" />
        </Reveal>
        <div className="integ-row">
          {ITEMS.map((item) => (
            <Reveal
              as="div"
              className={`integ-card${item.wide ? " wide" : ""}`}
              key={item.name}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
            >
              <div className="integ-icon" style={{ background: item.iconBg, color: item.iconColor }}>
                <svg
                  viewBox="0 0 24 24"
                  fill={item.strokeIcon ? "none" : "currentColor"}
                  stroke={item.strokeIcon ? "currentColor" : undefined}
                  strokeWidth={item.strokeIcon ? 2 : undefined}
                >
                  {item.icon}
                </svg>
              </div>
              <div>
                <h5>
                  {item.name} {item.badge ? <span className="integ-badge">{item.badge}</span> : null}
                </h5>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
