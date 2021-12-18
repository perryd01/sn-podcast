import clsx from "clsx";
import type { IconType } from "react-icons";

type InfoTagProps = {
	icon: IconType;
	text: string;
	classname?: string;
};

export function InfoTag({ icon, text, classname }: InfoTagProps) {
	return (
		<div>
			<div
				className={clsx(
					"flex flex-row gap-2 justify-center items-center py-1 px-3 lg:text-lg font-medium rounded-figma-base bg-material-purple-lightpurple",
					classname,
				)}
			>
				<span>{icon}</span>
				<p>{text}</p>
			</div>
		</div>
	);
}
