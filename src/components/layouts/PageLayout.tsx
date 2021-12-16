import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

import { InnerCenterLayout } from "./InnerCenterLayout";

type PageLayoutProps = {
	children: JSX.Element | JSX.Element[];
};

export function PageLayout({ children }: PageLayoutProps) {
	return (
		<div className="flex flex-col w-full min-h-screen">
			<Header />
			<main className="container flex-1 px-6 mx-auto max-w-5xl font-roboto">
				<InnerCenterLayout>{children}</InnerCenterLayout>
			</main>
			<Footer />
		</div>
	);
}
