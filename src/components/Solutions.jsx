import { useEffect, useRef, useState } from "react";
import Reveal from "./ui/Reveal";

const StatusIcons = () => (
  <span className="icons">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 17h2v4H2zM7 13h2v8H7zM12 9h2v12h-2zM17 5h2v16h-2z" />
    </svg>
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="7" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="9" width="12" height="6" rx="1" />
      <rect x="21" y="10" width="1.5" height="4" rx=".5" />
    </svg>
  </span>
);

const PhoneStatus = () => (
  <div className="phone-status">
    <span>09:41</span>
    <StatusIcons />
  </div>
);

function AttendancePhone() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <PhoneStatus />
        <div className="phone-app-header">
          <div className="app-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </div>
          <div>
            <div className="title">Ingliz tili · 9-guruh</div>
            <div className="sub">Bugun, 18:00</div>
          </div>
        </div>
        <div className="phone-body">
          <div className="plist">
            {[
              { initials: "DS", color: "#B9740F", name: "Davronbek Shakarov", pill: "✓ Keldi", bg: "var(--good-bg)", fg: "var(--good)" },
              { initials: "DZ", color: "#5B6FB0", name: "Dilshoda Zokirova", pill: "✓ Keldi", bg: "var(--good-bg)", fg: "var(--good)" },
              { initials: "SR", color: "#4B8A63", name: "Sardor Rahimov", pill: "⏱ Kechikdi", bg: "var(--accent-light)", fg: "var(--accent-ink)" },
              { initials: "AK", color: "#B0598A", name: "Aziza Karimova", pill: "✕ Kelmadi", bg: "#FCEBEB", fg: "#A32D2D" },
            ].map((row) => (
              <div className="plist-row" key={row.name}>
                <div className="plist-avatar" style={{ background: row.color }}>
                  {row.initials}
                </div>
                <div className="plist-body">
                  <div className="plist-name">{row.name}</div>
                </div>
                <span className="plist-pill" style={{ background: row.bg, color: row.fg }}>
                  {row.pill}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="phone-home" />
      </div>
    </div>
  );
}

function FinancePhone() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <PhoneStatus />
        <div className="phone-app-header">
          <div className="app-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          </div>
          <div>
            <div className="title">Moliya</div>
            <div className="sub">Avgust 2026</div>
          </div>
        </div>
        <div className="phone-body">
          <div className="finance-summary">
            <div>
              <div className="lbl">Jami tushum (oy)</div>
              <div className="val">18,4 mln</div>
            </div>
            <span className="trend">+12%</span>
          </div>
          <div className="plist-section-label">Bu oy qarzdorlar</div>
          <div className="plist">
            {[
              { initials: "DM", color: "#C4432B", name: "Dilnoza Muhitdinova", sub: "2 oydan beri", amount: "2 400 000" },
              { initials: "SR", color: "#B9740F", name: "Sardor Rahimov", sub: "1 oydan beri", amount: "2 100 000" },
            ].map((row) => (
              <div className="plist-row" key={row.name}>
                <div className="plist-avatar" style={{ background: row.color }}>
                  {row.initials}
                </div>
                <div className="plist-body">
                  <div className="plist-name">{row.name}</div>
                  <div className="plist-sub">{row.sub}</div>
                </div>
                <span className="plist-amount">{row.amount}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="phone-home" />
      </div>
    </div>
  );
}

function AIPhone() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <PhoneStatus />
        <div className="phone-app-header">
          <div className="app-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />
            </svg>
          </div>
          <div>
            <div className="title">AI Tahlil</div>
            <div className="sub">Bazangizga ulangan</div>
          </div>
        </div>
        <div className="phone-body">
          <div className="pchat">
            <div className="pchat-u">Bugun kim kelmadi?</div>
            <div className="pchat-a">
              <div className="pchat-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />
                </svg>
              </div>
              <div className="pchat-text">
                Bugun <b>3 ta</b> o'quvchi darsga kelmagan: <b>Aziza K.</b>, Jasur T., Nilufar Y.
              </div>
            </div>
            <div className="pchat-u">Ularga eslatma yubor</div>
            <div className="pchat-a">
              <div className="pchat-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />
                </svg>
              </div>
              <div className="pchat-text">
                <span className="pchat-typing">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="phone-home" />
      </div>
    </div>
  );
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const TABS = [
  {
    label: "Davomat",
    eyebrow: "Ustoz ilovasi orqali",
    title: "Davomat — bir bosishda, ota-onaga darhol xabar",
    text: "O'qituvchi telefonidagi ilovada guruhni ochadi va har bir o'quvchi qatorida \"Keldi / Kelmadi / Kechikdi\"ni bosadi. Dars kelmagan o'quvchining ota-onasiga Telegram orqali xabar shu zahoti yetib boradi — kassaga yoki administratorga qo'ng'iroq qilish shart emas.",
    checks: ["Bir bosishda belgilash", "Avtomatik Telegram xabar", "Oylik davomat hisoboti"],
    Phone: AttendancePhone,
  },
  {
    label: "Moliya",
    eyebrow: "To'lovlar va qarzdorlik",
    title: "Moliya — kim to'lagan, kim qarzdor, bir qarashda",
    text: "Har bir to'lov, xarajat va oylik hisob-kitob bitta joyda. Qarzdorlik oyma-oy avtomatik hisoblanadi, ota-onalar esa Farzandim ilovasida o'z farzandining to'lov holatini o'zi kuzatadi — qo'ng'iroq qilib so'rashning hojati qolmaydi.",
    checks: ["Avtomatik qarzdorlik hisobi", "Ota-ona o'z holatini ko'radi", "Excel hisobot bir bosishda"],
    Phone: FinancePhone,
  },
  {
    label: "AI Tahlil",
    eyebrow: "Sun'iy intellekt",
    title: "AI Tahlil — bazangiz bilan tabiiy tilda gaplashing",
    text: "\"Shu oy eng ko'p qarzi bor 10 ta ota-onani ko'rsat\" yoki \"Bugun kim darsga kelmadi?\" deb yozing — AI bazangizdan real ma'lumotni topib, tushunarli javob va jadval bilan qaytaradi. Alohida hisobot yaratishga vaqt sarflash shart emas.",
    checks: ["Tabiiy tildagi savollar", "Maskalangan, xavfsiz ma'lumot", "Jadval va grafik bilan javob"],
    Phone: AIPhone,
  },
];

const AUTO_ADVANCE_MS = 6000;

export default function Solutions() {
  const [active, setActive] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const timerRef = useRef(null);

  function activate(index) {
    setActive(index);
    setRunKey((k) => k + 1);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => activate((index + 1) % TABS.length), AUTO_ADVANCE_MS);
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => activate((active + 1) % TABS.length), AUTO_ADVANCE_MS);
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="solutions">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 34 }}>
          <div className="eyebrow">Har kunlik ish</div>
          <Reveal as="h2" className="section-title">
            Markazingizning eng ko'p vaqt yeydigan ishlari
          </Reveal>
          <Reveal as="p" className="section-sub">
            Uchtasini tanladik — davomat, moliya va AI tahlil. Qolgan hammasi ham xuddi shunday avtomatlashtirilgan.
          </Reveal>
        </div>

        <div className="tabs-row">
          {TABS.map((tab, i) => (
            <button
              key={tab.title}
              type="button"
              className={`tab-btn${active === i ? " active" : ""}`}
              onClick={() => activate(i)}
            >
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              {tab.label}
              <span className={`progress${active === i ? " run" : ""}`} key={active === i ? runKey : "idle"} />
            </button>
          ))}
        </div>

        {TABS.map((tab, i) => {
          const Phone = tab.Phone;
          return (
            <div className={`tab-panel${active === i ? " active" : ""}`} key={tab.title}>
              <div>
                <div className="tab-eyebrow">{tab.eyebrow}</div>
                <h3>{tab.title}</h3>
                <p>{tab.text}</p>
                <div className="tab-checks">
                  {tab.checks.map((check) => (
                    <span className="tab-check" key={check}>
                      <CheckIcon />
                      {check}
                    </span>
                  ))}
                </div>
              </div>
              <div className="tab-visual">
                <Phone />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
