import type { GetStaticProps } from "next";

import { generateSlug } from "@/util/slug";
import { getEpsiodes, getOneEpisode } from "@/util/spotify";

export default function SelectedEpisodePage() {
	return (
		<div>
			<p>asd</p>
		</div>
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
	const allEpisodes = await getEpsiodes();
	return {
		paths:
			allEpisodes.map(({ name }) => `/epizodok/${generateSlug(name)}`) ?? [],
		fallback: false,
	};
};
