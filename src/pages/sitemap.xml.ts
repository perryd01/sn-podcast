import type { EntryCollection } from "contentful";
import type { GetServerSideProps } from "next";

import type { IEpisodeFields } from "@/@types/generated/contentful";
import { getEpisodes } from "@/util/contentful";
import { generateSlug } from "@/util/slug";

const domain = process.env.NEXT_DOMAIN;

function generateSiteMap(episodes: EntryCollection<IEpisodeFields>) {
	return `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://${domain}</loc>
	</url>
	<url>
		<loc>https://${domain}/hirek</loc>
	</url>
	<url>
		<loc>https://${domain}/rolunk</loc>
	</url>
	<url>
		<loc>https://${domain}/esemenyek</loc>
	</url>
	${episodes.items
		.map(({ fields }) => {
			return `<url><loc>https://${domain}/epizodok/${generateSlug(
				fields.title,
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
	const episodes = await getEpisodes();

	const sitemap = generateSiteMap(episodes);

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default SiteMap;
