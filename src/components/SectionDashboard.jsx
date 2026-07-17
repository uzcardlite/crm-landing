import { Users, Wallet, TrendingDown, CalendarCheck } from "lucide-react";
import { LineChart, Line, CartesianGrid, ResponsiveContainer } from "recharts";
import NumberedSectionLayout from "./ui/NumberedSectionLayout";
import StatCard from "./ui/StatCard";

const chartData = [
  { m: "Fev", income: 32, expense: 18 },
  { m: "Mar", income: 35, expense: 19 },
  { m: "Apr", income: 30, expense: 20 },
  { m: "May", income: 38, expense: 21 },
  { m: "Iyun", income: 41, expense: 22 },
  { m: "Iyul", income: 47, expense: 23 },
];

function DashboardScreen() {
  return (
    <div className="rounded-card border border-gray-100 bg-white p-4 shadow-card sm:p-5">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard icon={Users} label="Faol o'quvchilar" value="428" trend={{ label: "+12%", positive: true }} />
        <StatCard icon={Wallet} label="Joriy oy tushumi" value="42,5 mln" trend={{ label: "+8%", positive: true }} />
        <StatCard icon={CalendarCheck} label="Davomat foizi" value="94%" />
        <StatCard icon={TrendingDown} label="Joriy oy xarajati" value="23,4 mln" />
      </div>
      <div className="mt-4 rounded-btn border border-gray-100 p-3">
        <div className="mb-2 text-xs font-medium text-gray-500">
          So'nggi 6 oy — tushum va xarajat
        </div>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
              <CartesianGrid vertical={false} stroke="#F1F1F4" />
              <Line type="monotone" dataKey="income" stroke="#F5A623" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="expense" stroke="#A32D2D" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default function SectionDashboard() {
  return (
    <NumberedSectionLayout
      index="3.0 — Dashboard"
      title="Barcha ko'rsatkichlar — bir joyda"
      description="Talabalar, tushum, xarajat va davomat — bitta ekranda, real vaqtda."
      tone="background"
      screen={<DashboardScreen />}
    />
  );
}
