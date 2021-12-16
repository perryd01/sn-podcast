import { MenuIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Link from "next/link";
import { Router } from "next/router";
import { useState } from "react";

import { HeaderLink } from "./HeaderLink";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	Router.events.on("routeChangeStart", () => {
		setIsOpen(false);
	});

	return (
		<>
			<nav className="flex z-40 justify-between items-center py-6 px-8 lg:px-32 font-noto-sans">
				<Link href="/" passHref>
					<h1 className="text-xl font-bold cursor-pointer">influenceAir</h1>
				</Link>
				<MenuIcon
					className="lg:hidden w-8 cursor-pointer select-none"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				/>
				<div className="hidden lg:inline-block">
					<ul className="flex flex-row gap-4">
						<HeaderLink text="Főoldal" href="/" />
						<HeaderLink text="Epizódok" href="/epizodok" />
						<HeaderLink text="Rólunk" href="/rolunk" />
					</ul>
				</div>
			</nav>

			<div
				className={clsx(
					"lg:hidden font-noto-sans text-2xl text-center lowercase",
					!isOpen && "hidden",
				)}
			>
				<ul>
					<HeaderLink text="Főoldal" href="/" />
					<HeaderLink text="Epizódok" href="/epizodok" />
					<HeaderLink text="Rólunk" href="/rolunk" />
				</ul>
			</div>
		</>
	);
}
