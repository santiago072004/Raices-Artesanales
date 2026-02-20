const posts = [
  {
    id: 1,
    title: "El arte Wayuu: Mas que un bolso, una historia",
    excerpt:
      "Descubre como cada mochila Wayuu tarda entre 20 y 30 dias en tejerse, y como los patrones geometricos cuentan las historias de la comunidad.",
    date: "15 Feb 2026",
    category: "Cultura",
  },
  {
    id: 2,
    title: "Como cuidar tus artesanias tejidas",
    excerpt:
      "Consejos practicos para mantener tus bolsos, llaveros y pulseras tejidas como nuevos durante mucho tiempo.",
    date: "10 Feb 2026",
    category: "Tips",
  },
  {
    id: 3,
    title: "Conoce a nuestras artesanas de la Guajira",
    excerpt:
      "Te presentamos a Maria, Luz y Carmen, tres mujeres que con sus manos tejen suenos y sostienen a sus familias.",
    date: "5 Feb 2026",
    category: "Comunidad",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">
            Blog
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl text-foreground text-balance">
            Historias y Tradiciones
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
            Aprende sobre la cultura artesanal colombiana y el alma detras de cada pieza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl bg-card border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {post.category}
              </span>
              <h3 className="mt-4 font-serif text-xl text-foreground group-hover:text-primary transition-colors text-balance">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-sm font-medium text-primary group-hover:underline">
                  {"Leer mas ->"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
