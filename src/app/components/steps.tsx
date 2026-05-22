import React from "react";
import { Subtitle } from "./ui/subtitle";

const Steps: React.FC = () => {
	return (
		<section className="py-16 px-8 text-ink font-sans border-t border-b border-hairline relative overflow-hidden container mx-auto bg-canvas">
			<Subtitle
				subtitle="Cotizá por volumen en 4 pasos"
				paragraph="Somos fabricantes y te garantizamos el mejor precio por volumen. Un proceso simple, rápido y directo."
			/>
			<div className="flex flex-col md:flex-row md:justify-between max-w-4xl mx-auto gap-8 md:gap-4">
				{/* PASO 1 */}
				<div className="step-item relative flex flex-row items-start md:flex-col md:items-center gap-4 md:gap-3 flex-1 text-left md:text-center">
					<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-ink rounded-lg border border-primary-lavender relative z-10 bg-surface-1 font-mono font-semibold text-sm md:text-base">
						1
					</div>
					<div className="flex flex-col">
						<h3 className="text-lg mb-1 text-ink font-semibold">
							Explorá el Catálogo
						</h3>
						<p className="text-sm text-ink-muted">
							Encontrá el producto que necesitás navegando en nuestra web.
						</p>
					</div>
				</div>

				{/* PASO 2 */}
				<div className="step-item relative flex flex-row items-start md:flex-col md:items-center gap-4 md:gap-3 flex-1 text-left md:text-center">
					<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-ink rounded-lg border border-primary-lavender relative z-10 bg-surface-1 font-mono font-semibold text-sm md:text-base">
						2
					</div>
					<div className="flex flex-col">
						<h3 className="text-lg mb-1 text-ink font-semibold">
							Solicitá Cotización
						</h3>
						<p className="text-sm text-ink-muted">
							Indicá la cantidad que te interesa y completá el formulario para recibir un presupuesto a medida.
						</p>
					</div>
				</div>

				{/* PASO 3 */}
				<div className="step-item relative flex flex-row items-start md:flex-col md:items-center gap-4 md:gap-3 flex-1 text-left md:text-center">
					<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-ink rounded-lg border border-primary-lavender relative z-10 bg-surface-1 font-mono font-semibold text-sm md:text-base">
						3
					</div>
					<div className="flex flex-col">
						<h3 className="text-lg mb-1 text-ink font-semibold">
							Recibí el Mejor Precio
						</h3>
						<p className="text-sm text-ink-muted">
							En breve recibirás una cotización formal con nuestro mejor precio de fábrica, sin intermediarios.
						</p>
					</div>
				</div>

				{/* PASO 4 */}
				<div className="step-item relative flex flex-row items-start md:flex-col md:items-center gap-4 md:gap-3 flex-1 text-left md:text-center">
					<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-ink rounded-lg border border-primary-lavender relative z-10 bg-surface-1 font-mono font-semibold text-sm md:text-base">
						4
					</div>
					<div className="flex flex-col">
						<h3 className="text-lg mb-1 text-ink font-semibold">
							Coordiná la Entrega
						</h3>
						<p className="text-sm text-ink-muted">
							Aprobá la cotización y un asesor coordinará con vos la logística de entrega más rápida y económica.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Steps;
