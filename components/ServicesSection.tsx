'use client'
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';





const services2 = [
    {
        title: "Regala Momentos",
        subtitle: "",
        description: "Regala joyas de oro y plata a tus seres queridos con un mensaje de amor, amor, amor y un toque especial de amor.",
        badge: "Creaciones Exclusivas",
        feature: "Diseño a medida",
        subfeature: "Convierte tu visión en realidad"
    },
    {
        title: "Servicio de Taller",
        subtitle: "",
        description: "Cuenta con nosotros para restaurar y reparar tus joyas de oro y plata con la delicadeza y precisión que merecen.",
        badge: "Servicio Especializado",
        feature: "Experiencia artesanal",
        subfeature: "Más de 20 años restaurando belleza"
    }
 
];

const services = [
    {
        title: "Somos fabricantes",
        subtitle: "",
        description: "Creamos piezas únicas adaptadas a tu estilo. Cada joya es diseñada exclusivamente para ti con atención al detalle.",
        badge: "Creaciones Exclusivas",
        feature: "Diseño a medida",
        subfeature: "Convierte tu visión en realidad"
    },
    {
        title: "Servicio de Taller",
        subtitle: "",
        description: "Cuenta con nosotros para restaurar y reparar tus joyas de oro y plata con la delicadeza y precisión que merecen.",
        badge: "Servicio Especializado",
        feature: "Experiencia artesanal",
        subfeature: "Más de 20 años restaurando belleza"
    }
    // ,

    // {
    //     title: "Restauración de Joyas",
    //     subtitle: "Restauración",
    //     description: "Devolvemos el esplendor original a tus joyas más preciadas mediante técnicas tradicionales de joyería.",
    //     badge: "Cuidado Experto",
    //     feature: "Restauración profesional",
    //     subfeature: "Preservamos tu legado familiar"
    // }
];

export function ServicesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const currentService = services[currentIndex];
    const currentService2 = services2[currentIndex];

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
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 via-gray-100/30 to-transparent rounded-2xl transform rotate-3 transition-all duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-tl from-gray-300/30 via-gray-200/20 to-transparent rounded-2xl transform -rotate-3 transition-all duration-500"></div>
                            <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl flex items-center justify-center transition-all duration-500">
                                <div className="text-center space-y-4 p-8">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg">
                                        <Sparkles className="w-10 h-10 text-white" />
                                    </div>
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

                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 via-gray-100/30 to-transparent rounded-2xl transform rotate-3 transition-all duration-500"></div>

                            <div className="absolute inset-0 bg-gradient-to-tl from-gray-300/30 via-gray-200/20 to-transparent rounded-2xl transform -rotate-3 transition-all duration-500">
                            </div>

                            <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl flex items-center justify-center transition-all duration-500">

                                <Image
                                    src="/caja_regalo.png"
                                    alt="Caja de regalo"
                                    width={600}
                                    height={200}
                                    className="object-cover object-center"


                                />


                                {/* <div className="text-center space-y-4 p-8">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg">
                                        <Sparkles className="w-10 h-10 text-white" /> </div>
                                    <p className="text-gray-800 font-serif italic text-lg">
                                        {currentService.feature}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {currentService.subfeature}
                                    </p>
                                </div> */}
                            </div>
                        </div>




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

                    </div>
                </div>

                {/* Decoración de fondo sutil */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl -z-10"></div>
            </section>

        </>




    );
}