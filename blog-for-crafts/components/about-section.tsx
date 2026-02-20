import Image from "next/image"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/artesana-tejiendo.jpg"
              alt="Artesana colombiana tejiendo a mano"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">
              Nuestra Historia
            </span>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-foreground text-balance">
              Tradicion que se teje con el corazon
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Somos un emprendimiento colombiano que conecta el talento de nuestras
              artesanas con el mundo. Cada bolso, llavero y muneco que creamos lleva
              consigo la riqueza cultural de nuestras comunidades.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Trabajamos directamente con artesanas de la Guajira, Boyaca y Narino,
              asegurandonos de que cada creacion sea justa, autentica y llena de amor.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <span className="text-2xl md:text-3xl font-serif font-bold text-primary">500+</span>
                <p className="mt-1 text-xs text-muted-foreground">Piezas vendidas</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-serif font-bold text-primary">50+</span>
                <p className="mt-1 text-xs text-muted-foreground">Artesanas aliadas</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-serif font-bold text-primary">100%</span>
                <p className="mt-1 text-xs text-muted-foreground">Hecho a mano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
