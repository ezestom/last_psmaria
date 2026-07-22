import React from "react";
import { Button } from "@/app/components/ui/button";
import logo from "/public/logo-azul.png";
import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import { MyDrawer } from "./MyDrawer/MyDrawer";
import Link from "next/link";
import { CartItem } from "@/app/types";

interface HeaderProps {
	cart: CartItem[];
	isCartOpen: boolean;
	setIsCartOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ cart, isCartOpen, setIsCartOpen }) => {
	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<header
			className="fixed top-0 inset-x-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-300"
			id="navbar">
			<div className="container px-4 md:px-6 flex h-12 items-center justify-between mx-auto relative">
				<div className="flex items-center gap-8">
					<Link
						className="flex items-center space-x-2.5 group"
						href="/#">
						<Image
							src={logo}
							className="h-9 w-9 object-contain group-hover:scale-105 transition-transform"
							alt="logo image"
						/>

						<div className="hidden flex-col-reverse text-base items-start sm:flex font-black leading-3 text-ink">
							Santa María{" "}
							<span className="text-[11px] font-medium text-ink-subtle">
								Plásticos
							</span>
						</div>
					</Link>

					<nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
						<Link
							className="transition-colors hover:bg-white/10 px-3.5 py-1.5 rounded-full text-ink-muted hover:text-white"
							href="/#products">
							Productos
						</Link>
						<Link
							className="transition-colors hover:bg-white/10 px-3.5 py-1.5 rounded-full text-ink-muted hover:text-white"
							href="/#deals">
							Ofertas
						</Link>
						<Link
							className="transition-colors hover:bg-white/10 px-3.5 py-1.5 rounded-full text-ink-muted hover:text-white"
							href="/about">
							Nosotros
						</Link>
					</nav>
				</div>

				<div className="flex items-center gap-3">
					<Button
						variant="outline"
						size="icon"
						className="relative bg-white/10 hover:bg-white/15 border border-white/15 text-white hover:text-white rounded-full h-9 w-9 transition-colors shadow-none"
						onClick={() => setIsCartOpen(!isCartOpen)}>
						<ShoppingCartIcon className="h-4 w-4" />
						{totalItems > 0 && (
							<span className="absolute -top-1.5 -right-1.5 bg-primary-lavender text-white text-[10px] font-bold rounded-full h-5 min-w-5 flex items-center justify-center px-1 shadow-md border border-black animate-pulse">
								{totalItems}
							</span>
						)}
					</Button>

					<div className="block md:hidden">
						<MyDrawer />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
