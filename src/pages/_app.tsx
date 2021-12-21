import "@/styles.css";
import "@/polyfills";

import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import { PageLayout } from "@/components/layouts/PageLayout";

const domain = process.env.NEXT_DOMAIN;

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title key="title">InfluenceAir Podcast</title>
				<meta
					name="description"
					content="Podcast az influncermarketingről, elismert tartalomgyártókkal és szakértőkkel"
				/>
				<meta
					name="og:description"
					content="Podcast az influncermarketingről, elismert tartalomgyártókkal és szakértőkkel"
				/>
				<meta
					name="twitter:description"
					content="Podcast az influncermarketingről, elismert tartalomgyártókkal és szakértőkkel"
				/>
				<meta property="og:image" content="/cover.jpg" />
				<meta property="twitter:image" content="/cover.jpg" />

				<meta
					name="color-scheme"
					content="normal" // TODO: Set to "dark" or "light" based on theme
				/>
			</Head>
			<PageLayout>
				<LazyMotion features={domAnimation}>
					<AnimatePresence exitBeforeEnter key="pageTransition">
						<m.div
							key={useRouter().route}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<Component {...pageProps} />
						</m.div>
					</AnimatePresence>
				</LazyMotion>
			</PageLayout>
		</>
	);
}
