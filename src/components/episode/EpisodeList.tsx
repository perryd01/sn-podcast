import type { EntryCollection } from "contentful";

import type { IEpisodeFields } from "@/@types/generated/contentful";

import { EpisodeCard } from "./EpisodeCard";

type EpisodeListProps = {
	title: string;
	episodes: EntryCollection<IEpisodeFields>;
	limit?: number;
};

export function EpisodeList({ title, episodes, limit }: EpisodeListProps) {
	return (
		<div className="my-8">
			<h1 className="mb-4 text-xl lg:text-2xl font-medium">{title}</h1>
			<div className="flex lg:grid flex-col lg:grid-cols-2 gap-8">
				{episodes?.items?.slice(0, limit ?? episodes.items.length).map((e) => (
					<EpisodeCard {...e.fields} key={e.sys.id} />
				))}
			</div>
		</div>
	);
}
