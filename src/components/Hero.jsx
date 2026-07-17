import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            O'quv markazingiz — daftar emas, raqamlarda
          </h1>
          <p className="mt-5 text-lg text-navy-text">
            Davomat, to'lov va ota-onalar bilan aloqa — bitta tizimda, avtomatik.
          </p>
          <div className="mt-8 flex flex-col items-center gap-2">
            <a
              href="#cta"
              className="rounded-btn bg-accent px-6 py-3 text-base font-medium text-accent-dark shadow-glow transition-colors hover:bg-accent-light"
            >
              14 kun bepul boshlash
            </a>
            <span className="text-sm text-navy-text">Karta kerak emas</span>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
