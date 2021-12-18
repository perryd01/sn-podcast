import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

const domain = process.env.NEXT_DOMAIN;

export const renderOptions = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	renderText: (text: any) => {
		return (
			text
				.split("\n")
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.reduce((children: any, textSegment: any, index: any) => {
					// eslint-disable-next-line react/no-array-index-key
					return [...children, index > 0 && <br key={index} />, textSegment];
				}, [])
		);
	},
	renderNode: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[BLOCKS.EMBEDDED_ENTRY]: ({ data }: { data: any }) => {
			if (data.target.sys.contentType.sys.id === "videoEmbed") {
				return (
					<iframe
						src={data.target.fields.embedUrl}
						height="100%"
						width="100%"
						frameBorder="0"
						scrolling="no"
						title={data.target.fields.title}
						allowFullScreen
					/>
				);
			}
			return null;
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[BLOCKS.EMBEDDED_ASSET]: ({ data }: { data: any }) => {
			return (
				<Image
					src={`https:${data.target.fields.file.url}`}
					height={data.target.fields.file.details.image.height}
					width={data.target.fields.file.details.image.width}
					alt={data.target.fields.description || data.target.fields.title}
				/>
			);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[INLINES.HYPERLINK]: (node: any) => {
			const { data, content } = node;
			return (
				<a
					href={data.uri}
					target={`${
						data.uri.startsWith(`https://${domain}`) ? "_self" : "_blank"
					}`}
					rel={`${
						data.uri.startsWith(`https://${domain}`)
							? ""
							: "noopener noreferrer"
					}`}
				>
					{content[0].value}
				</a>
			);
		},
	},
};
