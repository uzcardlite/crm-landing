import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { useInView } from "../hooks/useInView";

// Real, opted-in tenants only — a superadmin turns this on per-centre from
// the Tenants panel once a logo is uploaded. Renders nothing while the list
// is empty rather than showing a placeholder row.
export default function Partners() {
  const [partners, setPartners] = useState([]);
  const [ref, inView] = useInView();

  useEffect(() => {
    let alive = true;
    fetch(`${API_URL}/api/v1/public/landing-partners`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => alive && setPartners(Array.isArray(data) ? data : []))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  if (partners.length === 0) return null;

  return (
    <section ref={ref} className="bg-white py-14">
      <div
        className={`mx-auto max-w-5xl px-4 text-center transition-all duration-700 ease-out sm:px-6 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <p className="text-sm font-medium uppercase tracking-wide text-gray-400">
          Bizga ishonib ishlayotgan o'quv markazlar
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo_url}
              alt={partner.name}
              title={partner.name}
              className="h-10 w-auto object-contain opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
