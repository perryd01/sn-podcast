import type { IEpisodeFields } from "@/@types/generated/contentful";

import { generateSlug } from "./slug";

const DOMAIN = process.env.NEXT_DOMAIN;

export const generateStructuredEpisodeData = (e: IEpisodeFields) => {
	return {
		"@context": "https://schema.org/",
		"@type": "PodcastEpisode",
		url: `https://${DOMAIN}/epizodok/${generateSlug(e.title)}`,
		name: e.title,
		datePublished: e.releaseDate,
		description: e.description,
		thumbnailUrl: `https${e.cover?.fields.file.url}`,
		partOfSeries: {
			"@type": "PodcastSeries",
			name: "InfluencAir Podcast",
			url: `https://${DOMAIN}/epizodok/`,
		},
	};
};
