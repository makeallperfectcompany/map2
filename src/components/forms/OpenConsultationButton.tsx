"use client";

import { useConsultationPopup } from "@/components/modals/PopupProvider";

type OpenConsultationButtonProps = {
  className?: string;
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
};

export default function OpenConsultationButton({
  className,
  children,
  as = "button",
  href,
}: OpenConsultationButtonProps) {
  const { openConsultation } = useConsultationPopup();

  if (as === "a") {
    return (
      <a
        className={className}
        href={href || "#"}
        onClick={(e) => {
          e.preventDefault();
          openConsultation();
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={openConsultation}>
      {children}
    </button>
  );
}
