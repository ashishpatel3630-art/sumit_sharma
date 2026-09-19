import { siteConfig } from "@/data/siteConfig";

export function getWhatsAppNumber() {
  return siteConfig.whatsapp.replace(/\D/g, "");
}

export function createWhatsAppUrl(message: string) {
  const number = getWhatsAppNumber();

  if (!number) {
    return "";
  }

  const encodedMessage = encodeURIComponent(message.trim());

  return `https://wa.me/${number}?text=${encodedMessage}`;
}

export function hasWhatsAppNumber() {
  return getWhatsAppNumber().length > 0;
}