import React from "react";
import { Drawer } from "vaul";
import { Button } from "../ui/button";
import { Grip, Menu } from "lucide-react";
import Link from "next/link";

export function MyDrawer() {
	return (
		<Drawer.Root>
			<Drawer.Trigger asChild>
				<Button className="bg-surface-1 hover:bg-surface-2 border border-hairline text-ink hover:text-ink rounded-md p-2">
					<Menu className="h-5 w-5" />
				</Button>
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-canvas/80 backdrop-blur-sm z-50" />
				<Drawer.Content className="flex flex-col fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-surface-1 border-r border-hairline text-ink shadow-2xl">
					<Button className="h-14 inline-flex items-center justify-center text-ink bg-surface-2 hover:bg-surface-3 border-b border-hairline rounded-none transition-colors">
						<Grip className="h-6 w-6 text-primary-lavender" />
					</Button>
					<div className="p-6 flex-1 flex justify-center items-center flex-col">
						<div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full mb-8 bg-hairline" />
						<div className="text-center">
							<Drawer.Title className="text-3xl mb-2 font-bold text-ink">
								Plásticos <br /> <span className="text-4xl font-extrabold text-primary-lavender">Santa María</span>
							</Drawer.Title>
							<Drawer.Description className="text-ink-muted text-sm mt-2">
								Tu mejor opción en envases plásticos
							</Drawer.Description>
						</div>
					</div>
					<div className="p-4 bg-surface-2 border-t border-hairline mt-auto">
						<div className="grid grid-cols-2 gap-3 justify-center items-center w-full mx-auto">
							<Link
								href="https://wa.me/+5491151083838"
								target="_blank"
								rel="noopener noreferrer"
								className="cursor-pointer text-center py-2.5 px-4 rounded-md bg-surface-1 hover:bg-surface-3 border border-hairline text-ink-muted hover:text-ink transition-colors font-medium text-sm">
								Whatsapp
							</Link>
							<Link
								href="/about"
								className="cursor-pointer text-center py-2.5 px-4 rounded-md bg-surface-1 hover:bg-surface-3 border border-hairline text-ink-muted hover:text-ink transition-colors font-medium text-sm">
								Nosotros
							</Link>
							<Link
								href="/#products"
								className="cursor-pointer text-center py-2.5 px-4 rounded-md bg-surface-1 hover:bg-surface-3 border border-hairline text-ink-muted hover:text-ink transition-colors font-medium text-sm">
								Productos
							</Link>
							<Link
								href="/#deals"
								className="cursor-pointer text-center py-2.5 px-4 rounded-md bg-surface-1 hover:bg-surface-3 border border-hairline text-ink-muted hover:text-ink transition-colors font-medium text-sm">
								Ofertas
							</Link>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
export default MyDrawer;
