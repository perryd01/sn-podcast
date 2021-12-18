import SpotifyWebApi from "spotify-web-api-node";

import { generateSlug } from "./slug";

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.NEXT_SPOTIFY_CLIENT_ID,
	clientSecret: process.env.NEXT_SPOTIFY_CLIENT_SECRET,
});

export const getEpsiodes = async () => {
	const token = await spotifyApi.clientCredentialsGrant();
	spotifyApi.setAccessToken(token.body.access_token);
	const episodes = await spotifyApi.getShowEpisodes("1oS0OnLaxlgnvgLKqBmT7X", {
		market: "HU",
	});
	return episodes.body.items
		.map((e) => e)
		.sort(
			(a, b) =>
				new Date(b.release_date).getTime() - new Date(a.release_date).getTime(),
		);
};

export const getOneEpisode = async (slug: string | string[] | undefined) => {
	const episodes = await getEpsiodes();
	return episodes.filter((e) => generateSlug(e.name) === slug)[0];
};
