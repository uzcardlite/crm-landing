import { useEffect, useRef } from "react";

const PAIRS = [
  { q: "Bugun kim darsga kelmadi?", a: "Bugun <b>3 ta</b> o'quvchi darsga kelmagan: Aziza K., Jasur T., Nilufar Y." },
  { q: "Shu oy eng ko'p qarzi bor kim?", a: "<b>Dilnoza Muhitdinova</b> — 2 400 000 so'm qarz, 2 oydan beri to'lanmagan." },
  { q: "Bu oy tushum qancha oshdi?", a: "Bu oy tushum o'tgan oyga nisbatan <b>+12%</b> — yangi guruhlar hisobiga." },
];

// Verbatim port of the mockup's heroChatLoop(): types a question word-by-word,
// "thinks", types an answer, then loops to the next pair.
export default function HeroChatFloat() {
  const qRef = useRef(null);
  const aRef = useRef(null);

  useEffect(() => {
    const qEl = qRef.current;
    const aEl = aRef.current;
    if (!qEl || !aEl) return undefined;
    let i = 0;
    let cancelled = false;
    const timers = [];

    function type(el, html, done) {
      const words = html.split(" ");
      let idx = 0;
      el.innerHTML = "";
      const timer = setInterval(() => {
        if (cancelled) {
          clearInterval(timer);
          return;
        }
        if (idx >= words.length) {
          clearInterval(timer);
          el.innerHTML = words.join(" ");
          if (done) done();
          return;
        }
        idx += 1;
        el.innerHTML = `${words.slice(0, idx).join(" ")}<span class="caret"></span>`;
      }, 55);
      timers.push(timer);
    }

    function cycle() {
      if (cancelled) return;
      const pair = PAIRS[i % PAIRS.length];
      i += 1;
      aEl.innerHTML = "";
      type(qEl, pair.q, () => {
        const t1 = setTimeout(() => {
          type(aEl, pair.a, () => {
            const t2 = setTimeout(cycle, 2600);
            timers.push(t2);
          });
        }, 350);
        timers.push(t1);
      });
    }
    cycle();

    return () => {
      cancelled = true;
      timers.forEach(clearInterval);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="hero-chat-float" id="hero-chat-float">
      <div className="head">
        <div className="spark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M12 2l1.8 6.1L20 10l-6.2 1.9L12 18l-1.8-6.1L4 10l6.2-1.9L12 2z" />
          </svg>
        </div>
        <span>AI TAHLIL</span>
      </div>
      <div className="q" ref={qRef} />
      <div className="a" ref={aRef} />
    </div>
  );
}
