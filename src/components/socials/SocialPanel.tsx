import clsx from "clsx";
import {
	FaApple,
	FaFacebook,
	FaSpotify,
	FaTiktok,
	FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

type SocialPanelProps = {
	classname?: string;
};

export function SocialPanel({ classname }: SocialPanelProps) {
	return (
		<div
			className={clsx(
				"flex flex-row gap-4 justify-around p-2 my-2 mx-auto max-w-2xl",
				classname,
			)}
		>
			<a
				href="https://www.facebook.com/influenceairpodcast"
				target="_blank"
				rel="noreferrer"
				title="InfluenceAir Podcast a Facebook-on"
				className="hover:text-social-facebook transition duration-300 cursor-pointer"
			>
				<span>
					<FaFacebook />
				</span>
			</a>
			<a
				href="https://www.instagram.com/influenceairpodcast/"
				target="_blank"
				rel="noreferrer"
				title="InfluenceAir Podcast az Instagram-on"
				className="hover:text-social-instagram transition duration-300 cursor-pointer"
			>
				<span>
					<RiInstagramFill />
				</span>
			</a>
			<a
				href="https://www.tiktok.com/@influenceairpodcast"
				target="_blank"
				rel="noreferrer"
				title="InfluenceAir Podcast a Tiktok-on"
				className="hover:text-social-tiktok transition duration-300 cursor-pointer"
			>
				<span>
					<FaTiktok />
				</span>
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				title="InfluenceAir Podcast a Youtube-on"
				href="https://www.youtube.com/channel/UCxVuKBFit6CQR9gnbNLf-Mg"
				className="hover:text-social-youtube transition duration-300 cursor-pointer"
			>
				<span>
					<FaYoutube />
				</span>
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				title="InfluenceAir Podcast a Spotify-on"
				href="https://open.spotify.com/show/1oS0OnLaxlgnvgLKqBmT7X?si=XxobzKFOTUe9IAnuvXjMNA"
				className="hover:text-social-spotify transition duration-300 cursor-pointer"
			>
				<span>
					<FaSpotify />
				</span>
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				title="InfluenceAir Podcast az Apple Podcast-on"
				href="https://podcasts.apple.com/us/podcast/influenceair-podcast/id1598296623"
				className="hover:text-black transition duration-300 cursor-pointer"
			>
				<span>
					<FaApple />
				</span>
			</a>
		</div>
	);
}
