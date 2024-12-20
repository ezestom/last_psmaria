
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Subtitle } from './ui/subtitle';
import Image, { StaticImageData } from 'next/image';

interface Deal {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: StaticImageData;
  tag: string;
}

interface DealsSectionProps {
  deals: Deal[];
  addToCart: (deal: Deal) => void;
}

const DealsSection: React.FC<DealsSectionProps> = ({ deals, addToCart }) => {
  return (
    <section className="w-full mt-10 flex justify-center" id="deals">
      <div className="container px-4 md:px-6 ">
        <Subtitle subtitle='Productos' paragraph='Contactanos por mas productos' />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {deals.map((deal) => (
            <div key={deal.id} className="group">
              <Card className="transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <CardContent className="p-4 flex flex-col justify-between h-full">
                  <div className="flex-1">
                    <Image
                      width={300}
                      height={300}
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-56 object-cover mb-4 rounded-lg transition-transform duration-300 ease-in-out "
                    />
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">{deal.name}</h3>
                      <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                        {deal.tag}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 line-through">
                        ${deal.originalPrice.toFixed(2)}
                      </span>
                      <span className="text-2xl font-bold">
                        ${deal.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <Button onClick={() => addToCart(deal)} className="mt-4 inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 ">
                    Cotizar precio
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
