"use client";
import "./page.css";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { XIcon, MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import CompanyLogoSection from "@/app/components/company-logo";
import DealsSection from "@/app/components/deals-section";
import TestimonialSection from "@/app/components/testimonial-section";
// import CategorySection from "./components/category-section";
import ProductSection from "@/app/components/product-section";
import FeaturesSection from "@/app/components/features-section";
import CTASignUpSection from "@/app/components/cta-section";
import SiteFooter from "@/app/components/site-footer";
import ProductPage from "@/app/components/product-section";
import Header from "@/app/components/site-header";
import { FlipWordsDemo } from "@/app/components/FlipWordsDemo";
import { TimeLineScroll } from "@/app/components/ui/time-line-scroll";
import { toast } from "sonner";
import "../app/components/Form/Form.css";
import whatsapp from "/public/icons/whatsappColor.svg";
// import formImage from "/public/hero.png";
import Steps from "@/app/components/steps";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { products } from "@/data/products";
import { Product, CartItem } from "./types"
// import { Card } from "./components/ui/card";
import { AnimatedModalDemo } from "./components/animated-modal-demo";
import { CheckoutModal } from "./components/Form/CheckoutModal";

export default function ECommerceApp() {
	const [currentPage, setCurrentPage] = useState<'landing' | 'products'>('landing');
	const [cart, setCart] = useState<CartItem[]>([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
	const router = useRouter();


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

	// const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

	// const totalPrice = cart.reduce(
	// 	(sum, item) => sum + (item.price ?? 0) * item.quantity,
	// 	0
	// );

	// form
	
	useEffect(() => {
		if (isMessageSuccess()) {
			toast(
				"Información enviada con éxito! Gracias por tu confianza.");
			router.push("/sent-message");
		}
	}, [router]);

	const isMessageSuccess = () => {
		return (
			new URLSearchParams(window.location.search).get("success") ===
			"true"
		);
	};

	// form

	const renderLandingPage = () => (
		// Landing Page  Section
		<main className="flex-1 ">
			<section
				className="w-full min-h-screen  overflow-hidden relative flex items-center justify-center"
				id="hero">
				<TimeLineScroll />
				<div className="container px-4 md:px-6 mb-16 mx-auto ">
					<div className="flex flex-col justify-center space-y-8 text-center lg:text-left ">
						<FlipWordsDemo />
						<div className="flex gap-4 justify-center lg:justify-start">
							<Link href="/about">
								<Button className="inline-flex items-center justify-center text-ink bg-primary-lavender hover:bg-primary-hover focus:bg-primary-focus transition-colors shadow-none rounded-md py-2 px-4 border border-hairline font-semibold">
									Empresa familiar
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
							<AnimatedModalDemo />
						</div>
					</div>
				</div>
			</section>
			<Link
				id="toggle_nav"
				className="fixed max-w-10 right-5 bottom-5 z-50 hover:scale-105 transition"
				target="_blank"
				href="https://wa.me/+5491151083838">
				<Image
					src={whatsapp}
					alt="whatsapp logo"
					width={200}
					height={200}
					className="drop-shadow-lg"
				/>
			</Link>
			<div className="fixed inset-0 -z-10 h-full w-full dark-grid-bg"></div>

			<Steps />

			<ProductSection products={products} addToCart={addToCart} />


			<CompanyLogoSection />
			{/* <CategorySection /> */}

			<DealsSection deals={products} addToCart={addToCart} />

			<TestimonialSection />

			<FeaturesSection />

			<CTASignUpSection />
		</main>
	);

	const renderCart = () => (
		// Cart Section

		<>
			{isCartOpen && (
				<>
					<div
						className="fixed inset-0 bg-black/60 z-40 backdrop-blur-xs"
						onClick={() => setIsCartOpen(false)}
					/>
					<div className="fixed inset-y-0 right-0 w-full sm:w-[25vw] bg-surface-1 border-l border-hairline shadow-none p-6 overflow-y-auto z-50">
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
								Tu carrito está vacío.{" "}
								<button
									className="inline-flex items-center justify-center text-ink bg-primary-lavender hover:bg-primary-hover focus:bg-primary-focus transition-colors shadow-none rounded-md py-2 w-full border border-hairline font-semibold text-sm"
									onClick={() => setCurrentPage("products")}>
									Agregar productos
								</button>
							</p>
						) : (
							<>
								{cart.map((item) => (
									<div
										key={item.id}
										className="flex items-center justify-between mb-4 border-b border-hairline pb-4 last:border-b-0">
										<div className="flex items-center">
											<Image
												src={item.image || "/default-image.png"}
												alt={item.name || "Producto sin nombre"}
												className="w-16 h-16 object-cover rounded-md mr-4 border border-hairline"
											/>
											<div>
												<h3 className="font-semibold text-ink text-sm">
													{item.name}
												</h3>
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
								<div className="mt-6 border-t border-hairline pt-4 relative">
									<button
										onClick={() => {
											setIsCheckoutOpen(true);
										}}
										className="w-full inline-flex items-center justify-center text-ink bg-primary-lavender hover:bg-primary-hover focus:bg-primary-focus transition-colors shadow-none rounded-md py-2.5 border border-hairline font-semibold text-sm">
										Procesar mi cotización
									</button>
								</div>
							</>
						)}
					</div>
				</>
			)}
		</>
	);

	return (
		<div className="flex flex-col min-h-screen">
			<Header
				// setCurrentPage={setCurrentPage}
				cart={cart}
				isCartOpen={isCartOpen}
				setIsCartOpen={setIsCartOpen}
			/>
			{currentPage === "landing" ? (
				renderLandingPage()
			) : (
				<ProductPage products={products} addToCart={addToCart} />
			)}
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