'use client'
import { Menu, X, Instagram } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

export function NavbarJoye() {
    const [isOpen, setIsOpen] = useState(false)

    const itemsNav = [
        { "label": "Planes", "href": "/joyeria" },
        { "label": "Clientes", "href": "/joyefrisa" },
        { "label": "Tienda", "href": "/joyeaisa" },
        { "label": "Categorias", "href": "/joyseria" },
    ]

    return (
        <nav className="fixed top-0 z-50 w-full bg-white/95 text-gray-800 backdrop-blur-md shadow-md border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 sm:h-20 items-center justify-between">
                    
                    {/* Logo/Title - Centered on mobile, left on desktop */}
                    <Link href="/" className="flex-shrink-0 order-2 md:order-1">
                        <h1 className="text-xl sm:text-2xl font-bold  bg-clip-text  tracking-tight">
                            Joyería Italiana
                        </h1>
                    </Link>

                    {/* Desktop Navigation - Center */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2 order-2">
                        {itemsNav.map((item) => (
                            <Link 
                                href={item.href} 
                                className="px-4 py-2 rounded-lg text-sm lg:text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200" 
                                key={item.href}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right section - Instagram and Menu */}
                    <div className="flex items-center gap-3 sm:gap-4 order-3">
                        <Link 
                            href="https://www.instagram.com/joyeria.italiana98/?utm_source=qr" 
                            target="_blank"
                            className="p-2 rounded-full hover:bg-amber-50 transition-colors duration-200 group"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 group-hover:text-amber-600 transition-colors" />
                        </Link>

                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 text-gray-700" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-700" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button placeholder for spacing on left */}
                    <div className="md:hidden w-10 order-1" />
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-gray-100 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="space-y-1">
                            {itemsNav.map((item) => (
                                <Link 
                                    href={item.href} 
                                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200" 
                                    key={item.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}