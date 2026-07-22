import { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Subtitle } from './ui/subtitle';
import Image from 'next/image';
import { Product } from '../types';
import { Search, RefreshCw, ShoppingCart, Tag } from 'lucide-react';

interface ProductPageProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ products, addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.category && set.add(p.category.trim()));
    return ['TODOS', ...Array.from(set)];
  }, [products]);

  // Filter products based on search and selected category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.capacity.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'TODOS' || product.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  const isFilteringActive = searchQuery !== '' || selectedCategory !== 'TODOS';
  const displayedProducts = showAllProducts || isFilteringActive ? filteredProducts : filteredProducts.slice(0, 10);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('TODOS');
  };

  return (
    <main className="flex-1 flex justify-center" id="products">
      <section className="w-full flex justify-center flex-col items-center">
        <div className="container px-4 md:px-6">
          <Subtitle subtitle="Catálogo Mayorista de Envases" paragraph="Explora nuestra variedad de envases de PEAD, PVC y PET directo de fábrica" />

          {/* Filter Bar & Search Controls */}
          <div className="mb-8 p-4 md:p-6 rounded-xl border border-hairline bg-surface-1/60 backdrop-blur-md space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Live Search Input */}
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
                <input
                  type="text"
                  placeholder="Buscar por envase, material (PEAD, PVC, PET) o capacidad..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-2 border border-hairline text-ink placeholder:text-ink-subtle text-sm focus:outline-none focus:border-primary-lavender transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-muted hover:text-ink"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {/* Reset Button */}
              {isFilteringActive && (
                <Button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink bg-surface-2 border border-hairline px-3 py-2 rounded-md"
                >
                  <RefreshCw className="h-3.5 w-3.5" /> Resetear filtros
                </Button>
              )}
            </div>

            {/* Category Chips Filter */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-hairline/50">
              <span className="text-xs font-semibold text-ink-muted flex items-center gap-1 mr-2">
                <Tag className="h-3.5 w-3.5" /> Categoría:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all border ${
                    selectedCategory === cat
                      ? 'bg-primary-lavender text-ink border-primary-lavender shadow-sm'
                      : 'bg-surface-2 text-ink-muted border-hairline hover:border-hairline-strong hover:text-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>


          </div>

          {/* Results Summary Bar */}
          <div className="flex justify-between items-center mb-4 px-1">
            <p className="text-xs md:text-sm text-ink-muted">
              Mostrando <span className="font-bold text-ink">{displayedProducts.length}</span> de <span className="font-bold text-ink">{filteredProducts.length}</span> envases encontrados
            </p>
            {displayedProducts.length === 0 && (
              <p className="text-xs text-primary-lavender">Sin coincidencias para los filtros seleccionados.</p>
            )}
          </div>

          {/* Product Grid */}
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {displayedProducts.map((product) => (
              <div key={product.id}>
                <Card className="h-full hover:bg-surface-2 hover:border-hairline-strong group transition-colors overflow-hidden flex flex-col justify-between">
                  <CardContent className="h-full flex-1 flex flex-col justify-between !p-0">
                    <div className="relative overflow-hidden bg-surface-2">
                      <Image
                        src={product.image || '/placeholder.jpg'}
                        alt={`${product.name} envase plástico ${product.material} ${product.capacity} por mayor - Plásticos Santa María`}
                        className="w-full h-64 lg:h-[22rem] group-hover:scale-105 transition duration-300 object-cover border-b border-hairline"
                        width={300}
                        height={300}
                      />
                      {/* Material Badge */}
                      <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-primary-lavender border border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                        {product.material}
                      </span>
                    </div>

                    <div className="px-3 py-4 flex flex-col justify-between flex-1">
                      <div>
                        <h2 className="text-sm md:text-base font-bold mb-2 text-ink line-clamp-1">{product.name}</h2>
                        
                        <div className="space-y-1 text-xs text-ink-muted mb-4">
                          <p className="flex justify-between border-b border-hairline/40 pb-1">
                            <span className="font-medium text-ink-subtle">Categoría:</span>
                            <span className="font-semibold text-ink line-clamp-1">{product.category}</span>
                          </p>
                          <p className="flex justify-between border-b border-hairline/40 pb-1">
                            <span className="font-medium text-ink-subtle">Capacidad:</span>
                            <span className="font-semibold text-ink">{product.capacity}</span>
                          </p>
                          <p className="flex justify-between border-b border-hairline/40 pb-1">
                            <span className="font-medium text-ink-subtle">Color:</span>
                            <span className="font-semibold text-ink">{product.color}</span>
                          </p>
                          <p className="flex justify-between border-b border-hairline/40 pb-1">
                            <span className="font-medium text-ink-subtle">Peso std:</span>
                            <span className="font-semibold text-ink">{product.weight || 'Std'} grs</span>
                          </p>
                          <p className="flex justify-between pt-0.5">
                            <span className="font-medium text-ink-subtle">Pack bulto:</span>
                            <span className="font-semibold text-ink">{product.quantity} u</span>
                          </p>
                        </div>
                      </div>

                      <Button
                        onClick={() => addToCart(product)}
                        className="text-xs w-full gap-1.5 inline-flex items-center justify-center text-ink bg-primary-lavender hover:bg-primary-hover focus:bg-primary-focus transition-colors shadow-none rounded-md py-2 border border-hairline font-semibold"
                      >
                        <ShoppingCart className="h-3.5 w-3.5" />
                        Añadir a Cotización
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {!isFilteringActive && filteredProducts.length > 10 && (
            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => setShowAllProducts(!showAllProducts)}
                className="inline-flex items-center justify-center text-ink bg-surface-2 hover:bg-surface-3 transition rounded-md py-3 px-8 border border-hairline font-semibold text-sm shadow-sm"
              >
                {showAllProducts ? 'Ver menos productos' : `Ver todos los envases (${filteredProducts.length})`}
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
