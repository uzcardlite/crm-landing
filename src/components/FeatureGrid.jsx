import { useRef } from "react";
import {
  CalendarCheck,
  Contact,
  FileSpreadsheet,
  FileText,
  ImageIcon,
  Sparkles,
  UserCog,
  UsersRound,
  Wallet,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const FEATURES = [
  { icon: CalendarCheck, title: "Davomat va ustoz ilovasi", text: "O'qituvchi telefonidan bir bosishda davomat, ota-onaga avtomatik xabar." },
  { icon: UsersRound, title: "To'liq CRM va lidlar voronkasi", text: "Lidlarni manbadan ro'yxatdan o'tishgacha kuzating, konversiya tahlilini oling." },
  { icon: Wallet, title: "Moliya va to'lovlar", text: "To'lovlar, qarzdorlar, kassa va oylik hisob-kitob — real vaqtda." },
  { icon: FileSpreadsheet, title: "Excel hisobotlar", text: "O'quvchilar, moliya, davomat — har bir bo'lim uchun tayyor Excel eksport." },
  { icon: Sparkles, title: "AI Tahlil", text: "Bazangizga tabiiy tilda savol bering, javobni jonli ma'lumotdan oling." },
  { icon: ImageIcon, title: "Poster Studiyasi", text: "AI yordamida professional darajadagi marketing bannerlarini bir zumda yarating." },
  { icon: FileText, title: "Shartnomalar", text: "Har bir o'quvchi uchun shartnoma, muddat va holatni avtomatik kuzating." },
  { icon: UserCog, title: "Xodimlar (HR)", text: "Ishga qabul, ta'til so'rovlari va oylik maosh hisob-kitobi bir joyda." },
  { icon: Contact, title: "Farzandim — ota-onalar ilovasi", text: "Ota-onalar farzandining davomati, bahosi va to'lovlarini o'zi kuzatadi." },
];

const MAX_TILT = 8;

function FeatureCard({ icon: Icon, title, text, index, inView }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * MAX_TILT * 2;
    const rotateX = (0.5 - py) * MAX_TILT * 2;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  }

  function handleMouseLeave() {
    if (cardRef.current) cardRef.current.style.transform = "";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${index * 50}ms` }}
      className={`rounded-card border border-gray-100 bg-white p-6 shadow-card transition-all duration-500 hover:shadow-glow ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-btn bg-accent-light/30 text-accent-dark">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-[15.5px] font-semibold text-gray-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{text}</p>
    </div>
  );
}

export default function FeatureGrid() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="border-b border-gray-100 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-sm font-semibold text-accent-dark">Imkoniyatlar</div>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            O'quv markazni boshqarishning har bir jihati
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Davomatdan tortib AI yordamchisigacha — barchasi yagona tizimda.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
