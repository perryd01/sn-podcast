import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

type PageLayoutProps = {
	children: JSX.Element | JSX.Element[];
};

export function PageLayout({ children }: PageLayoutProps) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1 font-roboto">{children}</main>
			<Footer />
		</div>
	);
}
