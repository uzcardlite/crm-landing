import { useState } from "react";
import Reveal from "./ui/Reveal";

const FAQS = [
  {
    q: "ncrm'ni markazimizga o'rnatish qancha vaqt oladi?",
    a: "O'quvchilar, o'qituvchilar va guruhlar ma'lumotlarini bizning jamoamiz tekinga ko'chirib beradi. Odatda 24–48 soat ichida tayyor holatda ishga tushasiz.",
  },
  {
    q: "Ota-onalar qanday qilib farzandi ma'lumotlarini ko'radi?",
    a: "Farzandim Telegram boti orqali — davomat, baho va to'lov holatini istalgan payt o'zi tekshiradi, qo'ng'iroq qilishning hojati yo'q.",
  },
  {
    q: "AI Tahlil xavfsizmi — shaxsiy ma'lumotlar tashqariga chiqmaydimi?",
    a: "Yo'q. AI faqat agregat va maskalangan ma'lumotni ko'radi (masalan, sonlar va foizlar) — telefon raqami yoki manzil kabi shaxsiy ma'lumotlar hech qachon tashqariga yuborilmaydi.",
  },
  {
    q: "Bir nechta filiallarimiz bo'lsa, alohida boshqara olamizmi?",
    a: "Ha. Har bir filial o'z hisobotlari, o'quvchilari va xodimlari bilan alohida ko'rinadi, markaziy panelda esa barchasini birga solishtirasiz.",
  },
  {
    q: "To'lov va qarzdorlik bilan ishlash qanday yo'lga qo'yilgan?",
    a: "Har bir to'lov qayd etiladi, qarzdorlik oyma-oy avtomatik hisoblanadi va Excel formatida istalgan payt yuklab olinadi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: 780 }}>
        <div className="center" style={{ marginBottom: 34 }}>
          <div className="eyebrow">Savollar</div>
          <Reveal as="h2" className="section-title">
            Ko'p beriladigan savollar
          </Reveal>
        </div>
        <div>
          {FAQS.map((item, i) => (
            <Reveal
              as="div"
              className={`faq-item${openIndex === i ? " open" : ""}`}
              delay={Math.min(i, 5) * 0.05}
              key={item.q}
            >
              <div className="faq-q" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                {item.q}
                <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
