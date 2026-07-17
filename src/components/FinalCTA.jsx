import LeadForm from "./LeadForm";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[110px]"
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              O'quv markazingiz bugun boshlasin
            </h2>
            <p className="mt-4 text-navy-text">
              14 kun bepul sinab ko'ring — karta kerak emas, xohlagan vaqtda bekor qiling.
            </p>
          </div>
          <div className="rounded-card bg-white p-6 shadow-glow sm:p-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
