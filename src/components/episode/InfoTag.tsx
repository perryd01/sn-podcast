import clsx from "clsx";

type InfoTagProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
	text: string;
	classname?: string;
	episode?: boolean;
};

export function InfoTag({ icon, text, classname, episode }: InfoTagProps) {
	return (
		<div>
			<div
				className={clsx(
					"flex flex-row gap-2 justify-center items-center lg:text-lg font-medium rounded-lg",
					classname,
				)}
			>
				<span className={clsx(episode && "text-sky-500")}>{icon}</span>
				<p>{text}</p>
			</div>
		</div>
	);
}
