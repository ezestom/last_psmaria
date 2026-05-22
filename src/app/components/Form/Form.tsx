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
			<Toaster />
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

			{dialog && (
				<dialog
					open
					className="backdrop-blur flex items-center justify-center fixed inset-0 w-full h-full z-[100] bg-black/60 border-none">
					<div className="fixed inset-0 -z-10 h-full w-full bg-canvas bg-[linear-gradient(to_right,rgba(35,37,42,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,37,42,0.15)_1px,transparent_1px)] bg-[size:14px_24px]"></div>
					<section
						className="backdrop-blur-md flex items-center justify-center overflow-hidden max-h-[95vh] rounded-md shadow-none border border-hairline"
						id="form-section">
						<main className="flex items-center justify-center border border-hairline rounded-md relative bg-surface-1">
							<Card
								className="max-w-[600px] border-none bg-surface-1"
								id="input-container">
								<button
									type="button"
									className="absolute top-2 right-2 text-ink z-50 p-2 rounded-full hover:bg-surface-2 transition"
									onClick={closeDialog}>
									<Image
										className="size-6 hover:text-ink filter invert opacity-80"
										src={xIcon}
										alt="x-icon"
										id="close-dialog"
									/>
								</button>
								{isLoading && (
									<div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-black/40 flex justify-center items-center z-50 rounded-md w-full h-full">
										<span className="loader"></span>
									</div>
								)}
								<h2 className="font-bold mx-2 text-ink text-xl sm:text-2xl text-left">
									{h1}
								</h2>

								<p className="mt-4 text-sm leading-relaxed mx-2 text-ink-muted text-left">
									{subtitle}
								</p>
								<form
									onSubmit={handleSubmit}
									method="POST"
									action="https://formsubmit.co/maximoafornasari@gmail.com"
									className="mt-8 gap-6 mx-2 text-left">
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

									<div className="col-span-6 sm:col-span-3">
										<label className="flex justify-start items-start py-2 flex-col text-sm font-medium text-ink-muted">
											{name}
											<input
												type="text"
												name="name"
												id="name"
												placeholder="Juan Perez"
												required
												className="p-2 my-1 w-full rounded-md border border-hairline bg-surface-2 text-sm text-ink focus:border-primary-lavender focus:ring-1 focus:ring-primary-lavender focus:outline-none"
											/>
										</label>
									</div>
									<div className="col-span-6 sm:col-span-3">
										<label className="flex justify-start items-start py-2 flex-col text-sm font-medium text-ink-muted">
											{company}
											<input
												type="text"
												name="company"
												id="company"
												placeholder="Plásticos Santa María"
												required
												className="p-2 my-1 w-full rounded-md border border-hairline bg-surface-2 text-sm text-ink focus:border-primary-lavender focus:ring-1 focus:ring-primary-lavender focus:outline-none"
											/>
										</label>
									</div>
									<div className="col-span-6 sm:col-span-3">
										<label className="flex justify-start items-start py-2 flex-col text-sm font-medium text-ink-muted">
											{email}
											<input
												className="p-2 my-1 w-full rounded-md border border-hairline bg-surface-2 text-sm text-ink focus:border-primary-lavender focus:ring-1 focus:ring-primary-lavender focus:outline-none"
												type="email"
												name="email"
												id="email"
												required
												placeholder={email_placeholder}
											/>
										</label>
									</div>
									<fieldset>
										<legend className="flex flex-col items-start justify-start text-sm py-2 font-medium text-ink-muted w-full">
											{message}
											<textarea
												name="message"
												id="message"
												required
												className="w-full border border-hairline rounded-md bg-surface-2 text-sm text-ink focus:border-primary-lavender focus:ring-1 focus:ring-primary-lavender focus:outline-none p-2 max-h-[100px]"
												placeholder={message_placeholder}></textarea>
										</legend>
									</fieldset>

									<div className="flex justify-center flex-col pt-4 gap-4">
										<Button
											type="submit"
											className="inline-flex items-center justify-center text-ink bg-primary-lavender hover:bg-primary-hover focus:bg-primary-focus transition-colors shadow-none rounded-md py-2 border border-hairline font-semibold">
											{send}
										</Button>
										<p className="mt-4 text-sm text-ink-subtle font-semibold sm:mt-0 text-center">
											✉️ {message_2}
										</p>
									</div>
								</form>
							</Card>
							<Image
								src={formImage}
								alt="form"
								className="hidden md:block w-1/2 grayscale opacity-40 p-4"
							/>
						</main>
					</section>
				</dialog>
			)}
		</div>
	);
};
export default Form;
