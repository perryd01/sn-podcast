import { MenuIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";

import { HeaderLink } from "./HeaderLink";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	Router.events.on("routeChangeStart", () => {
		setIsOpen(false);
	});

	return (
		<>
			<nav className="flex z-40 justify-between items-center py-6 px-8 font-noto-sans">
				<Link href="/" passHref>
					<h1 className="text-xl font-bold cursor-pointer">influenceAir</h1>
				</Link>
				<MenuIcon
					className=" w-8 cursor-pointer select-none"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				/>
			</nav>

			<div
				className={clsx(
					"px-8 font-noto-sans text-2xl lowercase",
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
