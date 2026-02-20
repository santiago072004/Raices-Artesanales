"use client"

import Image from "next/image"
import { useState } from "react"

const categories = [
  { id: "todos", label: "Todos" },
  { id: "bolsos", label: "Bolsos" },
  { id: "llaveros", label: "Llaveros" },
  { id: "munecos", label: "Munecos" },
  { id: "accesorios", label: "Accesorios" },
]

const products = [
  {
    id: 1,
    name: "Mochila Wayuu Tradicional",
    price: "$85.000",
    category: "bolsos",
    image: "/images/mochila-wayuu.jpg",
    tag: "Mas vendido",
  },
  {
    id: 2,
    name: "Llaveros Tejidos de Colores",
    price: "$15.000",
    category: "llaveros",
    image: "/images/llaveros-tejidos.jpg",
    tag: null,
  },
  {
    id: 3,
    name: "Munecos Artesanales Crochet",
    price: "$45.000",
    category: "munecos",
    image: "/images/munecos-artesanales.jpg",
    tag: "Nuevo",
  },
  {
    id: 4,
    name: "Bolsito Crossbody Wayuu",
    price: "$65.000",
    category: "bolsos",
    image: "/images/bolsito-crossbody.jpg",
    tag: null,
  },
  {
    id: 5,
    name: "Pulseras Tejidas a Mano",
    price: "$12.000",
    category: "accesorios",
    image: "/images/pulseras-tejidas.jpg",
    tag: null,
  },
  {
    id: 6,
    name: "Monedero Tejido Colorido",
    price: "$25.000",
    category: "accesorios",
    image: "/images/monedero-tejido.jpg",
    tag: "Popular",
  },
]

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const filtered = activeCategory === "todos"
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <section id="productos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">
            Nuestras Creaciones
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl text-foreground text-balance">
            Productos Artesanales
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
            Cada pieza es unica, hecha a mano por artesanas colombianas con tecnicas ancestrales.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <a
              key={product.id}
              href={`https://wa.me/573001234567?text=Hola%21%20Me%20interesa%20el%20producto%3A%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Pedir por WhatsApp
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
