import { createClient } from "contentful";

import { IAboutFields, IEpisodeFields } from "@/@types/generated/contentful";

const client = createClient({
	space: process.env.NEXT_CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
	accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN ?? "ErrorNoAccesToken",
});

export const getEpisodes = async () => {
	const episodes = await client.getEntries<IEpisodeFields>({
		content_type: "episode",
	});
	episodes.items.sort((a, b) => {
		if ((a.sys.createdAt || "") < (b.sys.createdAt || "")) {
			return 1;
		}
		if ((a.sys.createdAt || "") > (b.sys.createdAt || "")) {
			return -1;
		}
		return 0;
	});
	return episodes;
};

export const getOneEpisode = async (slug: string | string[] | undefined) => {
	const {
		items: [episode],
	} = await client.getEntries<IEpisodeFields>({
		content_type: "episode",
		"fields.slug": slug,
		include: 10,
		limit: 1,
	});
	return episode;
};

export const getAboutUs = async () => {
	const aboutUs = await client.getEntries<IAboutFields>({
		content_type: "about",
		include: 10,
		limit: 1,
	});
	return aboutUs;
};
