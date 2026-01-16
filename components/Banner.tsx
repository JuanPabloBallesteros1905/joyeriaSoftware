
'use client'


export function PlansSection() {




    const planes = [
        {
            "id": 1,
            "title": "Plan Separe",
            "descripcion": "Separa tu prenda favorita con un porcentaje del valor total y paga el resto en cómodas cuotas."
        },
        {
            "id": 2,
            "title": "Plan Ahorro",
            "descripcion": "Ahorra mes a mes hasta completar el valor de la joya que deseas. Al finalizar, la prenda es tuya."
        }
    ]




    return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <h3 className="pl-10 pt-10 text-lg sm:text-xl md:text-2xl font-semibold text-[#28241e]  sm:mb-6 md:mb-8">Nuestros planes</h3>

        <div className="flex justify-between flex-col md:flex-row">

            {planes.map((plan) => (
                <JewelryPlanCard key={plan.id} title={plan.title} descripcion={plan.descripcion} />
            ))}





        </div>


        
            <InstagramWidgetSimple />
        







    </div>

}



















// En tu componente
// components/InstagramWidgetSimple.jsx


import { useEffect, useState } from 'react';

declare global {
    interface Window {
        iFrameResize?: (options: unknown, selector: string) => void;
    }
}

export default function InstagramWidgetSimple() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js';
        script.async = true;
        script.onload = () => {
            if (window.iFrameResize) {
                window.iFrameResize({}, '#instagram-iframe');
            }
        };
        document.body.appendChild(script);
    }, []);

    return (
        <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Síguenos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Instagram</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Descubre nuestras colecciones exclusivas y el detrás de escena de la joyería fina italiana
                    </p>
                </div>

                {/* Widget Container */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Widget Header */}
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                        
                            
                        </div>
                    </div>

                    {/* Iframe */}
                    <div className="relative min-h-[500px]">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                                    <p className="text-gray-600">Cargando feed...</p>
                                </div>
                            </div>
                        )}

                        <iframe
                            id="instagram-iframe"
                            src="https://b25ed91168ed4e58a207b769c8d84cc2.elf.site"
                            onLoad={() => setIsLoading(false)}
                            style={{
                                border: 'none',
                                width: '100%',
                                minHeight: '500px',
                                opacity: isLoading ? 0 : 1,
                                transition: 'opacity 0.3s'
                            }}
                            title="Instagram"
                        />
                    </div>

                    {/* Footer */}
                   
                </div>

                {/* CTA */}
               
            </div>
        </section>
    );
}



interface JewelryPlanCardProps {
    "title": string,
    "descripcion": string
}



function JewelryPlanCard({ title, descripcion }: JewelryPlanCardProps) {




    return (
        <div className="mb-20 m-10 ax-w-sm bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Imagen/Header visual */}
            <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 border-2 border-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-light text-gray-700">
                            {/* {planType === "separe" ? "%" : "$"} */}
                        </span>
                    </div>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-6">
                {/* Categoría */}
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {/* {plan.category} */}
                </p>

                {/* Título */}
                <h2 className="text-xl font-light text-gray-900 mb-4">
                    {title}
                </h2>

                {/* Descripción */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {descripcion}
                </p>

                {/* Características */}
                {/* <div className="space-y-2 text-sm text-gray-600 mb-6 border-t border-gray-100 pt-6">
                    {plan.features.map((feature, index) => (
                        <p key={index}>{feature}</p>
                    ))}
                </div> */}

                {/* Botón */}
                <button className="w-full py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors duration-200">
                    COMPRAR
                </button>

                {/* Link adicional */}
                <button className="w-full mt-3 text-gray-600 text-xs tracking-wider hover:text-gray-900 transition-colors">
                    MÁS INFORMACIÓN
                </button>
            </div>
        </div>
    );
}





function CustomCard() {
    return (
        <div className="max-w-sm bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Imagen */}
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                    alt="Collar de diamantes"
                />
            </div>

            {/* Contenido */}
            <div className="p-6">
                {/* Categoría */}
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Collares
                </p>

                {/* Título */}
                <h2 className="text-xl font-light text-gray-900 mb-4">
                    Collar Éternel
                </h2>

                {/* Detalles */}
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <p>Oro blanco 18k</p>
                    <p>Diamantes 0.75 ct</p>
                    <p>Certificado GIA</p>
                </div>

                {/* Precio */}
                <p className="text-2xl font-light text-gray-900 mb-6">
                    $2,499
                </p>

                {/* Botón */}
                <button className="w-full py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors duration-200">
                    AÑADIR AL CARRITO
                </button>
            </div>
        </div>
    );
}
