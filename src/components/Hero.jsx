import { CalendarCheck, Sparkles, Wallet } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

const CHIPS = [
  { icon: Sparkles, label: "AI Tahlil va Poster Studiyasi" },
  { icon: CalendarCheck, label: "Bir bosishda davomat" },
  { icon: Wallet, label: "Avtomatik qarzdorlik nazorati" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 animate-blobfloat rounded-full bg-accent/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-24 h-[300px] w-[300px] animate-blobfloat rounded-full bg-sky-400/10 blur-[100px] [animation-delay:-6s]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            O'quv markazingiz uchun{" "}
            <span className="text-accent">AI bilan boshqariladigan</span> tizim
          </h1>
          <p className="mt-5 text-lg text-navy-text">
            Davomat, to'lov va ota-onalar bilan aloqa — bitta tizimda, avtomatik. Sun'iy
            intellekt savollaringizga javob beradi, bannerlaringizni chizadi.
          </p>
          <div className="mt-8 flex flex-col items-center gap-2">
            <a
              href="#cta"
              className="rounded-btn bg-accent px-6 py-3 text-base font-medium text-accent-dark shadow-glow transition-colors hover:bg-accent-light"
            >
              14 kun bepul boshlash
            </a>
            <span className="text-sm text-navy-text">Karta kerak emas</span>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {CHIPS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-navy-text"
              >
                <Icon size={13} className="text-accent" />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
