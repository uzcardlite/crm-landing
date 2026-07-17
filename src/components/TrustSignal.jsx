import { ShieldCheck, CreditCard, RotateCcw } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Ma'lumotlaringiz xavfsiz saqlanadi" },
  { icon: CreditCard, label: "Kartasiz, 14 kun bepul sinov" },
  { icon: RotateCcw, label: "Istalgan vaqtda bekor qilish mumkin" },
];

export default function TrustSignal() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-gray-500">
          Hali mijozlarimizning sharhlarini to'plamadik, shuning uchun soxta gap
          yozmaymiz — o'rniga sizga to'g'ridan-to'g'ri aytamiz:
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Icon size={16} className="text-accent-dark" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
