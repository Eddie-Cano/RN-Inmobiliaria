import { Header } from "@/components/Header";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";
import { properties } from "@/lib/properties";
export default function PropertiesPage() { return <><Header /><main className="catalog-page"><section className="catalog-hero"><div className="container"><span className="eyebrow light">Catálogo Raíz Noble</span><h1>Encuentra una propiedad con futuro.</h1><p>Explora nuestra selección temporal. Los listados reales podrán sustituirse directamente desde el archivo de propiedades.</p></div></section><section className="section"><div className="container"><Catalog properties={properties} /></div></section></main><Footer /><a className="floating-whatsapp" href="https://wa.me/?text=Hola%20Ra%C3%ADz%20Noble%2C%20quiero%20informaci%C3%B3n." target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a></>; }
