'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Image from 'next/image';

import { useState } from 'react';


const services2 = [
    // {
    //     title: "Colecciones Limitadas",
    //     subtitle: "Ediciones Especiales",
    //     description: "Lanzamos series exclusivas de solo 50 piezas cada temporada. Joyas inspiradas en arte, arquitectura y naturaleza que se convierten en objetos de colección valorados año tras año.",
    //     badge: "Serie 2024",
    //     feature: "Numeradas y certificadas",
    //     subfeature: "Aumentan su valor con el tiempo"
    // },
    {
        title: "Trabajamos con piedras naturales ",
        subtitle: "Certificadas por laboratorio gemológico ",
        imagen: "/gemas.jpg",
        description: "Creamos tus joyas con diamantes, esmeraldas, rubíes y zafiros, bajo fabricación personalizada. Emitimos certificado expedido por laboratorio, detallando pureza, color, talla y quilates de las piedras, con validez internacional.",
        badge: "Certificación GIA",
        feature: "Equipos de última generación",
        subfeature: "Resultados en 48 horas"
    }
];


const services = [
    {
        title: "Taller de Alta Joyería",
        imagen: "/joyeria.jpg",
        subtitle: "Piezas Únicas & Personalizadas",
        description: "Con más de 30 años de experiencia, creamos obras de arte en oro blanco, rosa y amarillo, siempre bajo la máxima calidad, ley 750!",
        badge: "Hecho a mano",
        feature: "Técnicas del siglo XIX",
        subfeature: "Cada pieza cuenta una historia única"
    },
    {
        title: "Grabamos con laser",
        imagen: "/maarcador.jpg",
        subtitle: "Diseño & Previsualización digital",
        description: "Grabar con láser es convertir una joya en un recuerdo eterno. Cada anillo o prenda en oro puede llevar un nombre, una fecha o un mensaje especial con máxima precisión, sin dañar el metal, preservando su brillo y valor para siempre.",
        badge: "Tecnología Inmersiva",
        feature: "Realidad aumentada",
        subfeature: "Prueba virtual desde tu móvil"
    }
];

export function ServicesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? services.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
    };


    const goToPrevious2 = () => {
        setCurrentIndex2((prevIndex) =>
            prevIndex === 0 ? services2.length - 1 : prevIndex - 1
        );
    };

    const goToNext2 = () => {
        setCurrentIndex2((prevIndex) =>
            prevIndex === services2.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentService = services[currentIndex];
    const currentService2 = services2[currentIndex2];

    return (


        <>

            <section className="relative w-full overflow-hidden bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-19 sm:py-24 lg:py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

                        {/* Contenido de texto con altura mínima fija */}
                        <div className="flex flex-col justify-center space-y-6 lg:space-y-8">

                            {/* Título y subtítulo con altura mínima fija */}
                            <div className="min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                                    {currentService.title}
                                    <span className="block font-serif italic text-gray-700 mt-2">
                                        {currentService.subtitle}
                                    </span>
                                </h3>
                            </div>

                            {/* Descripción con altura mínima fija */}
                            <div className="min-h-[100px] sm:min-h-[120px]">
                                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                    {currentService.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="group px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-md transition-all duration-300 shadow-sm hover:shadow-md">
                                    Solicitar servicio
                                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                                        →
                                    </span>
                                </button>

                                {/* Controles del carrusel */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={goToPrevious}
                                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                                        aria-label="Servicio anterior"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button
                                        onClick={goToNext}
                                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                                        aria-label="Siguiente servicio"
                                    >
                                        <ChevronRight className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Indicadores */}
                            <div className="flex gap-2 pt-4">
                                {services.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-gray-900'
                                            : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        aria-label={`Ir al servicio ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Elemento visual que ocupa todo el alto disponible */}
                        <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                            <img
                                src={currentService.imagen}
                                alt={currentService.title}
                                className="w-full h-full object-cover object-center rounded-2xl border border-gray-200 shadow-xl"
                            />
                        </div>

                    </div>
                </div>

                {/* Decoración de fondo sutil */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl -z-10"></div>
            </section>

            <section className="relative w-full overflow-hidden bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

                        <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                            <img
                                src={currentService2.imagen}
                                alt={currentService2.title}
                                className="w-full h-full object-cover object-center rounded-2xl border border-gray-200 shadow-xl"
                            />
                        </div>

                        {/* Contenido de texto con altura mínima fija */}
                        <div className="flex flex-col justify-center space-y-6 lg:space-y-8">



                            {/* Título y subtítulo con altura mínima fija */}
                            <div className="min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                                    {currentService2.title}
                                    <span className="block font-serif italic text-gray-700 mt-2">
                                        {currentService2.subtitle}
                                    </span>
                                </h3>
                            </div>

                            {/* Descripción con altura mínima fija */}
                            <div className="min-h-[100px] sm:min-h-[120px]">
                                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                    {currentService2.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                {/* <button className="group px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-md transition-all duration-300 shadow-sm hover:shadow-md">
                                    Solicitar servicio
                                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                                        →
                                    </span>
                                </button> */}

                                {/* Controles del carrusel */}
                                <div className="flex gap-2">
                                    {/* <button
                                        onClick={goToPrevious2}
                                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                                        aria-label="Servicio anterior"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button
                                        onClick={goToNext2}
                                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                                        aria-label="Siguiente servicio"
                                    >
                                        <ChevronRight className="w-5 h-5 text-gray-600" />
                                    </button> */}
                                </div>
                            </div>

                            {/* Indicadores */}
                            {/* <div className="flex gap-2 pt-4">
                                {services2.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-gray-900'
                                            : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        aria-label={`Ir al servicio ${index + 1}`}
                                    />
                                ))}
                            </div> */}
                        </div>

                        {/* Elemento visual que ocupa todo el alto disponible */}


                    </div>
                </div>

                {/* Decoración de fondo sutil */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl -z-10"></div>
            </section>

        </>




    );
}