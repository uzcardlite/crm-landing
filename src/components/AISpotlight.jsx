import { ImageIcon, ShieldCheck, Sparkles } from "lucide-react";
import { useInView } from "../hooks/useInView";

const POINTS = [
  {
    icon: Sparkles,
    title: "AI Tahlil",
    text: "Tabiiy tilda savol so'rang — bazangizdagi haqiqiy raqamlar bilan javob keladi.",
  },
  {
    icon: ImageIcon,
    title: "Poster Studiyasi",
    text: "O'z brendingiz ranglari bilan professional banner — daqiqalarda, dizaynerga muhtoj bo'lmasdan.",
  },
  {
    icon: ShieldCheck,
    title: "Xavfsizlik birinchi o'rinda",
    text: "AI faqat agregat va maskalangan ma'lumotni ko'radi — shaxsiy ma'lumot tashqariga chiqmaydi.",
  },
];

export default function AISpotlight() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-card bg-navy-900 p-8 sm:p-14"
          style={{
            backgroundImage:
              "radial-gradient(50% 60% at 85% 10%, rgba(245,166,35,0.3), transparent 70%), radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "auto, 22px 22px",
          }}
        >
          <div
            className={`grid grid-cols-1 items-center gap-10 transition-all duration-700 ease-out lg:grid-cols-2 lg:gap-16 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
                Farqimiz
                <span className="inline-flex items-center gap-1.5 text-success">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-pulsering rounded-full bg-success" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-success" />
                  </span>
                  Jonli ishlaydi
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                Haqiqiy ishlaydigan sun'iy intellekt
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-text">
                Ko'pchilik "AI" deb reklama qiladi. Bizniki — bazangizga ulangan, real javob
                beradigan, real banner chizadigan ishchi vosita.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {POINTS.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-3.5">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-btn border border-accent/25 bg-accent/15 text-accent">
                      <Icon size={17} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{title}</div>
                      <div className="text-sm text-navy-text">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#cta"
                className="mt-7 inline-flex items-center gap-2 rounded-btn bg-accent px-5 py-3 text-sm font-semibold text-accent-dark transition-colors hover:bg-accent-light"
              >
                <Sparkles size={15} />
                AI imkoniyatlarini sinab ko'rish
              </a>
            </div>

            <div className="overflow-hidden rounded-card border border-white/10 bg-black/40 shadow-glow">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-3.5 py-2.5">
                <span className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#E5645A]" />
                  <span className="h-2 w-2 rounded-full bg-[#E8B23D]" />
                  <span className="h-2 w-2 rounded-full bg-[#4FAE5C]" />
                </span>
                <span className="flex-1 rounded-btn bg-white/5 px-3 py-1 text-center text-[11px] text-navy-text">
                  app.ncrm.uz/copilot
                </span>
              </div>
              <div className="space-y-3 p-4">
                <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-accent px-3.5 py-2 text-[13px] font-semibold text-accent-dark">
                  Shu oy eng ko'p qarzi bor 10 ta ota-onani ko'rsat
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-btn bg-gradient-to-br from-accent to-accent-dark">
                    <Sparkles size={12} className="text-accent-dark" />
                  </span>
                  <div className="flex-1 space-y-2">
                    <div className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/5 px-3.5 py-2.5 text-[13px] leading-relaxed text-white">
                      Avgust oyi bo'yicha <b className="text-accent">14 ta oila</b> qarzdor,
                      jami <b className="text-accent">18 240 000 so'm</b>.
                    </div>
                    <div className="rounded-btn border border-white/10 bg-white/5 p-1.5">
                      {[
                        { name: "Dilnoza Muhitdinova", initials: "DM", color: "#C4432B", amount: "2 400 000" },
                        { name: "Sardor Rahimov", initials: "SR", color: "#B9740F", amount: "2 100 000" },
                      ].map((row) => (
                        <div key={row.name} className="flex items-center gap-2.5 rounded-btn px-2 py-1.5">
                          <span
                            className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                            style={{ backgroundColor: row.color }}
                          >
                            {row.initials}
                          </span>
                          <span className="flex-1 truncate text-xs font-semibold text-white">{row.name}</span>
                          <span className="text-xs font-bold text-[#F0938C]">{row.amount}</span>
                        </div>
                      ))}
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
