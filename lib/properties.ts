export type Property = {
  slug: string;
  operation: "Venta" | "Renta" | "Inversión";
  type: "Casa" | "Terreno" | "Departamento" | "Comercial";
  title: string; location: string; price: number; priceLabel: string; image: string; gallery: string[];
  land: number; construction: number; bedrooms: number; bathrooms: number; parking: number;
  documentStatus: string; description: string; amenities: string[];
};

// Los registros de Ferrocarril Interoceánico y Rancho Viejo son listados reales.
// Los demás siguen siendo ejemplos editables.
// La interfaz, las fichas y todos los filtros se actualizan automáticamente.
export const properties: Property[] = [
  {
    slug: "propiedad-oportunidad-ferrocarril-interoceanico",
    operation: "Venta",
    type: "Casa",
    title: "Propiedad de oportunidad en Xalapa",
    location: "Av. Ferrocarril Interoceánico, Xalapa, Ver",
    price: 2777000,
    priceLabel: "$2,777,000 MXN",
    image: "/properties/ferrocarril-interoceanico-01.webp",
    gallery: [
      "/properties/ferrocarril-interoceanico-01.webp",
      "/properties/ferrocarril-interoceanico-02.webp",
      "/properties/ferrocarril-interoceanico-03.webp",
      "/properties/ferrocarril-interoceanico-04.webp",
      "/properties/ferrocarril-interoceanico-05.webp",
      "/properties/ferrocarril-interoceanico-06.webp"
    ],
    land: 359,
    construction: 0,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    documentStatus: "359 m² escriturados y documentación en regla",
    description: "Propiedad con excelente ubicación cerca de la avenida Ferrocarril Interoceánico. Cuenta con 359 m² escriturados y una vivienda construida que puede habitarse, remodelarse o aprovecharse como base para un nuevo proyecto. Por su superficie, servicios y ubicación estratégica, es una alternativa atractiva para familias, inversionistas y desarrolladores.",
    amenities: ["Todos los servicios disponibles", "Vivienda actualmente construida", "Potencial habitacional o comercial", "Opción de remodelación", "Zona urbana estratégica", "Precio cercano al valor del terreno"]
  },
  { slug: "terreno-potencial-inversion", operation: "Inversión", type: "Terreno", title: "Terreno con potencial de inversión", location: "Carretera a Coatepec", price: 1980000, priceLabel: "$1,980,000 MXN", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", gallery: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"], land: 960, construction: 0, bedrooms: 0, bathrooms: 0, parking: 0, documentStatus: "Título de propiedad disponible", description: "Superficie con vocación residencial y buen frente, ubicada en un corredor de crecimiento entre Xalapa y Coatepec.", amenities: ["Acceso pavimentado", "Servicios cercanos", "Topografía aprovechable", "Zona en crecimiento"] },
  { slug: "residencia-contemporanea", operation: "Venta", type: "Casa", title: "Residencia contemporánea", location: "Monte Magno, Xalapa", price: 6240000, priceLabel: "$6,240,000 MXN", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85", gallery: ["https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"], land: 280, construction: 360, bedrooms: 4, bathrooms: 4, parking: 3, documentStatus: "Expediente documental completo", description: "Arquitectura actual, materiales sobrios y una distribución pensada para convivir y recibir con comodidad.", amenities: ["Terraza en azotea", "Sala de TV", "Vestidor", "Cuarto de servicio", "Seguridad"] },
  {
    slug: "casa-campestre-rancho-viejo",
    operation: "Venta",
    type: "Casa",
    title: "Casa campestre en Rancho Viejo",
    location: "Rancho Viejo, Xalapa, Ver",
    price: 1650000,
    priceLabel: "$1,650,000 MXN",
    image: "/properties/rancho-viejo-01.webp",
    gallery: [
      "/properties/rancho-viejo-01.webp",
      "/properties/rancho-viejo-02.webp",
      "/properties/rancho-viejo-03.webp",
      "/properties/rancho-viejo-04.webp",
      "/properties/rancho-viejo-05.webp",
      "/properties/rancho-viejo-06.webp",
      "/properties/rancho-viejo-07.webp",
      "/properties/rancho-viejo-08.webp"
    ],
    land: 450,
    construction: 100,
    bedrooms: 2,
    bathrooms: 1,
    parking: 2,
    documentStatus: "Información documental por confirmar",
    description: "Casa campestre con 450 m² de terreno y 100 m² de construcción, ubicada en Rancho Viejo. Su distribución integra cocina de concepto abierto, sala-comedor con buena iluminación, dos recámaras y un baño. Los jardines frontal y posterior ofrecen espacio para disfrutar la tranquilidad del entorno sin perder el acceso a Xalapa. Ideal como vivienda, casa de descanso o inversión.",
    amenities: ["Cocina de concepto abierto", "Sala-comedor con buena iluminación", "Jardín frontal y posterior", "Cochera para 2 autos", "Propiedad cercada", "Agua, luz e internet disponibles", "Excelente acceso vehicular"]
  },
  { slug: "propiedad-renta", operation: "Renta", type: "Departamento", title: "Propiedad para renta", location: "Centro, Xalapa", price: 18500, priceLabel: "$18,500 MXN / mes", image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=85", gallery: ["https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=85", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"], land: 0, construction: 128, bedrooms: 2, bathrooms: 2, parking: 1, documentStatus: "Contrato y requisitos disponibles", description: "Departamento funcional con acabados actuales y acceso cercano a servicios, comercios y vías principales.", amenities: ["Elevador", "Balcón", "Cocina equipada", "Acceso controlado"] },
  { slug: "lote-urbano", operation: "Venta", type: "Terreno", title: "Lote urbano", location: "Las Trancas, Xalapa", price: 1280000, priceLabel: "$1,280,000 MXN", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85", gallery: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85"], land: 320, construction: 0, bedrooms: 0, bathrooms: 0, parking: 0, documentStatus: "Documentación disponible para consulta", description: "Lote dentro de zona urbana consolidada, preparado para un proyecto residencial de escala media.", amenities: ["Servicios a pie de lote", "Frente regular", "Uso habitacional", "Acceso urbano"] }
];

export const propertyTypes = ["Todos", "Casa", "Terreno", "Departamento", "Comercial"] as const;
