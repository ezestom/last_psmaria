
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Subtitle } from './ui/subtitle';
import Image from 'next/image';
import { Deal } from '../types';
import { ShoppingCart } from 'lucide-react';

interface DealsSectionProps {
  deals: Deal[];
  addToCart: (deal: Deal) => void;
}

const DealsSection: React.FC<DealsSectionProps> = ({ deals, addToCart }) => {
  const [showAllDeals, setShowAllDeals] = React.useState(false);

  // Filtrar solo los productos con isOffer: true
  const filteredDeals = deals.filter((deal) => deal.isOffer);

  // Limitar las ofertas según el estado de "mostrar todo"
  const displayedDeals = showAllDeals ? filteredDeals : filteredDeals.slice(0, 5);

  return (
    <main className="flex-1 flex justify-center" id="deals">
      <section className="w-full py-10 md:py-10 lg:py-10 flex justify-center flex-col items-center">
        <div className="container px-2">
          <Subtitle subtitle="Ofertas" paragraph="Lista de las ofertas por cantidad" />

          {/* Mostrar un mensaje si no hay ofertas disponibles */}
          {filteredDeals.length === 0 ? (
            <p className="text-center text-ink-muted">No hay ofertas disponibles en este momento.</p>
          ) : (
            <>
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                {displayedDeals.map((deal) => (
                  <div key={deal.id}>
                    <Card className="h-full hover:bg-surface-2 hover:border-hairline-strong group transition-colors overflow-hidden flex flex-col justify-between">
                      <CardContent className="h-full flex-1 flex flex-col justify-between !p-0">
                        <div className="relative overflow-hidden bg-surface-2">
                          <Image
                            src={deal.image || '/placeholder.jpg'}
                            alt={`${deal.name} envase plástico ${deal.material} ${deal.capacity} por mayor - Plásticos Santa María`}
                            className="w-full h-64 lg:h-[22rem] group-hover:scale-105 transition duration-300 object-cover border-b border-hairline"
                            width={300}
                            height={300}
                          />
                          {/* Material Badge */}
                          <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-primary-lavender border border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                            {deal.material}
                          </span>
                        </div>

                        <div className="px-3 py-4 flex flex-col justify-between flex-1">
                          <div>
                            <h2 className="text-sm md:text-base font-bold mb-2 text-ink line-clamp-1">{deal.name}</h2>

                            <div className="space-y-1 text-xs text-ink-muted mb-4">
                              <p className="flex justify-between border-b border-hairline/40 pb-1">
                                <span className="font-medium text-ink-subtle">Categoría:</span>
                                <span className="font-semibold text-ink line-clamp-1">{deal.category}</span>
                              </p>
                              <p className="flex justify-between border-b border-hairline/40 pb-1">
                                <span className="font-medium text-ink-subtle">Capacidad:</span>
                                <span className="font-semibold text-ink">{deal.capacity}</span>
                              </p>
                              <p className="flex justify-between border-b border-hairline/40 pb-1">
                                <span className="font-medium text-ink-subtle">Color:</span>
                                <span className="font-semibold text-ink">{deal.color}</span>
                              </p>
                              <p className="flex justify-between border-b border-hairline/40 pb-1">
                                <span className="font-medium text-ink-subtle">Peso std:</span>
                                <span className="font-semibold text-ink">{deal.weight || 'Std'} grs</span>
                              </p>
                              <p className="flex justify-between pt-0.5">
                                <span className="font-medium text-ink-subtle">Pack bulto:</span>
                                <span className="font-semibold text-ink">{deal.quantity} u</span>
                              </p>
                            </div>
                          </div>

                          <Button
                            onClick={() => addToCart(deal)}
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
              {filteredDeals.length > 5 && (
                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={() => setShowAllDeals(!showAllDeals)}
                    className="inline-flex items-center justify-center text-ink bg-surface-2 hover:bg-surface-3 transition rounded-md py-3 px-8 border border-hairline font-semibold text-sm shadow-sm"
                  >
                    {showAllDeals ? 'Ver menos ofertas' : `Ver todas las ofertas (${filteredDeals.length})`}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default DealsSection;
