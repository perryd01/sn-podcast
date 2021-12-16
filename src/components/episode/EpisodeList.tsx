import { EpisodeCard } from "./EpisodeCard";

type EpisodeListProps = {
	title: string;
	episodes: SpotifyApi.EpisodeObjectSimplified[];
	limit?: number;
};

export function EpisodeList({ title, episodes, limit }: EpisodeListProps) {
	return (
		<div className="my-8">
			<h1 className="mb-4 text-xl lg:text-2xl font-medium">{title}</h1>
			<div className="flex lg:grid flex-col lg:grid-cols-2 gap-8">
				{episodes.slice(0, limit ?? episodes.length).map((e) => (
					<EpisodeCard {...e} key={e.id} />
				))}
			</div>
		</div>
	);
}
