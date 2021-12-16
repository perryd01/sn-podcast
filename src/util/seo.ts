import { generateSlug } from "./slug";

const DOMAIN = process.env.NEXT_DOMAIN;

export const generateStructuredEpisodeData = (
	e: SpotifyApi.EpisodeObjectSimplified,
) => {
	return {
		"@context": "https://schema.org/",
		"@type": "PodcastEpisode",
		url: `https://${DOMAIN}/epizodok/${generateSlug(e.name)}`,
		name: e.name,
		datePublished: e.release_date,
		description: e.description,
		thumbnailUrl: e.images[0].url,
		partOfSeries: {
			"@type": "PodcastSeries",
			name: "InfluencAir Podcast",
			url: `https://${DOMAIN}/epizodok/`,
		},
	};
};
