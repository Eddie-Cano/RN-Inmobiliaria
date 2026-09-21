import type { Property } from "@/lib/properties";
import { PropertyCard } from "./PropertyCard";
export function PropertyGrid({ properties: items }: { properties: Property[] }) { return <div className="property-grid">{items.map((property) => <PropertyCard key={property.slug} property={property} />)}</div>; }
