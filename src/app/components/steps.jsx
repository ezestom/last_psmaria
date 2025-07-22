import { Subtitle } from "./ui/subtitle";

const Steps = () => {
	return (
		<section
			className="py-12 px-8 text-slate-300 font-sans border-t border-b border-[#f5f5f520] border-dashed relative overflow-hidden container mx-auto"
			data-astro-cid-jif6nq4u="">
			<Subtitle
				subtitle="Cotizá por volumen en 4 pasos"
				paragraph="Somos fabricantes y te garantizamos el mejor precio por volumen. Un proceso simple, rápido y directo."
			/>
			<div
				className="flex flex-col md:flex-row md:justify-between max-w-4xl mx-auto gap-8 md:gap-4"
				data-astro-cid-jif6nq4u="">
				{/* PASO 1 */}
				<div
					className="step-item relative flex flex-row items-start md:flex-col md:items-center gap-4 md:gap-3 flex-1 text-left md:text-center"
					data-astro-cid-jif6nq4u="">
					<div
						className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-black rounded-lg border font-semibold text-sm md:text-base border-blue-500 relative z-10 bg-[radial-gradient(closest-side,theme(colors.white),theme(colors.white),theme(colors.blue.500))]"
						data-astro-cid-jif6nq4u="">
						1
					</div>
					<div className="flex flex-col" data-astro-cid-jif6nq4u="">
						<h3
							className="text-lg mb-1 text-gray-600 font-bold"
							data-astro-cid-jif6nq4u="">
							Explorá el Catálogo
						</h3>
						<p
							className="text-sm text-gray-600"
							data-astro-cid-jif6nq4u="">
							Encontrá el producto que necesitás navegando en
							nuestra web.
						</p>
					</div>
				</div>

				{/* PASO 2 */}
				<div
					className="step-item relative flex flex-row items-start md:flex-col md:items-center gap-4 md:gap-3 flex-1 text-left md:text-center"
					data-astro-cid-jif6nq4u="">
					<div
						className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-black rounded-lg border font-semibold text-sm md:text-base border-blue-500 relative z-10 bg-[radial-gradient(closest-side,theme(colors.white),theme(colors.white),theme(colors.blue.500))]"
						data-astro-cid-jif6nq4u="">
						2
					</div>
					<div className="flex flex-col" data-astro-cid-jif6nq4u="">
						<h3
							className="text-lg mb-1 text-gray-600 font-bold"
							data-astro-cid-jif6nq4u="">
							Solicitá Cotización
						</h3>
						<p
							className="text-sm text-gray-600"
							data-astro-cid-jif6nq4u="">
							Indicá la cantidad que te interesa y completá el
							formulario para recibir un presupuesto a medida.
						</p>
					</div>
				</div>

				{/* PASO 3 */}
				<div
					className="step-item relative flex flex-row items-start md:flex-col md:items-center gap-4 md:gap-3 flex-1 text-left md:text-center"
					data-astro-cid-jif6nq4u="">
					<div
						className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-black rounded-lg border font-semibold text-sm md:text-base border-blue-500 relative z-10 bg-[radial-gradient(closest-side,theme(colors.white),theme(colors.white),theme(colors.blue.500))]"
						data-astro-cid-jif6nq4u="">
						3
					</div>
					<div className="flex flex-col" data-astro-cid-jif6nq4u="">
						<h3
							className="text-lg mb-1 text-gray-600 font-bold"
							data-astro-cid-jif6nq4u="">
							Recibí el Mejor Precio
						</h3>
						<p
							className="text-sm text-gray-600"
							data-astro-cid-jif6nq4u="">
							En breve recibirás una cotización formal con nuestro
							mejor precio de fábrica, sin intermediarios.
						</p>
					</div>
				</div>

				{/* PASO 4 */}
				<div
					className="step-item relative flex flex-row items-start md:flex-col md:items-center gap-4 md:gap-3 flex-1 text-left md:text-center"
					data-astro-cid-jif6nq4u="">
					<div
						className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-black rounded-lg border font-semibold text-sm md:text-base border-blue-500 relative z-10 bg-[radial-gradient(closest-side,theme(colors.white),theme(colors.white),theme(colors.blue.500))]"
						data-astro-cid-jif6nq4u="">
						4
					</div>
					<div className="flex flex-col" data-astro-cid-jif6nq4u="">
						<h3
							className="text-lg mb-1 text-gray-600 font-bold"
							data-astro-cid-jif6nq4u="">
							Coordiná la Entrega
						</h3>
						<p
							className="text-sm text-gray-600"
							data-astro-cid-jif6nq4u="">
							Aprobá la cotización y un asesor coordinará con vos
							la logística de entrega más rápida y económica.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Steps;
