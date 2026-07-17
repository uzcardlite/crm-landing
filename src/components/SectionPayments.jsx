import NumberedSectionLayout from "./ui/NumberedSectionLayout";
import ChatBubble from "./ui/ChatBubble";
import Badge from "./ui/Badge";

const rows = [
  { name: "Falonchiyev Falonchi", group: "Matematika-2A", price: "450 000", paid: "0", debt: "450 000" },
  { name: "Rustamova Sevinch", group: "Ingliz tili-1B", price: "400 000", paid: "200 000", debt: "200 000" },
  { name: "Nazarov Bekzod", group: "Matematika-2A", price: "450 000", paid: "450 000", debt: "0" },
];

function PaymentsScreen() {
  return (
    <div className="overflow-x-auto rounded-card border border-gray-100 bg-white shadow-card">
      <table className="w-full min-w-[420px] text-sm">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50">
            <th className="px-4 py-3 text-left font-medium text-gray-500">Talaba</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500">Guruh</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500">To'langan</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500">Qarz</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-b border-gray-50 last:border-0">
              <td className="px-4 py-3 text-gray-700">{row.name}</td>
              <td className="px-4 py-3 text-gray-700">{row.group}</td>
              <td className="px-4 py-3 text-gray-700">{row.paid}</td>
              <td className="px-4 py-3">
                {row.debt === "0" ? (
                  <Badge variant="success">To'langan</Badge>
                ) : (
                  <Badge variant="danger">{row.debt} so'm</Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SectionPayments() {
  return (
    <NumberedSectionLayout
      index="2.0 — To'lov"
      title="To'lov eslatmalari — o'zi ishlaydi"
      description="Qarzdorlik paydo bo'lganda, bot ota-onaga to'lov usullarini taklif qilib eslatma yuboradi."
      tone="white"
      reverse
      screen={
        <div className="flex flex-col gap-4">
          <PaymentsScreen />
          <ChatBubble
            message="Matematika-2A guruhi uchun to'lov muddati yetdi. Qulay usulni tanlang:"
            buttons={["Payme", "Click", "Naqd"]}
          />
        </div>
      }
    />
  );
}
