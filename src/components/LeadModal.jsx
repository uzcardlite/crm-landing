import { useEffect, useRef, useState } from "react";
import { API_URL, TELEGRAM_USERNAME } from "../config";
import { useLeadModal } from "../context/LeadModalContext";

const CITIES = ["Toshkent", "Samarqand", "Buxoro", "Andijon", "Boshqa"];

// Basic Uzbek phone plausibility check: local "901234567" (9 digits)
// or with country code "998901234567" (12 digits, starts with 998).
function isPlausiblePhone(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 9 || (digits.length === 12 && digits.startsWith("998"));
}

function openTelegramFallback({ ism, telefon, markaz }) {
  const message = [
    "Yangi murojaat (ncrm landing):",
    `Ism: ${ism}`,
    `Telefon: ${telefon}`,
    `O'quv markazi: ${markaz}`,
  ].join("\n");
  const url = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function LeadModal() {
  const { isOpen, closeLead } = useLeadModal();
  const [step, setStep] = useState(1);
  const [ism, setIsm] = useState("");
  const [telefon, setTelefon] = useState("");
  const [markaz, setMarkaz] = useState("");
  const [shahar, setShahar] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [errorMessage, setErrorMessage] = useState("");
  const honeypotRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) {
      // reset after the close transition would run, mirroring the mockup's closeLead()
      const t = setTimeout(() => {
        setStep(1);
        setIsm("");
        setTelefon("");
        setMarkaz("");
        setShahar("");
        setStatus("idle");
        setErrorMessage("");
      }, 200);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [isOpen]);

  function goStep1Next() {
    if (!ism.trim() || !telefon.trim()) {
      setErrorMessage("Ism va telefon raqamini kiriting.");
      return;
    }
    if (!isPlausiblePhone(telefon)) {
      setErrorMessage("Telefon raqamini to'g'ri kiriting (masalan, +998 90 123 45 67).");
      return;
    }
    setErrorMessage("");
    setStep(2);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    if (!markaz.trim()) {
      setErrorMessage("O'quv markazi nomini kiriting.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`${API_URL}/api/v1/leads/public`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: ism,
          phone: telefon,
          markaz_nomi: shahar ? `${markaz} (${shahar})` : markaz,
          website: honeypotRef.current?.value || "",
        }),
      });

      if (res.status === 201) {
        setStatus("success");
        return;
      }

      if (res.status === 422 || res.status === 429) {
        const data = await res.json().catch(() => null);
        const detail =
          typeof data?.detail === "string"
            ? data.detail
            : res.status === 429
              ? "Juda ko'p urinish. Birozdan so'ng qayta urinib ko'ring."
              : "Ma'lumotlarni tekshirib, qayta yuboring.";
        setErrorMessage(detail);
        setStatus("idle");
        return;
      }

      openTelegramFallback({ ism, telefon, markaz });
      setErrorMessage(
        "Serverga ulanib bo'lmadi. Xabaringizni Telegram orqali yubordik — u yerda ham tasdiqlab yuboring.",
      );
      setStatus("idle");
    } catch {
      openTelegramFallback({ ism, telefon, markaz });
      setErrorMessage(
        "Internet aloqasida muammo bo'ldi. Xabaringizni Telegram orqali yubordik — u yerda ham tasdiqlab yuboring.",
      );
      setStatus("idle");
    }
  }

  return (
    <div
      className={`lead-overlay${isOpen ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLead();
      }}
    >
      <div className="lead-modal">
        <button className="lead-close" onClick={closeLead} type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="lead-side">
          <div className="blob lb1" />
          <div className="blob lb2" />
          <div className="lead-side-content">
            <div className="mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />
              </svg>
            </div>
            <h3>Tizimlashtirilgan o'quv markaziga bir necha qadam qoldi</h3>
            <p className="sub">7 kun bepul — karta raqami shart emas. Jamoamiz o'zi ulab, sozlab beradi.</p>
            <div className="lead-perks">
              <div className="lead-perk">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />
                  </svg>
                </span>
                AI Tahlil va Poster Studiyasi bepul
              </div>
              <div className="lead-perk">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
                1 ish kuni ichida ishga tushirib beramiz
              </div>
              <div className="lead-perk">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20.8 4.6a5 5 0 00-7.1 0L12 6.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 21l8.8-9.3a5 5 0 000-7.1z" />
                  </svg>
                </span>
                Shaxsiy tizim muhandisi biriktiramiz
              </div>
            </div>
          </div>
        </div>

        <div className="lead-form-side">
          {status !== "success" ? (
            <>
              <div className="lead-steps">
                <div className={`lead-step-dot${step === 1 ? " active" : ""}${step > 1 ? " done" : ""}`}>
                  <div className="fill" />
                </div>
                <div className={`lead-step-dot${step === 2 ? " active" : ""}`}>
                  <div className="fill" />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className={`lead-step${step === 1 ? " active" : ""}`}>
                  <h3>Siz bilan qanday bog'lanamiz?</h3>
                  <p className="sub">Bir necha soniya — keyingi qadamda markazingiz haqida so'raymiz.</p>
                  <div className="lead-field">
                    <label>Ism-familiyangiz</label>
                    <input
                      required
                      placeholder="Ism-familiyangizni kiriting"
                      value={ism}
                      onChange={(e) => setIsm(e.target.value)}
                    />
                  </div>
                  <div className="lead-field">
                    <label>Telefon raqamingiz</label>
                    <input
                      required
                      type="tel"
                      placeholder="+998 __ ___ __ __"
                      value={telefon}
                      onChange={(e) => setTelefon(e.target.value)}
                    />
                  </div>
                  {step === 1 && errorMessage ? <p className="lead-error">{errorMessage}</p> : null}
                  <div className="lead-nav">
                    <button className="lead-btn next" type="button" onClick={goStep1Next}>
                      Davom etish
                    </button>
                  </div>
                </div>

                <div className={`lead-step${step === 2 ? " active" : ""}`}>
                  <h3>O'quv markazingiz haqida</h3>
                  <p className="sub">Tizimni aynan sizga moslab tayyorlaymiz.</p>
                  <div className="lead-field">
                    <label>O'quv markazi nomi</label>
                    <input
                      required
                      placeholder="O'quv markazingiz nomini kiriting"
                      value={markaz}
                      onChange={(e) => setMarkaz(e.target.value)}
                    />
                  </div>
                  <div className="lead-field">
                    <label>Shahar</label>
                    <select value={shahar} onChange={(e) => setShahar(e.target.value)}>
                      <option value="">Tanlang...</option>
                      {CITIES.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Honeypot: hidden from humans, must stay empty */}
                  <input
                    ref={honeypotRef}
                    type="text"
                    name="website"
                    defaultValue=""
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  />
                  {step === 2 && errorMessage ? <p className="lead-error">{errorMessage}</p> : null}
                  <div className="lead-nav">
                    <button className="lead-btn back" type="button" onClick={() => setStep(1)}>
                      Orqaga
                    </button>
                    <button className="lead-btn next" type="submit" disabled={status === "submitting"}>
                      {status === "submitting" ? "Yuborilmoqda..." : "Ariza yuborish"}
                    </button>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="lead-success show">
              <div className="check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 style={{ textAlign: "center" }}>Arizangiz qabul qilindi!</h3>
              <p className="sub" style={{ textAlign: "center" }}>
                Tez orada shaxsiy tizim muhandisimiz siz bilan bog'lanadi.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
