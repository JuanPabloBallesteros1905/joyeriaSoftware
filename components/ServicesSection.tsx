'use client'
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

import { useState } from 'react';


const services2 = [
    {
        title: "Colecciones Limitadas",
        subtitle: "Ediciones Especiales",
        description: "Lanzamos series exclusivas de solo 50 piezas cada temporada. Joyas inspiradas en arte, arquitectura y naturaleza que se convierten en objetos de colección valorados año tras año.",
        badge: "Serie 2024",
        feature: "Numeradas y certificadas",
        subfeature: "Aumentan su valor con el tiempo"
    },
    {
        title: "Laboratorio Gemológico",
        subtitle: "Certificación de Piedras",
        description: "Contamos con tecnología de espectroscopía para certificar diamantes, esmeraldas, rubíes y zafiros. Emitimos informes detallados de pureza, color, talla y quilates con validez internacional.",
        badge: "Certificación GIA",
        feature: "Equipos de última generación",
        subfeature: "Resultados en 48 horas"
    }
];

const services = [
    {
        title: "Atelier de Alta Joyería",
        subtitle: "Piezas Únicas",
        description: "Nuestros maestros joyeros con más de 30 años de experiencia crean obras de arte en oro blanco, rosa y amarillo, combinando diamantes conflict-free con esmaltes artesanales.",
        badge: "Obras Firmadas",
        feature: "Técnicas del siglo XIX",
        subfeature: "Cada pieza cuenta una historia única"
    },
    {
        title: "Customización Digital",
        subtitle: "Diseño 3D Interactivo",
        description: "Usa nuestra plataforma online para diseñar tu propia joya. Visualiza en tiempo real combinaciones de metales, piedras y formas. Recibe un render fotorrealista antes de la fabricación.",
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

            <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-slate-50">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Contenido de texto */}
                        <div className="space-y-6 lg:space-y-8">


                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                                {currentService.title}
                                <span className="block font-serif italic text-gray-700 mt-2">
                                    {currentService.subtitle}
                                </span>
                            </h3>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                {currentService.description}
                            </p>

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

                        {/* Elemento visual decorativo */}
                        <div className="relative h-64 sm:h-80 lg:h-96">

                            <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl flex items-center justify-center transition-all duration-500">
                                <div className="text-center space-y-4 p-8">
                                    {/* <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg">
                                        <Sparkles className="w-10 h-10 text-white" />
                                    </div> */}
                                    <p className="text-gray-800 font-serif italic text-lg">
                                        {currentService.feature}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {currentService.subfeature}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Decoración de fondo sutil */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl -z-10"></div>
            </section>


            <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-slate-50">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24 lg:py-32">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative h-64 sm:h-80 lg:h-96">

                            <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl flex items-center justify-center transition-all duration-500">
                                <div className="text-center space-y-4 p-8">
                                    {/* <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg">
                                        <Sparkles className="w-10 h-10 text-white" />
                                    </div> */}
                                    <p className="text-gray-800 font-serif italic text-lg">
                                        {currentService2.feature}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {currentService2.subfeature}
                                    </p>
                                </div>
                            </div>
                        </div>



                        {/* <Image
    src="/caja_regalo.png"
    alt="Caja de regalo"
    width={600} // El ancho base
    height={400} // El alto proporcional
    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl border border-gray-200 shadow-xl"
/> */}




                        {/* Contenido de texto */}
                        <div className="space-y-6 lg:space-y-8">

                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                                {currentService2.title}
                                <span className="block font-serif italic text-gray-700 mt-2">
                                    {currentService2.subtitle}
                                </span>
                            </h3>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                {currentService2.description}
                            </p>

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
                                    </button>
                                </div>
                            </div>

                            {/* Indicadores */}
                            <div className="flex gap-2 pt-4">
                                {services2.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex2(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-gray-900'
                                            : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        aria-label={`Ir al servicio ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>



                    </div>
                </div>

                {/* Decoración de fondo sutil */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl -z-10"></div>
            </section>

        </>




    );
}