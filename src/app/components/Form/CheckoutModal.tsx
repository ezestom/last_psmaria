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

	if (!isOpen) return null;

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
		<div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-sm">
			<main className="relative flex flex-col md:flex-row items-stretch border border-hairline rounded-lg overflow-hidden bg-surface-1 max-w-4xl max-h-[90vh] shadow-2xl">
				{isLoading && (
					<div className="absolute inset-0 backdrop-blur-sm bg-canvas/40 flex justify-center items-center z-[120] rounded-lg">
						<span className="loader border-t-primary-lavender"></span>
					</div>
				)}
				
				<Card className="border-none bg-surface-1 w-full md:w-1/2 p-6 md:p-8 overflow-y-auto rounded-none">
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
						
						<label className="flex flex-col text-sm font-medium text-ink-muted">
							Productos para cotizar
							<input
								type="text"
								name="products"
								className="p-2 mt-1 w-full rounded-md border border-hairline bg-surface-2 text-sm text-ink shadow-sm focus:outline-none focus:border-primary-lavender"
								value={cart
									.map((item) => `${item.name} x ${item.quantity}`)
									.join(" ✓ ")}
								readOnly
							/>
						</label>

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
									placeholder="Quiero cotizar estos productos. Gracias."></textarea>
							</legend>
						</fieldset>
						
						<div className="pt-2">
							<Button
								type="submit"
								className="w-full inline-flex items-center justify-center text-white bg-primary-lavender hover:bg-primary-hover shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 border border-hairline-strong rounded-md h-10">
								Enviar
							</Button>
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
			</main>
		</div>
	);
};
