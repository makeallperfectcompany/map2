"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import ConsultationPopup from "@/components/modals/ConsultationPopup";

type PopupContextType = {
  openConsultation: () => void;
};

const PopupContext = createContext<PopupContextType>({
  openConsultation: () => {},
});

export function useConsultationPopup() {
  return useContext(PopupContext);
}

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openConsultation = useCallback(() => setIsOpen(true), []);
  const closeConsultation = useCallback(() => setIsOpen(false), []);

  return (
    <PopupContext.Provider value={{ openConsultation }}>
      {children}
      <ConsultationPopup isOpen={isOpen} onClose={closeConsultation} />
    </PopupContext.Provider>
  );
}
