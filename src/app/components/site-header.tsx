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
			className="sticky top-0 z-50 w-full bg-canvas border-b border-hairline backdrop-blur supports-[backdrop-filter]:bg-canvas/60 py-2"
			id="navbar">
			<div className="container px-4 md:px-6 flex h-14 items-center justify-between mx-auto relative">
				<div className="flex items-center gap-6">
					<Link
						className="flex items-center space-x-2"
						href="/#">
						<Image
							src={logo}
							className="h-10 w-10 object-contain"
							alt="logo image"
						/>

						<div className="hidden flex-col-reverse text-base items-start sm:flex font-black leading-3 text-ink">
							Santa María{" "}
							<span className="text-xs text-primary-lavender font-medium">
								Plásticos
							</span>
						</div>
					</Link>

					<nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
						<Link
							className="transition-colors hover:bg-surface-1 border border-transparent hover:border-hairline px-3 py-1.5 rounded-md text-ink-muted hover:text-ink"
							href="/#products">
							Productos
						</Link>
						<Link
							className="transition-colors hover:bg-surface-1 border border-transparent hover:border-hairline px-3 py-1.5 rounded-md text-ink-muted hover:text-ink"
							href="/#deals">
							Ofertas
						</Link>
						<Link
							className="transition-colors hover:bg-surface-1 border border-transparent hover:border-hairline px-3 py-1.5 rounded-md text-ink-muted hover:text-ink"
							href="/about">
							Nosotros
						</Link>
					</nav>
				</div>

				<div className="flex items-center gap-3">
					<Button
						variant="outline"
						size="icon"
						className="relative bg-surface-1 hover:bg-surface-2 border border-hairline text-ink hover:text-ink rounded-md transition-colors"
						onClick={() => setIsCartOpen(!isCartOpen)}>
						<ShoppingCartIcon className="h-4 w-4" />
						{totalItems > 0 && (
							<span className="absolute -top-2 -right-2 bg-primary-lavender text-white text-[10px] font-bold rounded-full h-5 min-w-5 flex items-center justify-center px-1 shadow-md border border-canvas animate-pulse">
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
