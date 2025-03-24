// components/FacebookPixel.js
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

// Declaração global para o tipo do fbq
declare global {
  interface Window {
    fbq: any;
  }
}

// Componente interno que usa useSearchParams
function FacebookPixelContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Dispara um PageView sempre que a rota ou os parâmetros de busca mudam
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  // Função para rastrear eventos personalizados
  const trackEvent = (event: string, options = {}) => {
    if (window.fbq) {
      window.fbq("track", event, options);
    }
  };

  return null;
}

// Componente principal que envolve o conteúdo com Suspense
export default function FacebookPixel() {
  return (
    <Suspense fallback={null}>
      <FacebookPixelContent />
    </Suspense>
  );
}