import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
	text: string;
	onChange: Dispatch<SetStateAction<string>>;
	numOfHits: number;
};

export function SearchBar({ text, onChange, numOfHits }: SearchBarProps) {
	return (
		<div>
			<input
				type="text"
				className={clsx(
					"p-2 w-full bg-gray-100 rounded-2xl border-2 transition duration-300 border-material-blue-light",
					numOfHits === 0 && "text-red-600",
				)}
				placeholder="Keresés"
				value={text}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}
