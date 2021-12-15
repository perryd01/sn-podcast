import type { GetServerSideProps } from "next";

import { generateSlug } from "@/util/slug";
import { getEpsiodes } from "@/util/spotify";

const domain = process.env.NEXT_DOMAIN;

function generateSiteMap(episodes: SpotifyApi.EpisodeObjectSimplified[]) {
	return `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://${domain}</loc>
	</url>
	<url>
		<loc>https://${domain}/hirek</loc>
	</url>
	<url>
		<loc>https://${domain}/esemenyek</loc>
	</url>
	${episodes
		.map((e) => {
			return `<url><loc>https://${domain}/epizodok/${generateSlug(
				e.name,
			)}</loc></url>`;
		})
		.join("")}
	</urlset>
	`;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const episodes = await getEpsiodes();

	const sitemap = generateSiteMap(episodes);

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default SiteMap;
