"use client";
import "./page.css";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { XIcon, MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import CompanyLogoSection from "@/app/components/company-logo";
import DealsSection from "@/app/components/deals-section";
import TestimonialSection from "@/app/components/testimonial-section";
import FeaturesSection from "@/app/components/features-section";
import CTASignUpSection from "@/app/components/cta-section";
import SiteFooter from "@/app/components/site-footer";
import ProductPage from "@/app/components/product-section";
import Header from "@/app/components/site-header";
import { FlipWordsDemo } from "@/app/components/FlipWordsDemo";
import { TimeLineScroll } from "@/app/components/ui/time-line-scroll";
import { toast, Toaster } from "sonner";
import "../app/components/Form/Form.css";
import whatsapp from "/public/icons/whatsappColor.svg";

import img1 from "/public/band.jpg";
import Image from "next/image";
import Link from "next/link";

export const products = [
	{
		id: 1,
		name: "Bandeja de 1000 unidades",
		price: 99.99,
		image: img1,
	},
	{
		id: 2,
		name: "Bandeja de 500 unidades",
		price: 59.99,
		image: img1,
	},
	{
		id: 3,
		name: "Bandeja de 250 unidades",
		price: 29.99,
		image: img1,
	},
	{
		id: 4,
		name: "Bandeja de 100 unidades",
		price: 14.99,
		image: img1,
	},
	{
		id: 5,
		name: "Bandeja de 50 unidades",
		price: 7.99,
		image: img1,
	},
	{
		id: 6,
		name: "Bandeja de 25 unidades",
		price: 3.99,
		image: img1,
	},
	{
		id: 7,
		name: "Bandeja de 1000 unidades",
		price: 279.99,
		originalPrice: 399.99,
		image: img1,
		tag: "Oferta",
	},
	{
		id: 8,
		name: "Bandeja de 500 unidades",
		price: 149.99,
		originalPrice: 199.99,
		image: img1,
		tag: "Oferta",
	},
	{
		id: 9,
		name: "Bandeja de 250 unidades",
		price: 79.99,
		originalPrice: 99.99,
		image: img1,
		tag: "Oferta",
	},
	{
		id: 10,
		name: "Bandeja de 100 unidades",
		price: 39.99,
		originalPrice: 49.99,
		image: img1,
		tag: "Oferta",
	},
	{
		id: 11,
		name: "Bandeja de 50 unidades",
		price: 19.99,
		originalPrice: 29.99,
		image: img1,
		tag: "Oferta",
	},
	{
		id: 12,
		name: "Bandeja de 25 unidades",
		price: 9.99,
		originalPrice: 14.99,
		image: img1,
		tag: "Oferta",
	},
];

const deals = [
	{
		id: 7,
		name: "Bandeja de 1000 unidades",
		price: 279.99,
		originalPrice: 399.99,
		image: img1,
		tag: "Oferta",
	},
	{
		id: 8,
		name: "Bandeja de 500 unidades",
		price: 149.99,
		originalPrice: 199.99,
		image: img1,
		tag: "Oferta",
	},
	{
		id: 9,
		name: "Bandeja de 250 unidades",
		price: 79.99,
		originalPrice: 99.99,
		image: img1,
		tag: "Oferta",
	},
	{
		id: 10,
		name: "Bandeja de 100 unidades",
		price: 39.99,
		originalPrice: 49.99,
		image: img1,
		tag: "Oferta",
	},
	{
		id: 11,
		name: "Bandeja de 50 unidades",
		price: 19.99,
		originalPrice: 29.99,
		image: img1,
		tag: "Oferta",
	},
	{
		id: 12,
		name: "Bandeja de 25 unidades",
		price: 9.99,
		originalPrice: 14.99,
		image: img1,
		tag: "Oferta",
	},
];

export default function ECommerceApp() {
	const [currentPage, setCurrentPage] = useState("landing");
	const [cart, setCart] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);

	useEffect(() => {
		const savedCart = localStorage.getItem("cart");
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product) => {
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

	const removeFromCart = (productId) => {
		setCart(cart.filter((item) => item.id !== productId));
	};

	const updateQuantity = (productId, newQuantity) => {
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

	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	// form

	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		if (isMessageSuccess()) {
			toast(
				"Information successfully submitted! Thank you for your trust.",
				{
					type: "success",
				}
			);
			window.location.href = "/sent-message";
		}
	}, []); // Agrega las dependencias aquí

	const isMessageSuccess = () => {
		return (
			new URLSearchParams(window.location.search).get("success") ===
			"true"
		);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);

		setIsLoading(true);

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: formData,
			});

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(
					`Server responded with ${response.status}: ${errorText}`
				);
			}

			toast(
				"Information successfully submitted! Thank you for your trust.",
				{
					type: "success",
				}
			);

			setTimeout(() => {
				const redirectTo = "/sent-message";

				window.location.href = redirectTo;
				setIsLoading(false);
			}, 3000);
		} catch (error) {
			toast.error(
				`There was a problem submitting the form, please try again. (Error: ${error.message})`
			);
			setIsLoading(false); // Asegúrate de desactivar el loading en caso de error
		}
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
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button
								className="inline-flex items-center justify-center rounded-md bg-white hover:bg-slate-300 shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 "
								onClick={() => setCurrentPage("products")}>
								Productos
								<ShoppingBag className="ml-2 h-4 w-4" />
							</Button>
							<Button
								variant="outline"
								className="inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
								onClick={() =>
									(window.location.href = "/about")
								}>
								Sobre la Empresa
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
						<Link
							id="toggle_nav"
							className="fixed max-w-16 right-5 bottom-5 z-50 hover:scale-105 transition"
							target="_blank"
							href="https://wa.me/+5492944625908">
							<Image
								src={whatsapp}
								alt="whatsapp logo"
								width={200}
								height={200}
								className="drop-shadow-lg"
							/>
						</Link>
					</div>
				</div>
			</section>

			<CompanyLogoSection />

			<DealsSection deals={deals} addToCart={addToCart} />

			{/* <CategorySection categories={categories} /> */}

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
						className="fixed inset-0 bg-black bg-opacity-50 z-40"
						onClick={() => setIsCartOpen(false)}
					/>
					<div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-background shadow-lg p-6 overflow-y-auto z-50">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-2xl font-bold">Tu carrito</h2>
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setIsCartOpen(false)}>
								<XIcon className="h-6 w-6" />
							</Button>
						</div>
						{cart.length === 0 ? (
							<p className="text-muted-foreground flex flex-col items-start gap-2">
								Tu carrito está vacío.{" "}
								<button
									className="inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 rounded-md py-2 w-full"
									onClick={() => setCurrentPage("products")}>
									Agregar productos
								</button>
							</p>
						) : (
							<>
								{cart.map((item) => (
									<div
										key={item.id}
										className="flex items-center justify-between mb-4">
										<div className="flex items-center">
											<Image
												src={item.image}
												alt={item.name}
												className="w-16 h-16 object-cover rounded-md mr-4"
											/>
											<div>
												<h3 className="font-semibold">
													{item.name}
												</h3>
												<p className="text-sm text-muted-foreground">
													${item.price.toFixed(2)}
												</p>
											</div>
										</div>
										<div className="flex items-center">
											<Button
												variant="outline"
												size="icon"
												onClick={() =>
													updateQuantity(
														item.id,
														item.quantity - 1
													)
												}>
												<MinusIcon className="h-4 w-4" />
											</Button>

											<span className="mx-2">
												{item.quantity}
											</span>
											<Button
												variant="outline"
												size="icon"
												onClick={() =>
													updateQuantity(
														item.id,
														item.quantity + 1
													)
												}>
												<PlusIcon className="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="icon"
												className="ml-2"
												onClick={() =>
													removeFromCart(item.id)
												}>
												<TrashIcon className="h-4 w-4" />
											</Button>
										</div>
									</div>
								))}
								<div className="mt-6 border-t pt-4 relative">
									<div className="flex justify-between items-center mb-4">
										<span className="font-semibold">
											Total:
										</span>
										<span className="font-bold">
											${totalPrice.toFixed(2)}
										</span>
									</div>
									<button
										onClick={() => {
											const dialog =
												document.querySelector(
													"dialog"
												);
											dialog.showModal();
										}}
										className="w-full inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 rounded-md py-2">
										Procesar mi cotización
									</button>

									<dialog className="absolute">
										<Toaster />

										<button
											className="absolute top-2 right-2"
											onClick={() => {
												const dialog =
													document.querySelector(
														"dialog"
													);
												dialog.close();
												window.location.href = "/";
											}}>
											<XIcon className="h-6 w-6" />
										</button>
										{isLoading && (
											<div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-white/10 opacity-50 flex justify-center items-center z-50 rounded-md w-full h-full">
												<span className="loader"></span>
											</div>
										)}
										<div className="p-8 w-[80vw] xl:w-[35vw]">
											<h2 className="text-2xl font-bold mb-4">
												Enviar mi cotización
											</h2>
											<form
												onSubmit={handleSubmit}
												method="POST"
												action="https://formsubmit.co/ezequielstom@gmail.com"
												className="mt-8 gap-6 mx-2">
												<input
													type="hidden"
													name="_subject"
													value="📃 Santa María | 📩 Nuevo Mensaje!"
												/>
												<input
													type="hidden"
													name="_autoresponse"
													value="
                            Tu mensaje ha sido recibido con éxito. Nos pondremos en contacto contigo a la brevedad. Gracias por tu confianza."></input>

												<input
													type="hidden"
													name="_captcha"
													value="false"
												/>
												{/*  aquí hay que armar el input cargando la info que viene desde el carrito */}
												<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
													Productos para cotizar
													<input
														type="text"
														name="products"
														className="p-2 my-1 w-full rounded-md border-gray-200 bg-black  text-sm text-white text-pretty shadow-sm active:bg-black focus:outline-none"
														value={cart
															.map(
																(item) =>
																	`${
																		item.name
																	} x ${
																		item.quantity
																	} - $${(
																		item.price *
																		item.quantity
																	).toFixed(
																		2
																	)}`
															)
															.join(", ")}
														readOnly
													/>
												</label>
												<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
													Total de los productos
													seleccionados
													<input
														type="text"
														name="total"
														className="p-2 my-1 w-full rounded-md border-gray-200 bg-black  text-sm text-white text-pretty shadow-sm active:bg-black focus:outline-none"
														value={`$${totalPrice.toFixed(
															2
														)}`}
														readOnly
													/>
												</label>

												<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
													Nombre
													<input
														type="text"
														name="name"
														id="name"
														placeholder="Juan Pérez"
														required
														className="p-2 my-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</label>
												<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
													Empresa
													<input
														type="text"
														name="company"
														id="company"
														placeholder="Plásticos Santa María"
														required
														className="p-2 my-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</label>
												<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
													Correo electrónico
													<input
														className="p-2 my-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
														type="email"
														name="email"
														id="email"
														required
														placeholder="
                            Correo electrónico"
													/>
												</label>
												<fieldset>
													<legend className="flex flex-col items-start justify-start text-sm py-2 font-medium text-gray-700 ">
														Mensaje adicional
														<textarea
															name="message"
															id="message"
															required
															className="w-full border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 max-h-[100px]"
															placeholder="Mensaje"></textarea>
													</legend>
												</fieldset>
												<div className="flex justify-center flex-col pt-4 gap-4">
													<Button
														type="submit"
														className="inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1">
														Enviar
													</Button>
												</div>
											</form>
										</div>
									</dialog>
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
				setCurrentPage={setCurrentPage}
				cart={cart}
				setCart={setCart}
				isCartOpen={isCartOpen}
				setIsCartOpen={setIsCartOpen}
			/>
			{currentPage === "landing" ? (
				renderLandingPage()
			) : (
				<ProductPage products={products} addToCart={addToCart} />
			)}
			{renderCart()}
			<SiteFooter />
		</div>
	);
}
