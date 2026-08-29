import { useEffect, useState } from "react";
import { Calendar, Check, Clock, Sparkles, Wallet, X } from "lucide-react";
import PhoneMock from "./ui/PhoneMock";
import { useInView } from "../hooks/useInView";

const TABS = [
  {
    key: "davomat",
    label: "Davomat",
    eyebrow: "Ustoz ilovasi orqali",
    title: "Bir bosishda, ota-onaga darhol xabar",
    text: "O'qituvchi telefonidagi ilovada guruhni ochadi va har bir o'quvchi qatorida \"Keldi / Kelmadi / Kechikdi\"ni bosadi. Dars kelmagan o'quvchining ota-onasiga Telegram orqali xabar shu zahoti yetib boradi.",
    checks: ["Bir bosishda belgilash", "Avtomatik Telegram xabar", "Oylik davomat hisoboti"],
    phoneIcon: Calendar,
    phoneTitle: "Ingliz tili · 9-guruh",
    phoneSubtitle: "Bugun, 18:00",
    rows: [
      { name: "Davronbek Shakarov", initials: "DS", color: "#B9740F", status: "ok", label: "Keldi" },
      { name: "Dilshoda Zokirova", initials: "DZ", color: "#3D5FB0", status: "ok", label: "Keldi" },
      { name: "Sardor Rahimov", initials: "SR", color: "#3D8A5E", status: "warn", label: "Kechikdi" },
      { name: "Aziza Karimova", initials: "AK", color: "#B0598A", status: "bad", label: "Kelmadi" },
    ],
  },
  {
    key: "moliya",
    label: "Moliya",
    eyebrow: "To'lovlar va qarzdorlik",
    title: "Kim to'lagan, kim qarzdor — bir qarashda",
    text: "Har bir to'lov, xarajat va oylik hisob-kitob bitta joyda. Qarzdorlik oyma-oy avtomatik hisoblanadi, ota-onalar esa o'z farzandining to'lov holatini o'zi kuzatadi.",
    checks: ["Avtomatik qarzdorlik hisobi", "Ota-ona o'z holatini ko'radi", "Excel hisobot bir bosishda"],
    phoneIcon: Wallet,
    phoneTitle: "Moliya",
    phoneSubtitle: "Avgust 2026",
    summary: { label: "Jami tushum (oy)", value: "18,4 mln", trend: "+12%" },
    rows: [
      { name: "Dilnoza Muhitdinova", initials: "DM", color: "#C4432B", sub: "2 oydan beri", amount: "2 400 000" },
      { name: "Sardor Rahimov", initials: "SR", color: "#B9740F", sub: "1 oydan beri", amount: "2 100 000" },
    ],
  },
  {
    key: "ai",
    label: "AI Tahlil",
    eyebrow: "Sun'iy intellekt",
    title: "Bazangiz bilan tabiiy tilda gaplashing",
    text: "\"Shu oy eng ko'p qarzi bor 10 ta ota-onani ko'rsat\" yoki \"Bugun kim darsga kelmadi?\" deb yozing — AI bazangizdan real ma'lumotni topib, tushunarli javob qaytaradi.",
    checks: ["Tabiiy tildagi savollar", "Maskalangan, xavfsiz ma'lumot", "Jadval va grafik bilan javob"],
    phoneIcon: Sparkles,
    phoneTitle: "AI Tahlil",
    phoneSubtitle: "Bazangizga ulangan",
    chat: [
      { from: "user", text: "Bugun kim kelmadi?" },
      { from: "ai", text: "Bugun 3 ta o'quvchi darsga kelmagan: Aziza K., Jasur T., Nilufar Y." },
      { from: "user", text: "Ularga eslatma yubor" },
      { from: "ai", typing: true },
    ],
  },
];

const STATUS_STYLE = {
  ok: { bg: "bg-success-bg", text: "text-success", icon: Check },
  warn: { bg: "bg-accent-light/60", text: "text-accent-dark", icon: Clock },
  bad: { bg: "bg-danger-bg", text: "text-danger", icon: X },
};

function Avatar({ initials, color }) {
  return (
    <span
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
      style={{ backgroundColor: color }}
    >
      {initials}
    </span>
  );
}

function PhoneScreen({ tab }) {
  if (tab.key === "davomat") {
    return (
      <div className="flex flex-col gap-1">
        {tab.rows.map((row) => {
          const style = STATUS_STYLE[row.status];
          const StatusIcon = style.icon;
          return (
            <div key={row.name} className="flex items-center gap-2.5 rounded-btn px-1.5 py-2">
              <Avatar initials={row.initials} color={row.color} />
              <span className="flex-1 truncate text-[12.5px] font-semibold text-gray-900">{row.name}</span>
              <span className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold ${style.bg} ${style.text}`}>
                <StatusIcon size={10} />
                {row.label}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  if (tab.key === "moliya") {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-end justify-between rounded-btn bg-gradient-to-br from-accent to-accent-dark p-3.5 text-accent-dark">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wide opacity-75">{tab.summary.label}</div>
            <div className="mt-0.5 text-[21px] font-extrabold">{tab.summary.value}</div>
          </div>
          <span className="rounded-full bg-white/35 px-2 py-0.5 text-[10.5px] font-bold">{tab.summary.trend}</span>
        </div>
        <div className="px-1 text-[10px] font-bold uppercase tracking-wide text-gray-400">Bu oy qarzdorlar</div>
        {tab.rows.map((row) => (
          <div key={row.name} className="flex items-center gap-2.5 rounded-btn px-1.5 py-1.5">
            <Avatar initials={row.initials} color={row.color} />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[12.5px] font-semibold text-gray-900">{row.name}</div>
              <div className="text-[10px] text-gray-400">{row.sub}</div>
            </div>
            <span className="flex-shrink-0 text-[12.5px] font-extrabold text-gray-900">{row.amount}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      {tab.chat.map((msg, i) =>
        msg.from === "user" ? (
          <div key={i} className="ml-auto max-w-[84%] rounded-2xl rounded-tr-sm bg-accent px-3.5 py-2 text-[12px] font-semibold text-accent-dark">
            {msg.text}
          </div>
        ) : (
          <div key={i} className="flex max-w-[94%] items-start gap-2">
            <span className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-btn bg-gradient-to-br from-accent to-accent-dark">
              <Sparkles size={11} className="text-accent-dark" />
            </span>
            {msg.typing ? (
              <span className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-gray-100 px-3.5 py-3">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-[5px] w-[5px] animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </span>
            ) : (
              <span className="rounded-2xl rounded-tl-sm bg-gray-100 px-3.5 py-2 text-[11.5px] leading-snug text-gray-700">
                {msg.text}
              </span>
            )}
          </div>
        ),
      )}
    </div>
  );
}

export default function Solutions() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % TABS.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const tab = TABS[active];

  return (
    <section ref={ref} className="border-b border-gray-100 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`text-center transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="text-sm font-semibold text-accent-dark">Har kunlik ish</div>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Markazingizning eng ko'p vaqt yeydigan ishlari
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TABS.map((t, i) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                i === active
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              }`}
            >
              {t.label}
              {i === active && (
                <span className="absolute bottom-0 left-0 h-[2.5px] animate-tabprogress bg-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 rounded-card border border-gray-100 bg-background p-6 shadow-card sm:p-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-accent-dark">{tab.eyebrow}</div>
            <h3 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">{tab.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-500">{tab.text}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tab.checks.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-success-bg px-3 py-1.5 text-xs font-semibold text-success"
                >
                  <Check size={12} />
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div>
            <PhoneMock icon={tab.phoneIcon} title={tab.phoneTitle} subtitle={tab.phoneSubtitle}>
              <PhoneScreen tab={tab} />
            </PhoneMock>
          </div>
        </div>
      </div>
    </section>
  );
}
