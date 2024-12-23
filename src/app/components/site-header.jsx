import React from "react";
import { Button } from "@/app/components/ui/button";
import logo from "/public/logo-azul.png";
import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import { MyDrawer } from "./MyDrawer/MyDrawer";
import Link from "next/link";

const Header = ({ cart, isCartOpen, setIsCartOpen }) => {
	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<div
			className="sticky flex justify-center top-0 z-50 w-full bg-black/5 backdrop-blur supports-[backdrop-filter]:bg-background/60"
			id="navbar">
			<div className="container px-0 flex h-14 items-center relative">
				<div className="mr-4 hidden md:flex">
					<Link
						className="mr-6 flex items-center space-x-2"
						href="/#">
						<Image
							src={logo}
							className="h-12 w-12"
							alt="logo image"
						/>

						<div className="hidden flex-col-reverse text-base items-start sm:flex font-black leading-3 text-[#046db5]">
							Santa María{" "}
							<span className="text-xs text-black">
								Plásticos
							</span>
						</div>
					</Link>

					<nav className="flex items-center space-x-6 text-sm font-medium">
						<Link
							className="transition-colors shadow bg-white hover:bg-slate-300 px-4 py-2 rounded-md hover:text-foreground/80 text-foreground/60"
							href="/#products">
							Productos
						</Link>
						<Link
							className="transition-colors shadow  bg-white hover:bg-slate-300 px-4 py-2 rounded-md hover:text-foreground/80 text-foreground/60"
							href="/#deals">
							Ofertas
						</Link>
						{/* <Link
							className="transition-colors shadow bg-white hover:bg-slate-300 px-4 py-2 rounded-md hover:text-foreground/80 text-foreground/60"
							href="#categories-section">
							Categorias
						</Link> */}
						{/* <Link
							className="transition-colors shadow bg-white hover:bg-slate-300 px-4 py-2 rounded-md hover:text-foreground/80 text-foreground/60"
							href="#"
							onClick={() => setCurrentPage("products")}>
							Productos
						</Link> */}

						<Link
							className="transition-colors shadow bg-white hover:bg-slate-300 px-4 py-2 rounded-md hover:text-foreground/80 text-foreground/60"
							href="/about">
							Nosotros
						</Link>
						{/* <Button
							onClick={() => alert("Contacto")}
							className="transition-colors shadow bg-white hover:bg-slate-300 px-4 py-2 rounded-md hover:text-foreground/80 text-foreground/60">
							Contacto
						</Button> */}
					</nav>
				</div>

				<div className="block md:hidden z-[100] fixed top-3 right-3">
					<MyDrawer />
				</div>

				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<nav className="sm:flex hidden items-center">
						<Button
							variant="ghost"
							className="mr-6 text-base hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
							<span className="sr-only">Home</span>
						</Button>
					</nav>
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<div>
							<Button
								variant="outline"
								size="icon"
								className="relative bg-white hover:bg-slate-300"
								onClick={() => setIsCartOpen(!isCartOpen)}>
								<ShoppingCartIcon className="h-4 w-4 " />
								{totalItems > 0 && (
									<span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center bg-black text-white justify-center">
										{totalItems}
									</span>
								)}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
