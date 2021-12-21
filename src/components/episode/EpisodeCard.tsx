import Image from "next/image";
import Link from "next/link";
import { BsFillCalendarDateFill, BsFillStopwatchFill } from "react-icons/bs";

import type { IEpisodeFields } from "@/@types/generated/contentful";
import { generateSlug } from "@/util/slug";

export function EpisodeCard({
	title,
	cover,
	guestName,
	season,
	epNumber,
	releaseDate,
}: IEpisodeFields) {
	return (
		<Link href={`/epizodok/${generateSlug(title)}`} passHref>
			<div className="py-2 hover:bg-opacity-80 rounded-figma-base transition duration-300 cursor-pointer">
				<div className="flex flex-row gap-2 items-center ">
					<div className="relative flex-shrink-0 w-20 h-20">
						<Image
							src={`https:${cover?.fields.file.url}`}
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
							alt="az epizód indexképe"
						/>
					</div>
					<div className="flex flex-col">
						<h1 className="text-sm lg:text-lg font-bold">{`${title} - ${guestName} - S${season
							.toString()
							.padStart(2, "0")}E${epNumber.toString().padStart(2, "0")}`}</h1>
						<div className="flex flex-row gap-2 text-xs lg:text-base">
							<div className="flex gap-1 items-center">
								<span>
									<BsFillStopwatchFill />
								</span>
								<p>{Math.round(1 / 1000 / 60)} perc</p>
							</div>
							<div className="flex flex-row gap-1 items-center">
								<span>
									<BsFillCalendarDateFill />
								</span>
								<p>{new Date(releaseDate).toLocaleDateString("hu")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
