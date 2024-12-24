
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Subtitle } from './ui/subtitle';
import Image from 'next/image';
import { Deal } from '../types';

interface DealsSectionProps {
  deals: Deal[];
  addToCart: (deal: Deal) => void;
}

const DealsSection: React.FC<DealsSectionProps> = ({ deals, addToCart }) => {
  const [showAllDeals, setShowAllDeals] = React.useState(false);

  // Filtrar solo los productos con isOffer: true
  const filteredDeals = deals.filter((deal) => deal.isOffer);

  // Limitar las ofertas según el estado de "mostrar todo"
  const displayedDeals = showAllDeals ? filteredDeals : filteredDeals.slice(0, 2);

  return (
    <main className="flex-1 flex justify-center" id="deals">
      <section className="w-full py-10 md:py-10 lg:py-10 flex justify-center flex-col items-center">
        <div className="container px-4 md:px-6">
          <Subtitle subtitle="Ofertas" paragraph="Lista de las ofertas por cantidad" />

          {/* Mostrar un mensaje si no hay ofertas disponibles */}
          {filteredDeals.length === 0 ? (
            <p className="text-center text-gray-500">No hay ofertas disponibles en este momento.</p>
          ) : (
            <div className="grid gap-1 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              {/* Mapeo de productos filtrados */}
              {displayedDeals.map((deal) => (
                <div key={deal.id}>
                  <Card className='h-full'>
                    <CardContent className="p-2 md:p-4 h-full flex-1 flex flex-col justify-between">
                      <Image
                        width={300}
                        height={300}
                        src={deal.image || '/placeholder.png'}
                        alt={deal.name || 'Producto'}
                        className="w-full h-48 object-cover mb-1 md:mb-2 rounded-md border border-gray-200"
                      />
                      <h2 className="text-base md:text-xl font-bold mb-1 md:mb-2">{deal.name}</h2>
                      <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                        <span className="font-semibold">Categoría: </span>
                        {deal.category}
                      </p>
                      <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                        <span className="font-semibold">Material: </span>
                        {deal.material}
                      </p>
                      <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                        <span className="font-semibold">Capacidad: </span>
                        {deal.capacity}
                      </p>
                      <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                        <span className="font-semibold">Color: </span>
                        {deal.color}
                      </p>
                      <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                        <span className="font-semibold">Peso: </span>
                        {deal.weight}
                      </p>
                      <p className="text-muted-foreground flex text-sm gap-1 mb-1 md:mb-2">
                        <span className="font-semibold">Compra mínima: </span>
                        {deal.quantity}
                      </p>
                      <Button
                        onClick={() => addToCart(deal)}
                        className="w-full gap-1 inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1"
                      >
                        Agregar al carrito
                        <span className="text-xs"> - para cotizar </span>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}

              {/* Botón para alternar entre mostrar todas las ofertas o solo algunas */}
              <Card>
                <Button
                  onClick={() => setShowAllDeals(!showAllDeals)}
                  className={`w-full h-full inline-flex items-center justify-center ${showAllDeals ? 'bg-black text-white' : 'bg-transparent text-black'
                    } hover:bg-black hover:text-white shadow-md transition rounded-md py-2`}
                >
                  {showAllDeals ? 'Ver menos ofertas' : 'Ver todas las ofertas'}
                </Button>
              </Card>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default DealsSection;
