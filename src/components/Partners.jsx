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

  // Two copies back-to-back so the -50% marquee animation loops seamlessly —
  // only worth it once there are enough tiles to actually loop.
  const useMarquee = partners.length >= 6;
  const track = useMarquee ? [...partners, ...partners] : partners;

  return (
    <section id="partners" style={{ paddingTop: 36, paddingBottom: 36 }}>
      <div className="wrap">
        <Reveal as="p" className="partners-caption">
          ncrm orqali dars jarayonlarini boshqarayotgan <b>o'quv markazlar</b>
        </Reveal>
        {useMarquee ? (
          <div className="partners-marquee">
            <div className="partners-track">
              {track.map((partner, i) => (
                <div className="partner-tile" key={`${partner.name}-${i}`}>
                  <img className="mono" src={partner.logo_url} alt="" />
                  <span>{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="partners-track" style={{ flexWrap: "wrap", justifyContent: "center", animation: "none" }}>
            {track.map((partner) => (
              <div className="partner-tile" key={partner.name}>
                <img className="mono" src={partner.logo_url} alt="" />
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        )}
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
