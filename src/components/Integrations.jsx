import { FileSpreadsheet, ImageIcon, MessageCircle, ScanFace, Send, Sparkles } from "lucide-react";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./ui/SectionHeading";

const ITEMS = [
  {
    icon: Sparkles,
    name: "Google Gemini AI",
    text: "AI Tahlil va Poster Studiyasini ishga tushiradi",
    wide: true,
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
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, name, text, wide }, i) => (
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
              <h3 className="mt-3.5 text-sm font-semibold text-gray-900">{name}</h3>
              <p className="mt-1 text-sm text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
