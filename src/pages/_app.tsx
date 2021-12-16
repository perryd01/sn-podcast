import "@/styles.css";
import "@/polyfills";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import { PageLayout } from "@/components/layouts/PageLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
	const domain = "localhost"; // TODO URL
	const canonicalURL = `https://${domain}${useRouter().pathname}`;
	return (
		<>
			<Head>
				<title key="title">InfluencAir Podcast</title>
				<link rel="canonical" href={canonicalURL} />
				<meta
					name="color-scheme"
					content="normal" // TODO: Set to "dark" or "light" based on theme
				/>
			</Head>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</>
	);
}
