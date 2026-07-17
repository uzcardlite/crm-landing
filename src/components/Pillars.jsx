import { Layers, Send, Zap } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "Bir tizimda hammasi",
    text: "Talabalar, guruhlar, to'lovlar va davomat — alohida jadvallar emas, bitta CRM'da.",
  },
  {
    icon: Send,
    title: "Ota-onaga avtomatik xabar",
    text: "Bola darsga kelganda yoki to'lov muddati yetganda, Telegram bot orqali ota-onaga o'zi xabar beradi.",
  },
  {
    icon: Zap,
    title: "Tez va ishonchli",
    text: "Zamonaviy infratuzilma asosida qurilgan, ma'lumotlaringiz xavfsiz saqlanadi.",
  },
];

export default function Pillars() {
  return (
    <section className="border-b border-gray-100 bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:grid-cols-3 sm:px-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <div className="flex h-10 w-10 items-center justify-center rounded-btn bg-accent-light/30 text-accent-dark">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-500">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
