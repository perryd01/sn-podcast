type InnerCenterLayoutProps = {
	children: JSX.Element | JSX.Element[];
};

export function InnerCenterLayout({ children }: InnerCenterLayoutProps) {
	return (
		<div className="flex flex-col justify-center w-full h-full">{children}</div>
	);
}
