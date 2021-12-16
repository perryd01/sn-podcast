import Image from "next/image";
import Link from "next/link";
import { BsFillCalendarDateFill, BsFillStopwatchFill } from "react-icons/bs";

import { generateSlug } from "@/util/slug";

export function EpisodeCard({
	images,
	name,
	duration_ms,
	release_date,
}: SpotifyApi.EpisodeObjectSimplified) {
	return (
		<Link href={`/epizodok/${generateSlug(name)}`} passHref>
			<div className="p-4 hover:bg-opacity-80 rounded-figma-base transition duration-300 cursor-pointer text-material-blue-light-text bg-material-blue-light">
				<div className="flex flex-row gap-2 items-center ">
					<div className="relative flex-shrink-0 w-20 h-20">
						<Image
							src={images[1].url}
							layout="fill"
							className="rounded-figma-base"
							alt="az epizód indexképe"
						/>
					</div>
					<div className="flex flex-col">
						<h1 className="text-sm lg:text-lg font-bold">{name}</h1>
						<div className="flex flex-row gap-2 text-xs lg:text-base">
							<div className="flex gap-1 items-center">
								<span>
									<BsFillStopwatchFill />
								</span>
								<p>{Math.round(duration_ms / 1000 / 60)} perc</p>
							</div>
							<div className="flex flex-row gap-1 items-center">
								<span>
									<BsFillCalendarDateFill />
								</span>
								<p>{release_date}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
