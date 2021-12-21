import Image from "next/image";

export function ShortIntroduction() {
	return (
		<div className="font-noto-sans">
			<div className="relative flex-shrink-0 justify-center mx-auto w-48 lg:w-64 h-48 lg:h-64">
				<Image
					priority
					src="http://placekitten.com/g/200/300"
					layout="fill"
					className="rounded-full"
					alt="InfluencAir Podcast logo"
				/>
			</div>
			<h1 className="mt-8 text-2xl lg:text-3xl font-black text-center">
				InfluenceAIR Podcast
			</h1>
			<p className="lg:text-lg text-center">
				Podcast az influncermarketingről, elismert tartalomgyártókkal és
				szakértőkkel
			</p>
		</div>
	);
}
