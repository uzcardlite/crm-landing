import { Check } from "lucide-react";

export default function ChatBubble({ message, time = "14:32", buttons }) {
  return (
    <div className="w-full max-w-xs rounded-card rounded-tl-sm border border-gray-100 bg-white p-3 shadow-card">
      <div className="mb-1.5 flex items-center gap-2">
        <img src="/logo.svg" alt="" className="h-5 w-5 rounded-[4px]" />
        <span className="text-xs font-medium text-gray-500">ncrm bot</span>
      </div>
      <p className="text-sm leading-snug text-gray-900">{message}</p>
      {buttons && (
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {buttons.map((label) => (
            <span
              key={label}
              className="rounded-btn border border-gray-200 bg-gray-50 px-2 py-1.5 text-center text-xs font-medium text-accent-dark"
            >
              {label}
            </span>
          ))}
        </div>
      )}
      <div className="mt-1.5 flex items-center justify-end gap-1">
        <span className="text-[10px] text-gray-400">{time}</span>
        <Check size={12} className="text-accent" />
      </div>
    </div>
  );
}
