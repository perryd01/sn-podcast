import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

type HeaderLinkProps = {
	text: string;
	href: string;
};

export function HeaderLink({ text, href }: HeaderLinkProps) {
	const router = useRouter();

	return (
		<li>
			<Link href={href}>
				<a className={clsx(router.pathname === href && "font-semibold")}>
					{text}
				</a>
			</Link>
		</li>
	);
}
