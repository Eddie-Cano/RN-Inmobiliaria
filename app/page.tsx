import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, FileCheck2, Handshake, LineChart, MapPinned, ScanSearch, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PropertyGrid } from "@/components/PropertyGrid";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { properties } from "@/lib/properties";

const sellerBenefits = [
  { icon: FileCheck2, text: "Revisión inicial de documentos" },
  { icon: Sparkles, text: "Ficha técnica premium" },
  { icon: Camera, text: "Fotografía, video o renders" },
  { icon: ScanSearch, text: "Página individual del inmueble" },
  { icon: LineChart, text: "Publicación estratégica en redes" },
  { icon: Handshake, text: "Seguimiento y acompañamiento hasta cierre" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="section properties-section" id="propiedades">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="eyebrow">Selección Raíz Noble</span><h2>Propiedades destacadas</h2><p>Espacios seleccionados por ubicación, potencial y valor patrimonial.</p></div>
              <Link className="text-link" href="/propiedades">Ver catálogo completo <ArrowRight size={18} /></Link>
            </div>
            <PropertyGrid properties={properties} />
          </div>
        </section>
        <section className="section seller-section" id="vender">
          <div className="container seller-layout">
            <div className="seller-intro"><span className="eyebrow light">Para propietarios</span><h2>Tu propiedad merece mejor presentación.</h2><p>En Raíz Noble no solo publicamos inmuebles. Preparamos, presentamos y posicionamos tu propiedad para conectar con el comprador correcto.</p><Link className="button gold" href="#contacto">Quiero vender mi propiedad <ArrowRight size={18} /></Link></div>
            <div className="benefit-grid">{sellerBenefits.map(({ icon: Icon, text }) => <div className="benefit-card" key={text}><Icon size={24} strokeWidth={1.5} /><span>{text}</span></div>)}</div>
          </div>
        </section>
        <section className="section pathways" id="comprar">
          <div className="container pathways-grid">
            <article className="pathway-card jade"><span className="card-index">01 / Comprar</span><h2>Compra con claridad, no con presión.</h2><p>Te acompañamos a elegir zona, revisar documentos, comparar opciones, entender créditos y tomar una decisión con información real.</p><Link className="button ink" href="/propiedades">Estoy buscando propiedad</Link></article>
            <article className="pathway-card maize" id="inversion"><span className="card-index">02 / Inversión</span><h2>Invierte con raíz.</h2><p>Analizamos propiedades por ubicación, demanda, potencial de renta, plusvalía y perfil de uso.</p><Link className="button ink" href="#contacto">Busco invertir</Link></article>
          </div>
        </section>
        <section className="section trust-section"><div className="container trust-layout"><div><span className="eyebrow">Nuestro estándar</span><h2>Una nueva forma de vender bienes raíces en México.</h2></div><div className="trust-list">{["Imagen premium", "Estrategia digital", "Acompañamiento humano", "Claridad documental", "Visión local de Xalapa y Veracruz", "Tecnología aplicada a bienes raíces"].map((item) => <div key={item}><CheckCircle2 size={20} /><span>{item}</span></div>)}</div></div></section>
        <section className="section about-section" id="nosotros"><div className="container about-layout"><div className="about-mark"><img src="/raiz-noble-logo-negro.png" alt="Emblema oficial de Raíz Noble" /></div><div className="about-copy"><span className="eyebrow">Xalapa, Veracruz</span><h2>Raíz Noble</h2><p>Somos una inmobiliaria mexicana contemporánea en Xalapa, Veracruz. Nacimos para presentar el patrimonio inmobiliario con estrategia, estética y claridad.</p><p>Creemos que una casa no es solo construcción, un terreno no es solo metros cuadrados y una propiedad no es solo un anuncio: también es historia, raíz, inversión y futuro.</p><div className="local-pill"><MapPinned size={20} /> Conocimiento local. Presentación de nivel nacional.</div></div></div></section>
        <CTASection />
        <section className="section contact-section" id="contacto"><div className="container contact-layout"><div><span className="eyebrow light">Conversemos</span><h2>El siguiente paso empieza con información clara.</h2><p>Cuéntanos si quieres comprar, vender o invertir. Te responderemos con una ruta concreta para tu caso.</p></div><ContactForm /></div></section>
      </main>
      <Footer />
      <a className="floating-whatsapp" href="https://wa.me/?text=Hola%20Ra%C3%ADz%20Noble%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20inmobiliarios." target="_blank" rel="noreferrer" aria-label="Contactar a Raíz Noble por WhatsApp">WA</a>
    </>
  );
}
