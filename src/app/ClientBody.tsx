"use client";

import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageHtmlAttributes } from "@/components/layout/LanguageHtmlAttributes";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <LanguageProvider>
      <LanguageHtmlAttributes />
      <div className="antialiased">{children}</div>
    </LanguageProvider>
  );
}
