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
        <div className="container px-2">
          <Subtitle subtitle="Productos" paragraph="Lista completa de nuestros productos" />

          <div className="grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {displayedProducts.map((product) => (
              <div className='' key={product.id}>
                <Card className='h-full hover:bg-gray-200 group transition-colors overflow-hidden'>
                  <CardContent className="h-full flex-1 flex flex-col justify-between !p-0 ">
                    <Image
                      src={product.image || "/placeholder.jpg"}
                      alt={product.name || 'Producto'}
                      className="w-full h-80 lg:h-[25rem] group-hover:scale-110 group-hover:-translate-y-1 transition duration-300 object-cover  border border-gray-200"
                      width={300}
                      height={300}
                    />
                    <div className='px-2 py-4'>
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
                        {product.weight || "std"} grs
                      </p>
                      <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                        <span className="font-semibold">Pack: </span>
                        {product.quantity}
                      </p>
                      <Button
                        onClick={() => addToCart(product)}
                        className="text-xs md:text-sm w-full gap-1 inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1"
                      >
                        Agregar al carrito
                        <span className="text-xs"> - para cotizar </span>
                      </Button>
                    </div>
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
