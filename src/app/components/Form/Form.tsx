"use client";

import React, { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import xIcon from "/public/icons/x.svg";
import "./Form.css";
import { Button } from "../ui/button";
import Image from "next/image";
import { Card } from "../ui/card";
import formImage from "/public/icons/message.svg";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface FormProps {
	h1: string;
	subtitle: string;
	button: string;
	toast_message: string;
	name: string;
	company: string;
	email: string;
	email_placeholder: string;
	message: string;
	message_placeholder: string;
	send: string;
	message_2: string;
}

export const Form: React.FC<FormProps> = ({
	h1,
	subtitle,
	button,
	toast_message,
	name,
	company,
	email,
	email_placeholder,
	message,
	message_placeholder,
	send,
	message_2,
}) => {
	const [dialog, setDialog] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (isMessageSuccess()) {
			toast.success("¡Información enviada con éxito! Gracias por su confianza.");
			closeDialog();
		}
	}, []);

	useEffect(() => {
		if (dialog) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [dialog]);

	const openDialog = () => {
		setDialog(true);
	};

	const closeDialog = () => {
		setDialog(false);
	};

	const isMessageSuccess = () => {
		if (typeof window !== "undefined") {
			return new URLSearchParams(window.location.search).get("success") === "true";
		}
		return false;
	};

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

			toast.success("¡Información enviada con éxito! Gracias por su confianza.");

			setTimeout(() => {
				closeDialog();
				router.push("/sent-message");
				setIsLoading(false);
			}, 3000);
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error(
				`Hubo un problema al enviar el formulario. Por favor, intente de nuevo. (Error: ${error instanceof Error ? error.message : error})`
			);
			setIsLoading(false);
		}
	};

	return (
		<div className="relative flex items-center mt-10 justify-center z-10 m-auto">
			<span className="flex btn-form">
				<Button
					onClick={openDialog}
					id="open-dialog"
					type="button"
					className="inline-flex items-center justify-center text-ink bg-primary-lavender hover:bg-primary-hover focus:bg-primary-focus transition-colors shadow-none rounded-md px-6 py-3 border border-hairline">
					{button}
					<svg
						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						fill="none"
						viewBox="0 0 14 10">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"></path>
					</svg>
				</Button>
			</span>

			<AnimatePresence>
				{dialog && (
					<div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
						{/* Backdrop Overlay */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={closeDialog}
							className="fixed inset-0 bg-black/70 backdrop-blur-sm"
						/>

						{/* Modal Box */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							transition={{ duration: 0.25, ease: "easeOut" }}
							className="relative w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row items-stretch border border-hairline rounded-md overflow-hidden bg-surface-1 shadow-2xl z-10">
							
							{/* Form Section */}
							<Card
								className="w-full md:w-1/2 border-none bg-surface-1 p-6 sm:p-8 overflow-y-auto max-h-[90vh] rounded-none relative"
								id="input-container">
								{/* Close Button */}
								<button
									type="button"
									className="absolute top-4 right-4 text-ink-muted z-50 p-2 rounded-full hover:bg-surface-2 transition"
									onClick={closeDialog}>
									<Image
										className="size-5 hover:text-ink filter invert opacity-80"
										src={xIcon}
										alt="x-icon"
										id="close-dialog"
									/>
								</button>

								{isLoading && (
									<div className="absolute inset-0 backdrop-blur bg-black/40 flex justify-center items-center z-50">
										<div className="animate-spin rounded-full h-12 w-12 border-4 border-hairline border-t-primary-lavender" />
									</div>
								)}

								<h2 className="font-bold text-ink text-xl sm:text-2xl text-left tracking-tight">
									{h1}
								</h2>

								<p className="mt-2 text-sm leading-relaxed text-ink-muted text-left">
									{subtitle}
								</p>

								<form
									onSubmit={handleSubmit}
									method="POST"
									action="https://formsubmit.co/maximoafornasari@gmail.com"
									className="mt-6 space-y-4 text-left">
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
										value={toast_message}
									/>

									<input
										type="hidden"
										name="_captcha"
										value="false"
									/>

									<div className="flex flex-col text-sm font-medium text-ink-muted">
										{name}
										<input
											type="text"
											name="name"
											id="name"
											placeholder="Juan Perez"
											required
											className="p-2 mt-1 w-full rounded-md border border-hairline bg-surface-2 text-sm text-ink placeholder-ink-subtle focus:border-primary-lavender focus:ring-1 focus:ring-primary-lavender focus:outline-none"
										/>
									</div>
									
									<div className="flex flex-col text-sm font-medium text-ink-muted">
										{company}
										<input
											type="text"
											name="company"
											id="company"
											placeholder="Plásticos Santa María"
											required
											className="p-2 mt-1 w-full rounded-md border border-hairline bg-surface-2 text-sm text-ink placeholder-ink-subtle focus:border-primary-lavender focus:ring-1 focus:ring-primary-lavender focus:outline-none"
										/>
									</div>

									<div className="flex flex-col text-sm font-medium text-ink-muted">
										{email}
										<input
											className="p-2 mt-1 w-full rounded-md border border-hairline bg-surface-2 text-sm text-ink placeholder-ink-subtle focus:border-primary-lavender focus:ring-1 focus:ring-primary-lavender focus:outline-none"
											type="email"
											name="email"
											id="email"
											required
											placeholder={email_placeholder}
										/>
									</div>

									<fieldset className="w-full">
										<legend className="flex flex-col items-start justify-start text-sm py-2 font-medium text-ink-muted w-full">
											{message}
											<textarea
												name="message"
												id="message"
												required
												className="w-full border border-hairline rounded-md bg-surface-2 text-sm text-ink placeholder-ink-subtle focus:border-primary-lavender focus:ring-1 focus:ring-primary-lavender focus:outline-none p-2 mt-1 min-h-[80px] max-h-[100px]"
												placeholder={message_placeholder}></textarea>
										</legend>
									</fieldset>

									<div className="flex justify-center flex-col pt-2 gap-4">
										<Button
											type="submit"
											className="inline-flex items-center justify-center text-ink bg-primary-lavender hover:bg-primary-hover focus:bg-primary-focus transition-colors shadow-none rounded-md py-2 border border-hairline font-semibold">
											{send}
										</Button>
										<p className="mt-2 text-xs text-ink-subtle font-semibold text-center">
											✉️ {message_2}
										</p>
									</div>
								</form>
							</Card>

							{/* Right side decoration image (Desktop only) */}
							<div className="hidden md:flex md:w-1/2 items-center justify-center bg-surface-2 border-l border-hairline p-8">
								<Image
									src={formImage}
									alt="form decoration"
									className="w-2/3 h-auto grayscale opacity-30 transition-opacity hover:opacity-40 duration-300"
								/>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};
export default Form;

