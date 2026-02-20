export function MarqueeBanner() {
  const items = [
    "Bolsos Wayuu",
    "Llaveros Tejidos",
    "Munecos Artesanales",
    "Pulseras a Mano",
    "Monederos Coloridos",
    "Envios a Todo Colombia",
    "100% Hecho a Mano",
    "Tradicion Colombiana",
  ]

  return (
    <div className="bg-primary overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-medium text-primary-foreground flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
