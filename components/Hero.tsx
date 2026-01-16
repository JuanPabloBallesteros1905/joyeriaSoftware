import Image from "next/image"
import Link from "next/link"

export function HeroSectionJoyeria() {
  return (
    <section className="mb-20 relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] w-full overflow-hidden flex items-center justify-center">

      {/* Fondo con imagen */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src="/joyeria.jpg"
          alt="Joyeria Tallana - Colección exclusiva"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
        /> */}
        {/* Overlay oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 flex flex-col items-center text-center text-white">

        {/* Títulos */}
        <div className="max-w-2xl sm:max-w-3xl lg:max-w-4xl space-y-4 sm:space-y-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-serif font-light tracking-tight leading-tight md:leading-snug">
            Joyería hecha con <span className="italic block sm:inline">amor y pasión</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide text-gray-200 uppercase max-w-xl mx-auto px-2">
            Piezas únicas diseñadas al detalle
          </p>
        </div>

        {/* Botón CTA */}
        {/* <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-4">
          <Link href="/catalogo" className="bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 rounded-sm min-w-[180px] sm:min-w-[200px]">
            Ver Catálogo
          </Link >
        </div> */}

        {/* Estadísticas */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 border-t border-white/20 pt-6 sm:pt-8 md:pt-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl px-4">

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">100%</span>
            <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 sm:mt-2 text-gray-300 text-center leading-tight">
              Artesanal
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">30</span>
            <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 sm:mt-2 text-gray-300 text-center leading-tight">
              Años de Historia
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">18k</span>
            <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 sm:mt-2 text-gray-300 text-center leading-tight">
              Oro
            </span>
          </div>

        </div>

      </div>

      {/* Indicador scroll (opcional) */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className="animate-bounce">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

    </section>
  )
}