



import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Decoración de fondo sutil */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    
                    {/* Columna 1: Sobre nosotros */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-serif italic text-gray-100">
                            Nuestra Joyería
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Creando piezas únicas y atemporales con dedicación artesanal desde hace más de dos décadas.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                            <span className="text-sm text-gray-400">Hecho en Colombia con</span>
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        </div>
                    </div>

                    {/* Columna 2: Enlaces rápidos */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-gray-100">
                            Enlaces
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                                    Colecciones
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                                    Sobre nosotros
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-gray-100">
                            Contacto
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    +57 123 456 7890
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    contacto@joyeria.com
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    Santa Marta, Colombia
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Redes sociales */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-gray-100">
                            Síguenos
                        </h4>
                        <p className="text-gray-400 text-sm">
                            Mantente al día con nuestras últimas creaciones
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a 
                                href="#" 
                                className="p-2.5 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-gray-300" />
                            </a>
                            <a 
                                href="#" 
                                className="p-2.5 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-gray-300" />
                            </a>
                            <a 
                                href="#" 
                                className="p-2.5 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5 text-gray-300" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Separador */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © 2024 Joyería. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Política de privacidad
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Términos y condiciones
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}