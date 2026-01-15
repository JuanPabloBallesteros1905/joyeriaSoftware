

'use client'
import { use, useEffect, useEffectEvent, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

import { categoriasServices } from '@/services/categorias_services';
import { productosServices } from '@/services/productos_services';

import { CategoriaResponse } from '@/models/categorias_model';
import { ProductosResponse } from '@/models/productos_model';
import { getTargetTriple } from 'next/dist/build/swc/generated-native';
import { get } from 'http';






export default function Catalgo() {















  return (
    <>
      <JewelryCatalog />
    </>
  )
}







const JewelryCatalog = () => {

  const [categoriasState, SetCategoriasState] = useState<CategoriaResponse[]>();
  const [productosState, SetProductosState] = useState<ProductosResponse[]>();


  const getAllProducts = async (): Promise<ProductosResponse[]> => {
    try {

      const response = await productosServices.getAllProducts();
      const productos: ProductosResponse[] = response.data;

      SetProductosState(productos);
      return productos;






    }
    catch (error) {
      console.error("Error fetching productos:", error);
      throw error;
    }
  }


  const getCategorias = async (): Promise<CategoriaResponse[]> => {
    try {
      const response = await categoriasServices.getCategorias();
      const categorias: CategoriaResponse[] = response.data;

      SetCategoriasState(categorias);



      return categorias;
    } catch (error) {
      console.error("Error fetching categorias:", error);
      throw error;
    }
  };



  useEffect(() => {
    getCategorias();
    getAllProducts();



  }, []);



  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);


  // const products = [
  //   {
  //     id: 1,
  //     name: 'Anillo de Diamante Solitario',
  //     category: 'Anillos',
  //     material: 'oro-blanco',
  //     price: 2500,
  //     image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop',
  //     description: 'Elegante anillo con diamante central'
  //   },
  //   {
  //     id: 2,
  //     name: 'Collar de Perlas Clásico',
  //     category: 'Collares',
  //     material: 'perlas',
  //     price: 1800,
  //     image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
  //     description: 'Collar de perlas naturales'
  //   },
  //   {
  //     id: 3,
  //     name: 'Aretes de Esmeralda',
  //     category: 'Aretes',
  //     material: 'oro-amarillo',
  //     price: 3200,
  //     image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
  //     description: 'Aretes con esmeraldas naturales'
  //   },
  //   {
  //     id: 4,
  //     name: 'Pulsera de Oro Rosa',
  //     category: 'Pulseras',
  //     material: 'oro-rosa',
  //     price: 1500,
  //     image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
  //     description: 'Pulsera delicada en oro rosa 18k'
  //   },
  //   {
  //     id: 5,
  //     name: 'Anillo de Zafiro',
  //     category: 'Anillos',
  //     material: 'platino',
  //     price: 4200,
  //     image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=500&h=500&fit=crop',
  //     description: 'Anillo con zafiro azul y diamantes'
  //   },
  //   {
  //     id: 6,
  //     name: 'Collar Colgante Diamante',
  //     category: 'Collares',
  //     material: 'oro-blanco',
  //     price: 2800,
  //     image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
  //     description: 'Colgante de diamante en cadena fina'
  //   },
  //   {
  //     id: 7,
  //     name: 'Aretes Tipo Argolla',
  //     category: 'Aretes',
  //     material: 'oro-amarillo',
  //     price: 980,
  //     image: 'https://images.unsplash.com/photo-1588444650341-aa1bb09e2cf0?w=500&h=500&fit=crop',
  //     description: 'Argollas clásicas en oro 14k'
  //   },
  //   {
  //     id: 8,
  //     name: 'Brazalete de Diamantes',
  //     category: 'Pulseras',
  //     material: 'platino',
  //     price: 4800,
  //     image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop',
  //     description: 'Brazalete con diamantes engastados'
  //   }
  // ];


  const filteredProducts = productosState?.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.nombre.toString() === selectedCategory;
    const matchesMaterial = selectedMaterial === 'all' || product.nombre.toString() === selectedMaterial;
    const matchesPrice = product.precio >= priceRange[0] && product.precio <= priceRange[1];
    // const matchesSearch = product.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesMaterial && matchesPrice;
    // && matchesMaterial && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✦</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-light tracking-wide text-gray-800">
                Creaciones Exclusivas
              </h1>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`
            ${sidebarOpen ? 'block' : 'hidden'} lg:block
            w-full lg:w-64 flex-shrink-0
          `}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-light text-gray-800">Filtros</h2>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedMaterial('all');
                    setPriceRange([0, 2000000]);
                    setSearchTerm('');
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Limpiar
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar joyas..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Categoría</label>
                <div className="space-y-2">
                  {categoriasState?.map(cat => (
                    <label key={cat.id} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat.nombre} //aqui se mandaba en value el id porque asi estaba seleccionado y se almaceno en selectedCategory
                        checked={selectedCategory === cat.nombre}
                        onChange={(e) => {

                          console.log(e.target.value);
                          setSelectedCategory(e.target.value)
                        }
                        }
                        className="w-4 h-4 text-gray-800 focus:ring-gray-800"
                      />
                      <span className="ml-2 text-sm text-gray-700">{cat.nombre}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Material</label>
                {/* <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        value={mat.value}
                        checked={selectedMaterial === mat.value}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                        className="w-4 h-4 text-gray-800 focus:ring-gray-800"
                      />
                      <span className="ml-2 text-sm text-gray-700">{mat.label}</span>
                    </label>
                  ))}
                </div> */}
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Precio: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-gray-800 mb-2">
                Nuestro Catálogo
              </h2>
              <p className="text-gray-600">
                {filteredProducts?.length} {filteredProducts?.length === 1 ? 'pieza encontrada' : 'piezas encontradas'}
              </p>
            </div>

            {filteredProducts?.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <p className="text-gray-500">No se encontraron joyas con los filtros seleccionados</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts?.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={'https://via.placeholder.com/300'}
                        alt={product.nombre}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-light text-lg text-gray-800 mb-1">
                        {product.nombre}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {product.descripcion}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-light text-gray-800">
                          ${product.precio.toLocaleString()}
                        </span>
                        <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors">
                          Ver detalles
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

