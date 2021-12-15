import clsx from "clsx";

type BaseCardProps = {
	children: JSX.Element | JSX.Element[];
	color: "blue" | "purple";
};

export function BaseCard({ children, color }: BaseCardProps) {
	return (
		<div
			className={clsx(
				"py-8 px-4 my-4 font-medium rounded-figma-base",
				color === "blue"
					? "bg-material-blue-light text-material-blue-light-text"
					: "bg-material-purple-lightpurple text-material-purple-light-text",
			)}
		>
			{children}
		</div>
	);
}
