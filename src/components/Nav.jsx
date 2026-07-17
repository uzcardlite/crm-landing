import { LOGIN_URL } from "../config";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src="/logo.svg" alt="ncrm" className="h-8 w-8 rounded-btn" />
          <span className="text-lg font-semibold text-white">ncrm</span>
        </a>
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={LOGIN_URL}
            className="text-sm font-medium text-navy-text transition-colors hover:text-white"
          >
            Kirish
          </a>
          <a
            href="#cta"
            className="rounded-btn bg-accent px-4 py-2 text-sm font-medium text-accent-dark transition-colors hover:bg-accent-light"
          >
            14 kun bepul
          </a>
        </div>
      </div>
    </header>
  );
}
