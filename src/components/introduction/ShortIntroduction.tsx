import Image from "next/image";

export function ShortIntroduction() {
	return (
		<div className="my-4 font-noto-sans text-center">
			<div className="flex relative flex-row flex-shrink-0 w-32 h-32">
				<Image src="http://placekitten.com/g/200/300" layout="fill" />
			</div>
			<h1 className=" text-2xl font-black">InfluenceAIR Podcast</h1>
			<p>
				Podcast az influncermarketingről, elismert tartalomgyártókkal és
				szakértőkkel
			</p>
		</div>
	);
}
