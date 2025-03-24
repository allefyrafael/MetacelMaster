// components/FacebookPixel.js
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

declare global {
  interface Window {
    fbq: any;
  }
}

function FacebookPixelContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Verifica se window está disponível (ou seja, se está no lado do cliente)
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  const trackEvent = (event: string, options = {}) => {
    // Verifica se window está disponível antes de usar
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", event, options);
    }
  };

  return null;
}

export default function FacebookPixel() {
  return (
    <Suspense fallback={null}>
      <FacebookPixelContent />
    </Suspense>
  );
}