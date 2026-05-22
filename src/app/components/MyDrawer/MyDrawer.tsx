import React, { useState } from "react";
import { Drawer } from "vaul";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function MyDrawer() {
	const [open, setOpen] = useState(false);

	return (
		<Drawer.Root open={open} onOpenChange={setOpen} direction="left">
			<Drawer.Trigger asChild>
				<Button className="bg-surface-1 hover:bg-surface-2 border border-hairline text-ink hover:text-ink rounded-md p-2 h-10 w-10 flex items-center justify-center transition-colors">
					<Menu className="h-5 w-5" />
				</Button>
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-canvas/80 backdrop-blur-sm z-50" onClick={() => setOpen(false)} />
				<Drawer.Content className="flex flex-col fixed inset-y-0 left-0 z-50 w-full max-w-[280px] bg-surface-1 border-r border-hairline text-ink shadow-2xl">
					<div className="flex h-14 items-center justify-between px-4 border-b border-hairline bg-surface-2">
						<Drawer.Title className="text-sm font-black text-ink">
							Santa María <span className="text-xs text-primary-lavender font-medium">Plásticos</span>
						</Drawer.Title>
						<Drawer.Description className="sr-only">
							Menú de navegación de Plásticos Santa María
						</Drawer.Description>
						<Drawer.Close asChild>
							<Button variant="ghost" size="icon" className="h-8 w-8 text-ink-muted hover:text-ink bg-transparent hover:bg-surface-3 border-none rounded-md flex items-center justify-center transition-colors">
								<X className="h-4 w-4" />
							</Button>
						</Drawer.Close>
					</div>

					<div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
						<Link
							href="/#"
							onClick={() => setOpen(false)}
							className="flex items-center px-4 py-3 rounded-md text-base font-medium text-ink-muted hover:text-ink hover:bg-surface-2 border border-transparent hover:border-hairline transition duration-200"
						>
							Inicio
						</Link>
						<Link
							href="/#products"
							onClick={() => setOpen(false)}
							className="flex items-center px-4 py-3 rounded-md text-base font-medium text-ink-muted hover:text-ink hover:bg-surface-2 border border-transparent hover:border-hairline transition duration-200"
						>
							Productos
						</Link>
						<Link
							href="/#deals"
							onClick={() => setOpen(false)}
							className="flex items-center px-4 py-3 rounded-md text-base font-medium text-ink-muted hover:text-ink hover:bg-surface-2 border border-transparent hover:border-hairline transition duration-200"
						>
							Ofertas
						</Link>
						<Link
							href="/about"
							onClick={() => setOpen(false)}
							className="flex items-center px-4 py-3 rounded-md text-base font-medium text-ink-muted hover:text-ink hover:bg-surface-2 border border-transparent hover:border-hairline transition duration-200"
						>
							Nosotros
						</Link>
					</div>

					<div className="p-4 bg-surface-2 border-t border-hairline mt-auto flex flex-col gap-2">
						<a
							href="https://wa.me/5491151083838"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md bg-primary-lavender hover:bg-primary-hover text-white text-sm font-semibold transition-colors duration-200 shadow-md"
						>
							📲 WhatsApp
						</a>
						<span className="text-center text-[10px] text-ink-subtle mt-1 font-mono">
							Tu mejor opción en envases
						</span>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}

export default MyDrawer;
