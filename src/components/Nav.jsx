import { useEffect, useState } from "react";
import { LOGIN_URL } from "../config";
import { useLeadModal } from "../context/LeadModalContext";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  try {
    return localStorage.getItem("ncrm-theme") || "system";
  } catch {
    return "system";
  }
}

export default function Nav() {
  const { openLead } = useLeadModal();
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("ncrm-theme", theme);
    } catch {
      // ignore — private browsing etc.
    }
  }, [theme]);

  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button
          type="button"
          className="brand brand-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="brand-mark">
            <img src="/logo.svg" alt="" />
          </div>
          Milliy CRM
        </button>
        <div className="nav-links">
          <a href="#features">Imkoniyatlar</a>
          <a href="#ai">AI</a>
          <a href="#integrations">Integratsiyalar</a>
          <a href="#faq">Savollar</a>
        </div>
        <button className="icon-toggle" onClick={toggleTheme} title="Rejimni almashtirish" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
          </svg>
        </button>
        <a className="nav-login" href={LOGIN_URL}>
          Kirish
        </a>
        <a className="btn btn-ghost nav-admin-btn" href={LOGIN_URL}>
          Admin panelga kirish
        </a>
        <a
          className="btn btn-dark"
          href="#cta"
          onClick={(e) => {
            e.preventDefault();
            openLead();
          }}
        >
          Bepul sinash
        </a>
      </div>
    </nav>
  );
}
