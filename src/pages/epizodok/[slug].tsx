import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Entry } from "contentful";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { BsFillCalendarDateFill, BsFillStopwatchFill } from "react-icons/bs";

import type { IEpisodeFields } from "@/@types/generated/contentful";
import { InfoTag } from "@/components/episode/InfoTag";
import { getEpisodes, getOneEpisode } from "@/util/contentful";
import { renderOptions } from "@/util/renderOptions";
import { generateSlug } from "@/util/slug";

export default function SelectedEpisodePage({
	episode,
}: {
	episode: Entry<IEpisodeFields>;
}) {
	const { fields } = episode;
	const { title, guestName, cover, description, releaseDate } = fields;
	return (
		<>
			<Head>
				<title>{`${title} - ${guestName}`} | InfluenceAir Podcast</title>
				<meta name="description" content={title} />
			</Head>
			<article>
				<div className="relative mb-8 w-full h-64 lg:h-80">
					<Image
						priority
						src={
							cover
								? `https:${cover.fields.file.url}`
								: "https://placekitten.com/500/500"
						}
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
						alt="Az epizód indexképe"
					/>
				</div>
				<h1 className="mb-6 text-3xl lg:text-4xl font-bold">{`${title} - ${guestName}`}</h1>
				<div className="flex flex-row gap-4">
					<InfoTag
						icon={<BsFillStopwatchFill />}
						text={`${Math.round(5 / 1000 / 60)} perc`}
					/>
					<InfoTag
						icon={<BsFillCalendarDateFill />}
						text={new Date(releaseDate).toLocaleDateString("hu")}
					/>
				</div>
				<div className="my-8 max-w-none text-lg prose lg:prose-xl">
					{documentToReactComponents(description, renderOptions)}
				</div>
			</article>
		</>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const episode = await getOneEpisode(params?.slug);
	return {
		props: {
			episode,
		},
	};
};

export const getStaticPaths = async () => {
	const allEpisodes = await getEpisodes();
	return {
		paths:
			allEpisodes.items.map(
				({ fields }) => `/epizodok/${generateSlug(fields.title)}`,
			) ?? [],
		fallback: false,
	};
};
