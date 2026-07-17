import { Users, Link2, Link2Off } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import NumberedSectionLayout from "./ui/NumberedSectionLayout";
import StatCard from "./ui/StatCard";

const mahallaData = [
  { name: "Chilonzor", count: 86 },
  { name: "Yunusobod", count: 64 },
  { name: "Mirzo Ulug'bek", count: 51 },
  { name: "Shayxontohur", count: 38 },
];

function ParentsScreen() {
  return (
    <div className="rounded-card border border-gray-100 bg-white p-4 shadow-card sm:p-5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard icon={Users} label="Jami o'quvchilar" value="428" />
        <StatCard icon={Link2} label="Bog'langan ota-onalar" value="91%" trend={{ label: "+5%", positive: true }} />
        <StatCard icon={Link2Off} label="Bog'lanmaganlar" value="38 ta" />
      </div>
      <div className="mt-4 rounded-btn border border-gray-100 p-3">
        <div className="mb-2 text-xs font-medium text-gray-500">
          Mahallalar bo'yicha statistika
        </div>
        <div className="h-36">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mahallaData} layout="vertical" margin={{ top: 0, right: 16, bottom: 0, left: 0 }}>
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                width={90}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="count" fill="#F5A623" radius={[0, 4, 4, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default function SectionParents() {
  return (
    <NumberedSectionLayout
      index="4.0 — Ota-onalar"
      title="Ota-onalar bilan aloqa — mahalla kesimida ham"
      description="Qaysi hududdan ko'proq talaba kelayotganini ko'ring — bu marketing qarorlar uchun ham foydali."
      tone="white"
      reverse
      screen={<ParentsScreen />}
    />
  );
}
