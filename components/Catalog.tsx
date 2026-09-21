"use client";
import { useEffect, useMemo, useState } from "react";
import { Map, SearchX } from "lucide-react";
import type { Property } from "@/lib/properties";
import { FilterBar, type Filters } from "./FilterBar";
import { PropertyGrid } from "./PropertyGrid";
const empty: Filters = { zone: "", operation: "Todos", type: "Todos", price: "Todos", bedrooms: "Todos", minLand: "" };
export function Catalog({ properties }: { properties: Property[] }) {
  const [filters, setFilters] = useState(empty);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFilters((current) => ({
      ...current,
      zone: params.get("zone") || "",
      operation: params.get("operation") || "Todos",
      type: params.get("type") || "Todos",
      price: params.get("price") || "Todos",
    }));
  }, []);
  useEffect(() => {
    const context = (document as unknown as { modelContext?: { registerTool?: (tool: unknown, options?: { signal?: AbortSignal }) => void | Promise<void> } }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const register = context.registerTool({
      name: "filter_property_catalog",
      title: "Filtrar propiedades",
      description: "Actualiza los filtros visibles del catálogo de Raíz Noble por zona, operación y tipo de inmueble.",
      inputSchema: {
        type: "object",
        properties: {
          zone: { type: "string" },
          operation: { type: "string", enum: ["Todos", "Venta", "Renta", "Inversión"] },
          type: { type: "string", enum: ["Todos", "Casa", "Terreno", "Departamento", "Comercial"] }
        },
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input: unknown) {
        if (!input || typeof input !== "object") throw new Error("Los filtros deben enviarse como un objeto.");
        const values = input as { zone?: string; operation?: Filters["operation"]; type?: Filters["type"] };
        const next = { ...empty, zone: values.zone || "", operation: values.operation || "Todos", type: values.type || "Todos" };
        setFilters(next);
        return { status: "aplicado", filters: next };
      }
    }, { signal: lifecycle.signal });
    void Promise.resolve(register).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);
  const filtered = useMemo(() => properties.filter((p) => { const term = filters.zone.toLowerCase(); return (!term || `${p.location} ${p.title}`.toLowerCase().includes(term)) && (filters.operation === "Todos" || p.operation === filters.operation) && (filters.type === "Todos" || p.type === filters.type) && (filters.price === "Todos" || p.price <= Number(filters.price)) && (filters.bedrooms === "Todos" || p.bedrooms >= Number(filters.bedrooms)) && (!filters.minLand || p.land >= Number(filters.minLand)); }), [filters, properties]);
  return <div className="catalog-layout"><FilterBar filters={filters} onChange={setFilters} onReset={() => setFilters(empty)} count={filtered.length} /><div className="catalog-results"><div className="map-placeholder"><Map size={22} /><span><strong>Mapa próximamente</strong>La estructura está preparada para integrar ubicaciones.</span></div>{filtered.length ? <PropertyGrid properties={filtered} /> : <div className="empty-state"><SearchX size={40} /><h2>No encontramos coincidencias</h2><p>Prueba con una zona o rango diferente.</p><button className="button ink" onClick={() => setFilters(empty)}>Ver todas</button></div>}</div></div>;
}
