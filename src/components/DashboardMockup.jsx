import { Users, Wallet, CalendarCheck, AlertCircle } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import StatCard from "./ui/StatCard";

const chartData = [
  { m: 1, v: 28 },
  { m: 2, v: 32 },
  { m: 3, v: 30 },
  { m: 4, v: 38 },
  { m: 5, v: 41 },
  { m: 6, v: 47 },
];

export default function DashboardMockup() {
  return (
    <div className="rounded-card border border-navy-700 bg-navy-800/60 p-4 shadow-glow backdrop-blur sm:p-6">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard icon={Users} label="Faol o'quvchilar" value="428" trend={{ label: "+12%", positive: true }} dark />
        <StatCard icon={Wallet} label="Joriy oy tushumi" value="42 500 000" trend={{ label: "+8%", positive: true }} dark />
        <StatCard icon={CalendarCheck} label="Davomat foizi" value="94%" dark />
        <StatCard icon={AlertCircle} label="Qarzdorlar" value="12 ta" dark />
      </div>
      <div className="mt-4 rounded-btn border border-navy-700 bg-navy-900/60 p-3">
        <div className="mb-2 text-xs font-medium text-navy-text">
          So'nggi 6 oy — tushum
        </div>
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
              <Line
                type="monotone"
                dataKey="v"
                stroke="#F5A623"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
