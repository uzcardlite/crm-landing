import SectionHeading from "./ui/SectionHeading";
import { durations, tiers, premiumTier } from "../data/pricing";
import { TELEGRAM_USERNAME } from "../config";

function formatSum(n) {
  return n.toLocaleString("ru-RU");
}

export default function Pricing() {
  return (
    <section id="narxlar" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          title="Narxlar"
          description={
            <>
              Barcha tariflarda{" "}
              <span className="font-semibold text-accent-dark">14 kun bepul sinov</span> — karta
              ma'lumotisiz
            </>
          }
        />

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] overflow-hidden rounded-card border border-gray-100 bg-white text-sm shadow-card">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-4 text-left font-semibold">Muddat</th>
                {tiers.map((tier) => (
                  <th key={tier.name} className="px-5 py-4 text-center">
                    <div className="font-semibold">{tier.name}</div>
                    <div className="mt-0.5 text-xs font-normal text-navy-text">{tier.range}</div>
                  </th>
                ))}
                <th className="px-5 py-4 text-center">
                  <div className="font-semibold">{premiumTier.name}</div>
                  <div className="mt-0.5 text-xs font-normal text-navy-text">{premiumTier.range}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {durations.map((d) => (
                <tr
                  key={d.months}
                  className={`border-b border-gray-50 last:border-0 ${
                    d.popular ? "bg-accent-light/20" : ""
                  }`}
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 font-medium text-gray-900">
                      {d.months} oy
                      {d.popular && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent-light/40 px-2 py-0.5 text-xs font-medium text-accent-dark">
                          ★ Ommabop
                        </span>
                      )}
                    </div>
                  </td>
                  {tiers.map((tier) => {
                    const price = tier.prices[d.months];
                    const hasDiscount = price.original !== price.total;
                    return (
                      <td key={tier.name} className="px-5 py-4 text-center">
                        <div className="font-semibold text-gray-900">{formatSum(price.total)}</div>
                        {hasDiscount && (
                          <>
                            <div className="text-xs text-gray-400 line-through">
                              {formatSum(price.original)}
                            </div>
                            <span className="mt-1 inline-block rounded-full bg-accent-light/40 px-1.5 py-0.5 text-[10px] font-medium text-accent-dark">
                              -{d.discount}%
                            </span>
                          </>
                        )}
                      </td>
                    );
                  })}
                  <td className="px-5 py-4 text-center">
                    <a
                      href={`https://t.me/${TELEGRAM_USERNAME}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent-dark hover:underline"
                    >
                      Bog'laning
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Barcha narxlar so'mda. Uzoq muddatga obuna bo'lsangiz,{" "}
          <span className="font-semibold text-gray-700">chegirma katta bo'ladi</span>.
        </p>
      </div>
    </section>
  );
}
