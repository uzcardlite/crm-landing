import { FileSpreadsheet, ImageIcon, MessageCircle, ScanFace, Send, Sparkles } from "lucide-react";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./ui/SectionHeading";

const ITEMS = [
  {
    icon: Sparkles,
    name: "Google Gemini AI",
    text: "AI Tahlil va Poster Studiyasini ishga tushiradi — bitta AI kaliti orqali.",
    wide: true,
    badge: "Faol",
  },
  { icon: Send, name: "Telegram bot", text: "Ota-onaga avtomatik xabar" },
  { icon: MessageCircle, name: "SMS xabarnoma", text: "Eskiz orqali eslatmalar" },
  { icon: FileSpreadsheet, name: "Excel eksport", text: "Har qanday hisobot bir bosishda" },
  { icon: ImageIcon, name: "Cloudinary", text: "Rasm va fayllarni xavfsiz saqlash" },
  { icon: ScanFace, name: "Turniket qurilmalari", text: "Kirish-chiqishni avtomatik qayd etadi" },
];

export default function Integrations() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="border-b border-gray-100 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Integratsiyalar"
          title="Allaqachon ulangan xizmatlar"
          description="Xabar yuborishdan sun'iy intellektgacha — ncrm yadrosi bilan tayyor holda ishlaydi."
        />

        <div
          className={`mt-8 flex items-center justify-center gap-3 transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-gray-200" />
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold text-gray-600 shadow-card">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulsering rounded-full bg-success" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            ncrm yadrosi
          </span>
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-gray-200" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, name, text, wide, badge }, i) => (
            <div
              key={name}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`rounded-card border border-gray-100 bg-white p-5 shadow-card transition-all duration-500 hover:-translate-y-0.5 hover:shadow-glow ${
                wide ? "sm:col-span-2" : ""
              } ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-btn bg-accent-light/30 text-accent-dark">
                <Icon size={19} />
              </div>
              <h3 className="mt-3.5 flex items-center gap-2 text-sm font-semibold text-gray-900">
                {name}
                {badge && (
                  <span className="rounded-full bg-success-bg px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wide text-success">
                    {badge}
                  </span>
                )}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
