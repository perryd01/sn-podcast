import type { InferGetServerSidePropsType } from "next";

import { EpisodeList } from "@/components/episode/EpisodeList";
import { ShortIntroduction } from "@/components/introduction/ShortIntroduction";
import { SocialPanel } from "@/components/socials/SocialPanel";
import { getEpsiodes } from "@/util/spotify";

export default function Page({
	episodes,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
	return (
		<div>
			<ShortIntroduction />
			<SocialPanel classname="rounded-full shadow-figma-base  text-3xl bg-white text-black" />
			<EpisodeList title="Legutóbbi adásaink" episodes={episodes} limit={4} />
		</div>
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
