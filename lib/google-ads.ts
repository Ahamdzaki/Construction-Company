// Google Ads conversion tracking — the one place to edit the tag ID and labels.
// Each value can also be overridden with the matching NEXT_PUBLIC_* environment variable.

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18589947488"

// TODO: replace these placeholders with the real conversion labels from Google Ads
// (Goals → Conversions → your conversion action → Tag setup → "send_to": "AW-.../<LABEL>")
export const FORM_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL || "XmsmCJ3c2sAdEOCssKBF"
export const CALL_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL || "CALL_LABEL"
export const WHATSAPP_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL || "WHATSAPP_LABEL"

function trackConversion(label: string) {
  window.gtag?.("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${label}` })
}

export const trackFormConversion = () => trackConversion(FORM_LABEL)
export const trackCallConversion = () => trackConversion(CALL_LABEL)
export const trackWhatsAppConversion = () => trackConversion(WHATSAPP_LABEL)

/** Fires the call or WhatsApp conversion based on the link's href; does nothing for other links. */
export function trackContactLinkClick(href: string | undefined) {
  if (!href) return
  if (href.startsWith("tel:")) trackCallConversion()
  else if (/wa\.me|api\.whatsapp\.com/.test(href)) trackWhatsAppConversion()
}
