import { useEffect, useState } from "react";
import { API_URL } from "../config";
import Reveal from "./ui/Reveal";

// Real, opted-in tenants only — a superadmin turns this on per-centre from
// the Tenants panel once a logo is uploaded. Renders nothing while the list
// is empty rather than showing placeholder tiles.
export default function Partners() {
  const [partners, setPartners] = useState([]);

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

  // Repeat the list until one half is wider than the container, then put two
  // halves back-to-back so the -50% marquee animation loops seamlessly even
  // with only a couple of partners.
  const MIN_PER_HALF = 8;
  const reps = Math.ceil(MIN_PER_HALF / partners.length);
  const half = Array.from({ length: reps }, () => partners).flat();
  const track = [...half, ...half];

  return (
    <section id="partners" style={{ paddingTop: 36, paddingBottom: 36 }}>
      <div className="wrap">
        <Reveal as="p" className="partners-caption">
          Milliy CRM orqali dars jarayonlarini boshqarayotgan <b>o'quv markazlar</b>
        </Reveal>
        <div className="partners-marquee">
          <div className="partners-track" style={{ animationDuration: `${half.length * 4}s` }}>
            {track.map((partner, i) => (
              <div className="partner-tile" key={`${partner.name}-${i}`} aria-hidden={i >= partners.length || undefined}>
                <img className="mono" src={partner.logo_url} alt="" />
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="partner-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          Superadmin panelidan istalgan payt yangi hamkor logotipini qo'shish mumkin
        </div>
      </div>
    </section>
  );
}
