import clsx from "clsx";
import {
	FaFacebook,
	FaPodcast,
	FaSpotify,
	FaTiktok,
	FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

type SocialPanelProps = {
	facebook?: string;
	instagram?: string;
	tiktok?: string;
	youtube?: string;
	spotify?: string;
	apple?: string;
	classname?: string;
};

export function SocialPanel({
	classname,
	facebook,
	apple,
	instagram,
	spotify,
	tiktok,
	youtube,
}: SocialPanelProps) {
	return (
		<div
			className={clsx(
				"flex flex-row gap-4 justify-around p-2 my-2 mx-auto max-w-2xl",
				classname,
			)}
		>
			{facebook && (
				<a
					href={facebook}
					target="_blank"
					rel="noreferrer"
					title="InfluenceAir Podcast a Facebook-on"
					className="hover:text-social-facebook transition duration-300 cursor-pointer"
				>
					<span>
						<FaFacebook />
					</span>
				</a>
			)}
			{instagram && (
				<a
					href={instagram}
					target="_blank"
					rel="noreferrer"
					title="InfluenceAir Podcast az Instagram-on"
					className="hover:text-social-instagram transition duration-300 cursor-pointer"
				>
					<span>
						<RiInstagramFill />
					</span>
				</a>
			)}
			{tiktok && (
				<a
					href={tiktok}
					target="_blank"
					rel="noreferrer"
					title="InfluenceAir Podcast a Tiktok-on"
					className="hover:text-social-tiktok transition duration-300 cursor-pointer"
				>
					<span>
						<FaTiktok />
					</span>
				</a>
			)}
			{youtube && (
				<a
					target="_blank"
					rel="noreferrer"
					title="InfluenceAir Podcast a Youtube-on"
					href={youtube}
					className="hover:text-social-youtube transition duration-300 cursor-pointer"
				>
					<span>
						<FaYoutube />
					</span>
				</a>
			)}
			{spotify && (
				<a
					target="_blank"
					rel="noreferrer"
					title="InfluenceAir Podcast a Spotify-on"
					href={spotify}
					className="hover:text-social-spotify transition duration-300 cursor-pointer"
				>
					<span>
						<FaSpotify />
					</span>
				</a>
			)}
			{apple && (
				<a
					target="_blank"
					rel="noreferrer"
					title="InfluenceAir Podcast az Apple Podcast-on"
					href={apple}
					className="hover:text-social-apple transition duration-300 cursor-pointer"
				>
					<span>
						<FaPodcast />
					</span>
				</a>
			)}
		</div>
	);
}
