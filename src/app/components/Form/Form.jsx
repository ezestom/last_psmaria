"use client";

import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import xIcon from "/public/icons/x.svg";
import "./Form.css";
import { Button } from "../ui/button";
import Image from "next/image";
import { Card } from "../ui/card";
import formImage from "/public/icons/message.svg";

export function Form({
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
}) {
	const [dialog, setDialog] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isMessageSuccess()) {
			toast(
				"Information successfully submitted! Thank you for your trust.",
				{
					type: "success",
				}
			);
			closeDialog();
		}
	}, []); // Agrega las dependencias aquí

	const openDialog = () => {
		setDialog(true);
		document.body.style.overflow = "hidden";
		document.getElementById("navbar").style.display = "none";
		document.getElementById("progress").style.display = "none";
	};

	const closeDialog = () => {
		setDialog(false);
		document.body.style.overflow = "auto";
		document.getElementById("navbar").style.display = "flex";
		document.getElementById("progress").style.display = "flex";
	};

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

				closeDialog();
				window.location.href = redirectTo;
				setIsLoading(false);
			}, 3000);
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error(
				`There was a problem submitting the form, please try again. (Error: ${error.message})`
			);
			setIsLoading(false); // Asegúrate de desactivar el loading en caso de error
		}
	};

	return (
		<div className="relative flex items-center mt-10 justify-center z-10  m-auto">
			<Toaster />
			{/* <div className="flex w-full items-center justify-center">
				<a
					href="https://librecounter.org/referer/show"
					target="_blank"
					className="w-2 absolute bottom-5 mx-auto ml-7"
					name="referer">
					<img
						src="https://librecounter.org/counter.svg"
						referrerPolicy="unsafe-url"
						alt="counter component"
					/>
				</a>
			</div> */}
			<span className="flex  btn-form">
				<Button
					onClick={openDialog}
					id="open-dialog"
					type="submit"
					className="inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1">
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
					className="backdrop-blur  flex items-center justify-center fixed top-0  w-full h-full">
					<div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

					<section
						className="backdrop-blur-md flex items-center justify-center overflow-hidden  "
						id="form-section">
						<main className="flex items-center justify-center border rounded-md ">
							<Card
								className="max-w-[600px] border-none"
								id="input-container">
								<button
									className="absolute top-2 right-2 text-black"
									onClick={closeDialog}>
									<Image
										className="size-8 hover:text-black "
										src={xIcon}
										alt="x-icon"
										id="close-dialog"
									/>
								</button>
								{isLoading && (
									<div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-white/10 opacity-50 flex justify-center items-center z-50 rounded-md w-full h-full">
										<span className="loader"></span>
									</div>
								)}
								<h1 className="font-bold mx-2 text-gray-900 text-xl sm:text-2xl ">
									{h1}
								</h1>

								<p className="mt-4 text-sm leading-relaxed mx-2 text-gray-700">
									{subtitle}
								</p>
								<form
									onSubmit={handleSubmit}
									method="POST"
									action="https://formsubmit.co/maximoafornasari@gmail.com"
									className="mt-8 gap-6 mx-2">
									{/* input cc */}
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
										value={toast_message}></input>

									<input
										type="hidden"
										name="_captcha"
										value="false"
									/>

									<div className="col-span-6 sm:col-span-3">
										<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
											{name}
											<input
												type="text"
												name="name"
												id="name"
												placeholder="Juan Perez"
												required
												className="p-2 my-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
											/>
										</label>
									</div>
									<div className="col-span-6 sm:col-span-3">
										<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
											{company}
											<input
												type="text"
												name="company"
												id="company"
												placeholder="Plásticos Santa María"
												required
												className="p-2 my-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
											/>
										</label>
									</div>
									<div className="col-span-6 sm:col-span-3">
										<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
											{email}
											<input
												className="p-2 my-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
												type="email"
												name="email"
												id="email"
												required
												placeholder={email_placeholder}
											/>
										</label>
									</div>
									<fieldset>
										<legend className="flex flex-col items-start justify-start text-sm py-2 font-medium text-gray-700 ">
											{message}
											<textarea
												name="message"
												id="message"
												required
												className="w-full border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 max-h-[100px]"
												placeholder={
													message_placeholder
												}></textarea>
										</legend>
									</fieldset>

									<div className="flex justify-center flex-col pt-4 gap-4">
										<Button
											type="submit"
											className="inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1">
											{send}
										</Button>
										<p className="mt-4 text-sm text-gray-700 font-semibold sm:mt-0 text-center ">
											✉️ {message_2}
										</p>
									</div>
								</form>
							</Card>
							<Image
								src={formImage}
								alt="form"
								className="hidden md:block w-1/2 grayscale"
							/>
						</main>
					</section>
				</dialog>
			)}
		</div>
	);
}
