import React from 'react';
import { Subtitle } from './ui/subtitle';
import { BentoGridSecondDemo } from './bento-grid-demo';

interface Category {
  name: string;
  icon: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = () => {
  return (
    <section className="w-full  py-10 my-10 flex justify-center flex-col" id="categories-section">
      <Subtitle subtitle='Categorias' paragraph='Variedad de productos' />
      <BentoGridSecondDemo />
    </section>
  );
};

export default CategorySection;
