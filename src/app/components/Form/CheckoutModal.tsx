"use client";

import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { XIcon } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CartItem } from "@/app/types";
import formImage from "/public/hero.png";
import { AnimatePresence, motion } from "framer-motion";

interface CheckoutModalProps {
	isOpen: boolean;
	onClose: () => void;
	cart: CartItem[];
	clearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
	isOpen,
	onClose,
	cart,
	clearCart,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

			toast.success("¡Tu cotización ha sido enviada con éxito!");

			setTimeout(() => {
				clearCart();
				onClose();
				router.push("/sent-message");
				setIsLoading(false);
			}, 3000);
		} catch (error) {
			toast.error(
				`Hubo un problema al enviar el formulario: ${error instanceof Error ? error.message : error}`
			);
			setIsLoading(false);
		}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
					{/* Backdrop Overlay */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/70 backdrop-blur-sm"
					/>

					{/* Modal Main Box */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						className="relative flex flex-col md:flex-row items-stretch border border-hairline rounded-lg overflow-hidden bg-surface-1 max-w-4xl w-full max-h-[90vh] shadow-2xl z-10"
					>
						{isLoading && (
							<div className="absolute inset-0 backdrop-blur bg-black/40 flex justify-center items-center z-[120] rounded-lg">
								<div className="animate-spin rounded-full h-12 w-12 border-4 border-hairline border-t-primary-lavender" />
							</div>
						)}
						
						<Card className="border-none bg-surface-1 w-full md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[90vh] rounded-none relative">
							<button
								type="button"
								className="absolute top-4 right-4 z-50 p-1 rounded-full text-ink-muted hover:text-ink hover:bg-surface-2 transition"
								onClick={onClose}>
								<XIcon className="h-5 w-5" />
							</button>
							
							<h2 className="text-2xl font-bold mb-2 text-ink text-left tracking-tight">
								Enviar mi cotización
							</h2>
							<p className="text-sm text-ink-muted mb-6 text-left">
								Completa los datos de tu empresa para recibir una cotización a medida.
							</p>
							
							<form
								onSubmit={handleSubmit}
								method="POST"
								action="https://formsubmit.co/maximoafornasari@gmail.com"
								className="space-y-4 text-left">
								<input
									type="hidden"
									name="_cc"
									value="ezequielstom@gmail.com"
								/>
								<input
									type="hidden"
									name="_subject"
									value="📃 Santa María | 📩 Nuevo Mensaje!"
								/>
								<input
									type="hidden"
									name="_autoresponse"
									value="Tu mensaje ha sido recibido con éxito. Nos pondremos en contacto contigo a la brevedad. Gracias por tu confianza."
								/>
								<input
									type="hidden"
									name="_captcha"
									value="false"
								/>
								
								{/* Hidden products input for email backend */}
								<input
									type="hidden"
									name="products"
									value={cart
										.map((item) => `${item.name} x ${item.quantity}`)
										.join(", ")}
								/>

								{/* Premium visual product summary list */}
								<div className="mb-4">
									<span className="block text-sm font-medium text-ink-muted mb-2">
										Productos a cotizar
									</span>
									<div className="border border-hairline bg-surface-2 rounded-md divide-y divide-hairline max-h-[160px] overflow-y-auto">
										{cart.map((item) => (
											<div key={item.id} className="flex items-center gap-3 p-2.5">
												{item.image && (
													<div className="relative size-10 rounded bg-canvas overflow-hidden flex-shrink-0 border border-hairline">
														<Image
															src={item.image}
															alt={item.name || "producto"}
															fill
															className="object-cover"
														/>
													</div>
												)}
												<div className="flex-1 min-w-0">
													<p className="text-sm font-medium text-ink truncate">
														{item.name}
													</p>
													<p className="text-xs text-ink-muted">
														Cantidad: {item.quantity}
													</p>
												</div>
											</div>
										))}
									</div>
								</div>

								<label className="flex flex-col text-sm font-medium text-ink-muted">
									Nombre
									<input
										type="text"
										name="name"
										id="name"
										placeholder="Juan Pérez"
										required
										className="p-2 mt-1 w-full rounded-md border border-hairline bg-surface-2 text-sm text-ink placeholder-ink-subtle shadow-sm focus:border-primary-lavender focus:outline-none focus:ring-1 focus:ring-primary-lavender"
									/>
								</label>
								
								<label className="flex flex-col text-sm font-medium text-ink-muted">
									Empresa
									<input
										type="text"
										name="company"
										id="company"
										placeholder="Plásticos Santa María"
										required
										className="p-2 mt-1 w-full rounded-md border border-hairline bg-surface-2 text-sm text-ink placeholder-ink-subtle shadow-sm focus:border-primary-lavender focus:outline-none focus:ring-1 focus:ring-primary-lavender"
									/>
								</label>
								
								<label className="flex flex-col text-sm font-medium text-ink-muted">
									Correo electrónico
									<input
										className="p-2 mt-1 w-full rounded-md border border-hairline bg-surface-2 text-sm text-ink placeholder-ink-subtle shadow-sm focus:border-primary-lavender focus:outline-none focus:ring-1 focus:ring-primary-lavender"
										type="email"
										name="email"
										id="email"
										required
										placeholder="juan_perez@ejemplo.com"
									/>
								</label>
								
								<fieldset className="w-full">
									<legend className="flex flex-col text-sm font-medium text-ink-muted w-full">
										Mensaje adicional
										<textarea
											name="message"
											id="message"
											required
											className="w-full border border-hairline rounded-md bg-surface-2 text-sm text-ink placeholder-ink-subtle shadow-sm p-2 max-h-[100px] mt-1 focus:border-primary-lavender focus:outline-none focus:ring-1 focus:ring-primary-lavender"
											placeholder="Quiero cotizar estos productos. Gracias."
										/>
									</legend>
								</fieldset>
								
								<div className="pt-2 space-y-2">
									<Button
										type="submit"
										className="w-full inline-flex items-center justify-center text-white bg-primary-lavender hover:bg-primary-hover shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 border border-hairline-strong rounded-md h-10 font-semibold text-sm">
										Enviar Cotización por Email
									</Button>
									
									<button
										type="button"
										onClick={() => {
											const phone = "5491151083838";
											const itemsText = cart.map((item) => `• ${item.name} (Cantidad: ${item.quantity})`).join('\n');
											const text = encodeURIComponent(
												`Hola Plásticos Santa María! Quisiera solicitar una cotización mayorista para los siguientes envases:\n\n${itemsText}\n\n¿Tienen disponibilidad y costos de envío? Muchas gracias.`
											);
											window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
										}}
										className="w-full inline-flex items-center justify-center gap-2 text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-colors border border-emerald-500/30 rounded-md h-10 font-semibold text-sm">
										<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
											<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
										</svg>
										Cotizar por WhatsApp Instantáneo
									</button>
								</div>
							</form>
						</Card>
						
						<div className="hidden md:block w-1/2 relative bg-surface-2 border-l border-hairline">
							<Image
								src={formImage}
								alt="form decoration"
								fill
								className="object-cover grayscale opacity-20 transition-opacity hover:opacity-30 duration-300"
							/>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};
