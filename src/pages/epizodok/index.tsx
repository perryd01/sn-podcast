import type { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useState } from "react";

import { EpisodeList } from "@/components/episode/EpisodeList";
import { SearchBar } from "@/components/search/SearchBar";
import { getEpsiodes } from "@/util/spotify";

export default function EpisodesPage({
	episodes,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
	const [searchQuery, setSearchQuery] = useState("");
	const filteredEpisodes = episodes.filter((e) =>
		e.name
			.toLowerCase()
			.normalize("NFD")
			.replace(/[^\w ]+/g, "")
			.includes(
				searchQuery
					.toLowerCase()
					.normalize("NFD")
					.replace(/[^\w ]+/g, ""),
			),
	);
	return (
		<>
			<Head>
				<title>Epizódok | InfluencAir Podcast</title>
			</Head>
			<div>
				<SearchBar
					numOfHits={filteredEpisodes.length}
					text={searchQuery}
					onChange={setSearchQuery}
				/>
				<EpisodeList episodes={filteredEpisodes} title="Epizódok" />
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	return {
		props: {
			episodes: await getEpsiodes(),
		},
		revalidate: 60 * 60 * 1,
	};
};
