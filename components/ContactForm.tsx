"use client";
import { useState } from "react";
import { Send } from "lucide-react";
export function ContactForm({ propertyTitle }: { propertyTitle?: string }) {
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); const data = new FormData(event.currentTarget); const message = `Hola Raíz Noble. Soy ${data.get("name")}. Teléfono: ${data.get("phone")}. ${propertyTitle ? `Me interesa ${propertyTitle}. ` : ""}${data.get("message")}`; setSent(true); window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer"); };
  return <form className="contact-form" onSubmit={submit}><label>Nombre<input name="name" required placeholder="Tu nombre" /></label><label>Teléfono<input name="phone" required inputMode="tel" placeholder="Tu WhatsApp" /></label><label className="full">Mensaje<textarea name="message" required defaultValue={propertyTitle ? "Quiero solicitar la ficha completa y conocer horarios para una visita." : "Quiero recibir orientación sobre..."} /></label><button className="button gold full" type="submit">{propertyTitle ? "Agendar visita" : "Enviar consulta"} <Send size={17} /></button>{sent && <p className="form-note full">Abrimos WhatsApp con tus datos listos para enviar.</p>}</form>;
}
