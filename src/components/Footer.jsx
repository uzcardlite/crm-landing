import { CONTACT_PHONE, CONTACT_PHONE_TEL, LOGIN_URL, TELEGRAM_USERNAME } from "../config";

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="ncrm" className="h-7 w-7 rounded-btn" />
          <div>
            <div className="text-sm font-semibold text-white">ncrm</div>
            <div className="text-xs text-navy-text">O'quv markazlar uchun CRM</div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a href={`tel:${CONTACT_PHONE_TEL}`} className="text-navy-text hover:text-white">
            {CONTACT_PHONE}
          </a>
          <a href={LOGIN_URL} className="text-navy-text hover:text-white">
            Kirish
          </a>
          <a
            href={`https://t.me/${TELEGRAM_USERNAME}`}
            className="text-navy-text hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
