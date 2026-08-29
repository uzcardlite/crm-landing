import NumberedSectionLayout from "./ui/NumberedSectionLayout";
import ChatBubble from "./ui/ChatBubble";

function UserBubble({ message }) {
  return (
    <div className="ml-auto w-full max-w-xs rounded-card rounded-tr-sm bg-accent p-3 text-right shadow-card">
      <p className="text-sm font-medium leading-snug text-accent-dark">{message}</p>
    </div>
  );
}

export default function SectionAI() {
  return (
    <NumberedSectionLayout
      index="5.0 — AI Tahlil"
      title="Bazangiz bilan tabiiy tilda gaplashing"
      description={
        <>
          "Shu oy eng ko'p qarzi bor kimlar?" deb yozing — AI bazangizdagi haqiqiy
          raqamlar bilan javob beradi. Poster Studiyasi esa brendingiz ranglarida
          professional banner chizadi — dizaynerga muhtoj bo'lmasdan.
        </>
      }
      tone="white"
      screen={
        <div className="flex flex-col gap-3">
          <UserBubble message="Shu oy eng ko'p qarzi bor 10 ta ota-onani ko'rsat" />
          <ChatBubble message="Avgust oyi bo'yicha 14 ta oila qarzdor, jami 18 240 000 so'm. Eng katta qarz — Dilnoza Muhitdinova." />
        </div>
      }
    />
  );
}
