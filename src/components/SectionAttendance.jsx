import { Check, X, Clock } from "lucide-react";
import NumberedSectionLayout from "./ui/NumberedSectionLayout";
import ChatBubble from "./ui/ChatBubble";

const rows = [
  { name: "Falonchiyev Falonchi", status: "keldi" },
  { name: "Aliyeva Nodira", status: "keldi" },
  { name: "Karimov Jasur", status: "kechikdi" },
  { name: "Yusupova Malika", status: "kelmadi" },
];

const statusStyles = {
  keldi: { icon: Check, cls: "bg-success-bg text-success" },
  kelmadi: { icon: X, cls: "bg-danger-bg text-danger" },
  kechikdi: { icon: Clock, cls: "bg-accent-light/40 text-accent-dark" },
};

const buttons = [
  { key: "keldi", label: "Keldi", icon: Check },
  { key: "kelmadi", label: "Kelmadi", icon: X },
  { key: "kechikdi", label: "Kechikdi", icon: Clock },
];

function AttendanceScreen() {
  return (
    <div className="rounded-card border border-gray-100 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <span className="text-sm font-medium text-gray-900">Davomat — 17-iyul</span>
        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
          "Matematika-2A" guruhi
        </span>
      </div>
      <div className="divide-y divide-gray-50">
        {rows.map((row) => {
          const active = statusStyles[row.status];
          return (
            <div key={row.name} className="flex items-center justify-between px-4 py-3">
              <span className="text-sm text-gray-700">{row.name}</span>
              <div className="flex items-center gap-1.5">
                {buttons.map((b) => {
                  const isActive = b.key === row.status;
                  return (
                    <span
                      key={b.key}
                      className={`flex h-7 w-7 items-center justify-center rounded-btn ${
                        isActive ? active.cls : "bg-gray-50 text-gray-300"
                      }`}
                    >
                      <b.icon size={14} />
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SectionAttendance() {
  return (
    <NumberedSectionLayout
      index="1.0 — Davomat"
      title="Davomat — bir bosishda"
      description="O'qituvchi darsda status bosadi, tizim avtomatik hisoblaydi."
      tone="background"
      screen={
        <div className="flex flex-col gap-4">
          <AttendanceScreen />
          <ChatBubble message="Falonchiyev Falonchi bugun keldi ✅" />
        </div>
      }
    />
  );
}
