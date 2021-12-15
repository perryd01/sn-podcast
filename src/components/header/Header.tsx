import { MenuIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { Router } from "next/router";
import { useState } from "react";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	Router.events.on("routeChangeStart", () => {
		setIsOpen(false);
	});

	if (isOpen) {
		return (
			<nav>
				<p>inf</p>
			</nav>
		);
	}

	return (
		<nav className="flex z-40 justify-between items-center py-10 px-8 mb-6 h-14 font-noto-sans">
			<h1 className="text-xl font-bold">influenceAir</h1>
			<MenuIcon className=" w-8 cursor-pointer select-none" />
		</nav>
	);
}
