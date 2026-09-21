import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raíz Noble | Inmobiliaria Mexicana Contemporánea",
  description: "Compra, vende e invierte en Xalapa, Veracruz con claridad, imagen premium y acompañamiento profesional.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
