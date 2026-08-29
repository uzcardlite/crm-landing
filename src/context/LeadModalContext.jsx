import { createContext, useContext, useState, useCallback } from "react";

const LeadModalContext = createContext(null);

export function LeadModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLead = useCallback(() => setIsOpen(true), []);
  const closeLead = useCallback(() => setIsOpen(false), []);

  return (
    <LeadModalContext.Provider value={{ isOpen, openLead, closeLead }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within a LeadModalProvider");
  return ctx;
}
