import { Battery, Signal } from "lucide-react";

// Realistic phone chrome shared by every "here's the actual app" mockup on
// the site — notch, status bar, app header slot, home indicator. Built once
// so Davomat/Moliya/AI all look like screenshots of the same product.
export default function PhoneMock({ icon: Icon, title, subtitle, children }) {
  return (
    <div className="mx-auto w-[260px] rounded-[42px] bg-gradient-to-br from-gray-700 to-gray-900 p-3 shadow-[0_40px_70px_-24px_rgba(20,14,4,0.5)]">
      <div className="relative overflow-hidden rounded-[32px] bg-white">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-[74px] -translate-x-1/2 rounded-full bg-gray-900" />
        <div className="flex items-center justify-between px-5 pb-0.5 pt-3 text-xs font-semibold text-gray-900">
          <span>09:41</span>
          <span className="flex items-center gap-1">
            <Signal size={13} />
            <Battery size={15} />
          </span>
        </div>
        <div className="flex items-center gap-2.5 border-b border-gray-100 px-4 py-3">
          <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-btn bg-gradient-to-br from-accent to-accent-dark">
            <Icon size={15} className="text-accent-dark" />
          </div>
          <div>
            <div className="text-[13.5px] font-bold leading-tight text-gray-900">{title}</div>
            <div className="text-[10.5px] text-gray-400">{subtitle}</div>
          </div>
        </div>
        <div className="min-h-[190px] px-3.5 pb-3 pt-3">{children}</div>
        <div className="mx-auto mb-3 h-1 w-24 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
