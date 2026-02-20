const testimonials = [
  {
    id: 1,
    name: "Carolina M.",
    text: "Mi mochila Wayuu es hermosa, los colores son increibles y se nota que esta hecha con mucho amor. La atencion por WhatsApp fue super rapida.",
    location: "Bogota",
  },
  {
    id: 2,
    name: "Andrea P.",
    text: "Compre llaveros para regalar y todos quedaron encantados. Son unicos y muy bien hechos. Definitivamente volvere a comprar.",
    location: "Medellin",
  },
  {
    id: 3,
    name: "Lucia G.",
    text: "Los munecos de crochet son divinos, los tengo decorando mi estudio. Me encanta apoyar a las artesanas colombianas.",
    location: "Cali",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">
            Testimonios
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl text-foreground text-balance">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-card border border-border p-6"
            >
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                {`"${t.text}"`}
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <span className="text-sm font-semibold text-foreground">{t.name}</span>
                <span className="ml-2 text-xs text-muted-foreground">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
