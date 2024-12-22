// types.ts
import { StaticImageData } from "next/image";

export interface Product {
	id?: number;
	name?: string;
	image?: string | StaticImageData; // O el tipo específico para tu imagen
	category?: string;
	material?: string;
	capacity?: string;
	color?: string;
	weight?: number | string;
	quantity?: number;
	// price?: number;
	// originalPrice?: number;
	isOffer?: boolean;
}

export interface Deal {
	id?: number;
	name?: string;
	image?: string | StaticImageData; // O el tipo específico para tu imagen
	category?: string;
	material?: string;
	capacity?: string;
	color?: string;
	weight?: number | string;
	quantity?: number;
	// price?: number;
	// originalPrice?: number;
	isOffer?: boolean;
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
