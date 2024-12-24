import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Subtitle } from './ui/subtitle';
import Image from 'next/image';
import { Product } from '../types';

interface ProductPageProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ products, addToCart }) => {
  // Estado para controlar si se muestran todos los productos
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Determina qué productos mostrar (limitados o todos)
  const displayedProducts = showAllProducts ? products : products.slice(0, 5);

  return (
    <main className="flex-1 flex justify-center" id="products">
      <section className="w-full flex justify-center flex-col items-center">
        <div className="container px-4 md:px-6">
          <Subtitle subtitle="Productos" paragraph="Lista completa de nuestros productos" />

          <div className="grid gap-1 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {displayedProducts.map((product) => (
              <div key={product.id}>
                <Card className='h-full '>
                  <CardContent className="p-2 md:p-4 h-full flex-1 flex flex-col justify-between">
                    <Image
                      width={300}
                      height={300}
                      src={product.image || '/placeholder.png'}
                      alt={product.name || 'Producto'}
                      className="w-full h-48 object-cover mb-1 md:mb-2 rounded-md border border-gray-200"
                    />
                    <h2 className="text-base md:text-xl font-bold mb-1 md:mb-2">{product.name}</h2>
                    <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                      <span className="font-semibold">Categoría: </span>
                      {product.category}
                    </p>
                    <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                      <span className="font-semibold">Material: </span>
                      {product.material}
                    </p>
                    <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                      <span className="font-semibold">Capacidad: </span>
                      {product.capacity}
                    </p>
                    <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                      <span className="font-semibold">Color: </span>
                      {product.color}
                    </p>
                    <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                      <span className="font-semibold">Peso: </span>
                      {product.weight}
                    </p>
                    <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                      <span className="font-semibold">Compra mínima: </span>
                      {product.quantity}
                    </p>
                    <Button
                      onClick={() => addToCart(product)}
                      className="text-xs md:text-sm w-full gap-1 inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1"
                    >
                      Agregar al carrito
                      <span className="text-xs"> - para cotizar </span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}

            <Card>
              <Button
                onClick={() => setShowAllProducts(!showAllProducts)} // Alterna entre mostrar todos y limitar
                className="w-full h-full inline-flex items-center justify-center text-black hover:text-white bg-transparent hover:bg-black shadow-md transition rounded-md py-2"
              >
                {showAllProducts ? 'Ver menos productos' : 'Ver todos los productos'}
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
