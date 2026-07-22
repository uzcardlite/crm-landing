import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { API_URL, TELEGRAM_USERNAME } from "../config";

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

export default function LeadForm() {
  const [ism, setIsm] = useState("");
  const [telefon, setTelefon] = useState("");
  const [markaz, setMarkaz] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [errorMessage, setErrorMessage] = useState("");
  // Read through a ref rather than React state: a bot usually sets .value
  // directly on the DOM node, which never fires onChange, so a state-backed
  // honeypot would always submit an empty string and catch nothing.
  const honeypotRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    if (!ism.trim() || !telefon.trim() || !markaz.trim()) {
      setErrorMessage("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }
    if (!isPlausiblePhone(telefon)) {
      setErrorMessage("Telefon raqamini to'g'ri kiriting (masalan, +998 90 123 45 67).");
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
          markaz_nomi: markaz,
          website: honeypotRef.current?.value || "", // honeypot, empty for a real visitor
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

      // Any other server error — fall back to Telegram so the lead isn't lost.
      openTelegramFallback({ ism, telefon, markaz });
      setErrorMessage(
        "Serverga ulanib bo'lmadi. Xabaringizni Telegram orqali yubordik — u yerda ham tasdiqlab yuboring.",
      );
      setStatus("idle");
    } catch {
      // Network error — same fallback.
      openTelegramFallback({ ism, telefon, markaz });
      setErrorMessage(
        "Internet aloqasida muammo bo'ldi. Xabaringizni Telegram orqali yubordik — u yerda ham tasdiqlab yuboring.",
      );
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <CheckCircle2 className="h-10 w-10 text-success" />
        <p className="text-sm font-medium text-navy-900">
          Murojaatingiz qabul qilindi! Tez orada siz bilan bog'lanamiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        required
        placeholder="Ismingiz"
        value={ism}
        onChange={(e) => setIsm(e.target.value)}
        className="w-full rounded-btn border border-gray-300 px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
      />
      <input
        type="tel"
        required
        placeholder="Telefon raqamingiz"
        value={telefon}
        onChange={(e) => setTelefon(e.target.value)}
        className="w-full rounded-btn border border-gray-300 px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
      />
      <input
        type="text"
        required
        placeholder="O'quv markazi nomi"
        value={markaz}
        onChange={(e) => setMarkaz(e.target.value)}
        className="w-full rounded-btn border border-gray-300 px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
      />
      {/* Honeypot field: hidden from humans and assistive tech, must stay empty */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        defaultValue=""
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {errorMessage ? (
        <p className="rounded-btn bg-danger-bg px-3 py-2 text-xs text-danger">{errorMessage}</p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-btn bg-accent px-4 py-2.5 text-sm font-medium text-accent-dark transition-colors hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Yuborilmoqda..." : "14 kun bepul boshlash"}
      </button>
      <p className="text-center text-xs text-gray-400">
        Ma'lumotlaringiz to'g'ridan-to'g'ri bizga yuboriladi.
      </p>
    </form>
  );
}
