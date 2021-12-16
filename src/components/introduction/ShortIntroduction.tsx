import Image from "next/image";

export function ShortIntroduction() {
	return (
		<div className="my-4 font-noto-sans">
			<div className="relative flex-shrink-0 justify-center mx-auto w-32 h-32">
				<Image
					src="http://placekitten.com/g/200/300"
					layout="fill"
					className="rounded-sm"
					alt="InfluencAir Podcast logo"
				/>
			</div>
			<h1 className="mt-8 text-2xl font-black text-center">
				InfluenceAIR Podcast
			</h1>
			<p className="text-center">
				Podcast az influncermarketingről, elismert tartalomgyártókkal és
				szakértőkkel
			</p>
		</div>
	);
}
