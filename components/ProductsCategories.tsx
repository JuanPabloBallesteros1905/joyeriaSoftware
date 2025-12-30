'use client'
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'

export function ProductsCategories() {
    const itemsProducts = [
        {
            id: 1,
            name: "Pulseras",
            image: "/pulsera.png",
            link: "/pulseras"
        },
        {
            id: 2,
            name: "rings",
            image: "/ani.png",
            link: "/pulseras"
        },
        {
            id: 3,
            name: "Argollas",
            image: "/argollas.png",
            link: "/pulseras"
        },
        {
            id: 4,
            name: "Pulseras",
            image: "/collar.png",
            link: "/pulseras"
        },
    ]

    const [emblaRef] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps',
        breakpoints: {
            '(min-width: 640px)': { slidesToScroll: 2 },
            '(min-width: 768px)': { slidesToScroll: 3 },
            '(min-width: 1024px)': { slidesToScroll: 4 },
        }
    })

    return (
        <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 pt-4 pb-8 sm:pb-10  pt-20 md:pb-12">
            <h1 className="text-lg  sm:text-xl md:text-2xl font-semibold text-[#28241e] mb-4 sm:mb-6 md:mb-8">Categorías Populares</h1>

            <div className="embla overflow-hidden " ref={emblaRef}>
                
                
                <div className="embla__container  flex justify-between " >
                    {itemsProducts.map((item) => (
                        <div
                            key={item.id}
                            className="embla__slide  min-w-0 mr-3 sm:mr-4 md:mr-5"
                            style={{
                                flex: '0 0 auto',
                                width: 'calc(90vw - 30px)',
                                maxWidth: '280px'
                            }}
                        >
                            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-36 xs:h-40 sm:h-48 md:h-56 w-full">
                                <div className="relative h-full w-full group">
                                    <Image
                                        src={item.image}
                                        alt={`Joyeria Tallana - ${item.name}`}
                                        fill
                                        priority={item.id <= 2}
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        quality={90}
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 280px"
                                    />

                                    {/* Overlay con nombre de categoría */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                                        <span className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide block text-center">
                                            {item.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicadores de scroll (dots) - opcional */}

        </div>
    )
}