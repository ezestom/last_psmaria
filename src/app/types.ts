// types.ts
import { StaticImageData } from "next/image";

export interface Product {
	id?: number;
	name?: string;
	price?: number;
	image?: string | StaticImageData; // O el tipo específico para tu imagen
	originalPrice?: number;
	tag?: string;
	quantity?: number;
}

export interface CartItem extends Product {
	quantity: number;
}

export interface HeaderProps {
	setCurrentPage: (page: "landing" | "products") => void;
	cart: CartItem[];
	setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
	isCartOpen: boolean;
	setIsCartOpen: (isOpen: boolean) => void;
}

// Y en los componentes que reciben productos:
export interface ProductPageProps {
	products: Product[];
	addToCart: (product: Product) => void;
}

export interface DealsSectionProps {
	deals: Product[];
   addToCart: (product: Product) => void;
}
