export const WHATSAPP_NUMBER = "919778792144";

export const openWhatsApp = (message) => {
  const encoded = encodeURIComponent(message);

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
    "_blank",
    "noopener,noreferrer"
  );
};