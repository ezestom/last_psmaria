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
import { toast, Toaster } from "sonner";
import "../app/components/Form/Form.css";
import whatsapp from "/public/icons/whatsappColor.svg";
import formImage from "/public/factory.jpg";

import Image from "next/image";
import Link from "next/link";

import { products } from "@/data/products";
import { Product, CartItem } from "./types"
import { Card } from "./components/ui/card";
import { AnimatedModalDemo } from "./components/animated-modal-demo";




export default function ECommerceApp() {
	const [currentPage, setCurrentPage] = useState<'landing' | 'products'>('landing');
	const [cart, setCart] = useState<CartItem[]>([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);


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
			window.location.href = "/sent-message";
		}
	}, []); // Agrega las dependencias aquí

	const isMessageSuccess = () => {
		return (
			new URLSearchParams(window.location.search).get("success") ===
			"true"
		);
	};

	interface FormElements extends HTMLFormControlsCollection {
		products: HTMLInputElement;
		total: HTMLInputElement;
		name: HTMLInputElement;
		company: HTMLInputElement;
		email: HTMLInputElement;
		message: HTMLTextAreaElement;
	}

	interface FormWithElements extends HTMLFormElement {
		elements: FormElements;
	}

	const handleSubmit = async (event: React.FormEvent<FormWithElements>) => {
		event.preventDefault();
		const form = event.currentTarget;
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
				"Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo a la brevedad. Gracias por tu confianza.");

			setTimeout(() => {
				const redirectTo = "/sent-message";

				window.location.href = redirectTo;
				setIsLoading(false);
			}, 3000);
		} catch (error) {
			toast.error(
				`There was a problem submitting the form, please try again. (Error: ${error})`
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
						<div className="flex gap-4 justify-center lg:justify-start">
							<Button
								className="inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
								onClick={() =>
									(window.location.href = "/about")
								}>
								Empresa familiar
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
							<AnimatedModalDemo />
						</div>
						<Link
							id="toggle_nav"
							className="fixed max-w-10 right-5 bottom-5 z-50 hover:scale-105 transition"
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
						className="fixed inset-0 bg-black bg-opacity-50 z-40"
						onClick={() => setIsCartOpen(false)}
					/>
					<div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-background shadow-lg p-6 overflow-y-auto z-50">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-2xl font-bold">Tu carrito</h2>
							<Button


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
												src={item.image || "/default-image.png"}
												alt={item.name || "Producto sin nombre"}
												className="w-16 h-16 object-cover rounded-md mr-4"
											/>
											<div>
												<h3 className="font-semibold">
													{item.name}
												</h3>

												{/* precio del producto en el carrito */}

												{/* <p className="text-sm text-muted-foreground">
													${(item.price ?? 0).toFixed(2)}
												</p> */}

											</div>
										</div>
										<div className="flex items-center">
											<Button


												onClick={() =>
													updateQuantity(
														item.id!,
														item.quantity - 1
													)
												}>
												<MinusIcon className="h-4 w-4" />
											</Button>

											<span className="mx-2">
												{item.quantity}
											</span>
											<Button


												onClick={() =>
													updateQuantity(
														item.id!,
														item.quantity + 1
													)
												}>
												<PlusIcon className="h-4 w-4" />
											</Button>
											<Button
												className="ml-2"
												onClick={() =>
													removeFromCart(item.id!)
												}>
												<TrashIcon className="h-4 w-4" />
											</Button>
										</div>
									</div>
								))}
								<div className="mt-6 border-t pt-4 relative">
									<div className="flex justify-between items-center mb-4">
										{/* Total suma de los productos en el carrito */}

										{/* <span className="font-semibold">
											Total:
										</span>
										<span className="font-bold">
											${totalPrice.toFixed(2)}
										</span> */}
									</div>
									<button
										onClick={() => {
											const dialog =
												document.querySelector(
													"dialog"
												);
											dialog?.showModal();
										}}
										className="w-full inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 rounded-md py-2">
										Procesar mi cotización
									</button>

									<dialog className="absolute">
										<Toaster />

										<button
											className="absolute top-2 right-2 z-50"
											onClick={() => {
												const dialog =
													document.querySelector(
														"dialog"
													);
												dialog?.close();
												window.location.href = "/";
											}}>
											<XIcon className="h-8 w-8" />
										</button>
										{isLoading && (
											<div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-white/10 opacity-50 flex justify-center items-center z-50 rounded-md w-full h-full">
												<span className="loader"></span>
											</div>
										)}
										<main className="flex items-center justify-center border rounded-md overflow-hidden ">
											<Card className="border-none w-screen md:w-1/2 p-4 md:p-8">

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
																		`${item.name
																		} x ${item.quantity
																		} - $${(
																			// (item.price ?? 0) * // precio del producto en el carrito
																			item.quantity
																		).toFixed(
																			2
																		)}`
																)
																.join(" ✓ ")}
															readOnly
														/>
													</label>
													{/* <label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
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
												</label> */}

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
															placeholder="juan_perez@ejemplo.com"
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
																placeholder="Quiero cotizar estos productos. Gracias">

															</textarea>
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
											</Card>
											<Image
												src={formImage}
												alt="form"
												className="hidden object-cover h-full md:block w-1/2 grayscale aspect-square opacity-75"
											/>
										</main>
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
			<SiteFooter />
		</div>
	);
}