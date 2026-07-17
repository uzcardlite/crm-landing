import { useState } from "react";
import { TELEGRAM_USERNAME } from "../config";

export default function LeadForm() {
  const [ism, setIsm] = useState("");
  const [telefon, setTelefon] = useState("");
  const [markaz, setMarkaz] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const message = [
      "Yangi murojaat (ncrm landing):",
      `Ism: ${ism}`,
      `Telefon: ${telefon}`,
      `O'quv markazi: ${markaz}`,
    ].join("\n");
    const url = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
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
      <button
        type="submit"
        className="w-full rounded-btn bg-accent px-4 py-2.5 text-sm font-medium text-accent-dark transition-colors hover:bg-accent-light"
      >
        14 kun bepul boshlash
      </button>
      <p className="text-center text-xs text-gray-400">
        Yuborilgach Telegram ochiladi — xabarni tasdiqlab yuboring.
      </p>
    </form>
  );
}
