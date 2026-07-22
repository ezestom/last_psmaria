"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { XIcon, MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Header from "@/app/components/site-header";
import ProductSection from "@/app/components/product-section";
import SiteFooter from "@/app/components/site-footer";
import { products } from "@/data/products";
import { Product, CartItem } from "@/app/types";
import { toast, Toaster } from "sonner";
import Image from "next/image";
import { WhatsAppButton } from "@/app/components/ui/whatsapp-button";
import { CheckoutModal } from "@/app/components/Form/CheckoutModal";

export default function ProductsPageRoute() {
	const [cart, setCart] = useState<CartItem[]>([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

	useEffect(() => {
		const savedCart = localStorage.getItem("cart");
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product: Product) => {
		const existingItem = cart.find((item) => item.id === product.id);
		if (existingItem) {
			setCart(
				cart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCart([...cart, { ...product, quantity: 1 }]);
		}
		toast.success(`"${product.name}" agregado al carrito`, {
			description: "Se ha añadido el producto para cotizar.",
			action: {
				label: "Ver Carrito",
				onClick: () => setIsCartOpen(true),
			},
		});
	};

	const removeFromCart = (productId: number) => {
		setCart(cart.filter((item) => item.id !== productId));
	};

	const updateQuantity = (productId: number, newQuantity: number) => {
		if (newQuantity === 0) {
			removeFromCart(productId);
		} else {
			setCart(
				cart.map((item) =>
					item.id === productId
						? { ...item, quantity: newQuantity }
						: item
				)
			);
		}
	};

	const renderCart = () => (
		<>
			{isCartOpen && (
				<>
					<div
						className="fixed inset-0 bg-black/60 z-40 backdrop-blur-xs"
						onClick={() => setIsCartOpen(false)}
					/>
					<div className="fixed inset-y-0 right-0 w-full sm:w-[25vw] bg-surface-1 border-l border-hairline shadow-none p-6 overflow-y-auto z-50 flex flex-col justify-between">
						<div>
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-2xl font-bold text-ink">Tu carrito</h2>
								<Button
									className="bg-transparent hover:bg-surface-2 text-ink-muted hover:text-ink shadow-none p-2 border-none transition-colors"
									onClick={() => setIsCartOpen(false)}>
									<XIcon className="h-5 w-5" />
								</Button>
							</div>
							{cart.length === 0 ? (
								<p className="text-ink-muted flex flex-col items-start gap-2 text-sm">
									Tu carrito está vacío.
								</p>
							) : (
								<div className="space-y-4">
									{cart.map((item) => (
										<div
											key={item.id}
											className="flex items-center justify-between border-b border-hairline pb-4 last:border-b-0">
											<div className="flex items-center">
												<Image
													src={item.image || "/default-image.png"}
													alt={item.name || "Producto sin nombre"}
													width={64}
													height={64}
													className="w-16 h-16 object-cover rounded-md mr-4 border border-hairline"
												/>
												<div>
													<h3 className="font-semibold text-ink text-sm">
														{item.name}
													</h3>
													<p className="text-xs text-ink-muted">
														Capacidad: {item.capacity}
													</p>
												</div>
											</div>
											<div className="flex items-center gap-1">
												<Button
													className="h-8 w-8 p-0 bg-surface-2 hover:bg-surface-3 text-ink-muted hover:text-ink border border-hairline shadow-none rounded transition-colors"
													onClick={() =>
														updateQuantity(
															item.id!,
															item.quantity - 1
														)
													}>
													<MinusIcon className="h-3.5 w-3.5" />
												</Button>

												<input
													type="number"
													className="w-12 text-center bg-surface-2 border border-hairline rounded text-ink focus:outline-none focus:border-primary-lavender text-sm h-8"
													value={item.quantity}
													onChange={(e) => {
														const quantity = parseInt(e.target.value, 10);
														if (!isNaN(quantity) && quantity >= 0) {
															updateQuantity(item.id!, quantity);
														}
													}}
													min="0"
												/>
												<Button
													className="h-8 w-8 p-0 bg-surface-2 hover:bg-surface-3 text-ink-muted hover:text-ink border border-hairline shadow-none rounded transition-colors"
													onClick={() =>
														updateQuantity(
															item.id!,
															item.quantity + 1
														)
													}>
													<PlusIcon className="h-3.5 w-3.5" />
												</Button>
												<Button
													className="ml-2 h-8 w-8 p-0 bg-transparent hover:bg-surface-2 text-ink-subtle hover:text-ink border-none shadow-none transition-colors"
													onClick={() =>
														removeFromCart(item.id!)
													}>
													<TrashIcon className="h-4 w-4 text-red-500 hover:text-red-400" />
												</Button>
											</div>
										</div>
									))}
								</div>
							)}
						</div>

						{cart.length > 0 && (
							<div className="mt-6 border-t border-hairline pt-4">
								<button
									onClick={() => {
										setIsCheckoutOpen(true);
									}}
									className="w-full inline-flex items-center justify-center text-ink bg-primary-lavender hover:bg-primary-hover focus:bg-primary-focus transition-colors shadow-none rounded-md py-2.5 border border-hairline font-semibold text-sm">
									Procesar mi cotización
								</button>
							</div>
						)}
					</div>
				</>
			)}
		</>
	);

	return (
		<div className="flex flex-col bg-canvas">
			<Header
				cart={cart}
				isCartOpen={isCartOpen}
				setIsCartOpen={setIsCartOpen}
			/>

			<div className="py-8">
				<ProductSection products={products} addToCart={addToCart} />
			</div>

			<WhatsAppButton className="bottom-5" />
			<div className="fixed inset-0 -z-10 h-full w-full dark-grid-bg"></div>

			{renderCart()}
			<CheckoutModal
				isOpen={isCheckoutOpen}
				onClose={() => setIsCheckoutOpen(false)}
				cart={cart}
				clearCart={() => setCart([])}
			/>
			<SiteFooter />
		</div>
	);
}
