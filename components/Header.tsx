"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const items = [["Inicio", "/"], ["Propiedades", "/propiedades"], ["Vender", "/#vender"], ["Comprar", "/#comprar"], ["Inversión", "/#inversion"], ["Nosotros", "/#nosotros"], ["Contacto", "/#contacto"]];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="Raíz Noble, inicio"><img src="/raiz-noble-logo-negro.png" alt="" /><span><strong>RAÍZ NOBLE</strong><small>INMOBILIARIA MEXICANA CONTEMPORÁNEA</small></span></Link><button className="menu-button" aria-label="Abrir menú" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? "main-nav open" : "main-nav"} aria-label="Navegación principal">{items.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a className="button nav-whatsapp" href="https://wa.me/?text=Hola%20Ra%C3%ADz%20Noble%2C%20quiero%20informaci%C3%B3n." target="_blank" rel="noreferrer">WhatsApp</a></nav></div></header>;
}
