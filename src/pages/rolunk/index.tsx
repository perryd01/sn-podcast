import Head from "next/head";

import { BaseCard } from "@/components/content/BaseCard";

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>Rólunk | InfluencAir Podcast</title>
			</Head>
			<div>
				<BaseCard color="blue">
					<p>Lorem ipsum</p>
				</BaseCard>
			</div>
		</>
	);
}
