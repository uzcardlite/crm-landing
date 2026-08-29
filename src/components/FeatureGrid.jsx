import Reveal from "./ui/Reveal";
import { handleTiltMove, handleTiltLeave } from "../lib/tilt";

const FEATURES = [
  {
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8.5 15l2 2 4-4" />
      </>
    ),
    title: "Davomat va ustoz ilovasi",
    text: "O'qituvchi telefonidan bir bosishda davomat, ota-onaga avtomatik xabar.",
  },
  {
    icon: (
      <>
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-1a7 7 0 0114 0v1" />
        <circle cx="17" cy="7" r="3" />
        <path d="M22 21v-1a6 6 0 00-4-5.65" />
      </>
    ),
    title: "To'liq CRM va lidlar voronkasi",
    text: "Lidlarni manbadan ro'yxatdan o'tishgacha kuzating, konversiya tahlilini oling.",
  },
  {
    icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />,
    title: "Moliya va to'lovlar",
    text: "To'lovlar, qarzdorlar, kassa va oylik hisob-kitob — real vaqtda.",
  },
  {
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
      </>
    ),
    title: "Excel hisobotlar",
    text: "O'quvchilar, moliya, davomat — har bir bo'lim uchun tayyor Excel eksport.",
  },
  {
    icon: <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />,
    title: "AI Tahlil",
    text: "Bazangizga tabiiy tilda savol bering, javobni jonli ma'lumotdan oling.",
  },
  {
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </>
    ),
    title: "Poster Studiyasi",
    text: "AI yordamida professional darajadagi marketing bannerlarini bir zumda yarating.",
  },
  {
    icon: (
      <>
        <path d="M8 2v3M16 2v3M4 8h16" />
        <rect x="4" y="4" width="16" height="18" rx="2" />
        <path d="M8 13h5M8 17h8" />
      </>
    ),
    title: "Shartnomalar",
    text: "Har bir o'quvchi uchun shartnoma, muddat va holatni avtomatik kuzating.",
  },
  {
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </>
    ),
    title: "Xodimlar (HR)",
    text: "Ishga qabul, ta'til so'rovlari va oylik maosh hisob-kitobi bir joyda.",
  },
  {
    icon: <path d="M20.8 4.6a5 5 0 00-7.1 0L12 6.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 21l8.8-9.3a5 5 0 000-7.1z" />,
    title: "Farzandim — ota-onalar ilovasi",
    text: "Ota-onalar farzandining davomati, bahosi va to'lovlarini o'zi kuzatadi.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 40 }}>
          <div className="eyebrow">Imkoniyatlar</div>
          <Reveal as="h2" className="section-title">
            O'quv markazni boshqarishning har bir jihati
          </Reveal>
          <Reveal as="p" className="section-sub">
            Davomatdan tortib AI yordamchisigacha — barchasi yagona tizimda.
          </Reveal>
        </div>
        <div className="grid9">
          {FEATURES.map((f) => (
            <Reveal
              as="div"
              className="feat-card"
              key={f.title}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
            >
              <div className="feat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {f.icon}
                </svg>
              </div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
