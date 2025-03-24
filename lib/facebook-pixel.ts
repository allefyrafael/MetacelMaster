// Função para rastrear eventos personalizados do Facebook Pixel
export function trackFacebookEvent(event: string, options = {}) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, options)
  }
}

// Função para rastrear conversões específicas
export function trackFacebookConversion(event: string, options = {}) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", event, options)
  }
}

