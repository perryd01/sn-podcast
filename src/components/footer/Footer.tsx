export function Footer() {
	const email = "example@example.hu";
	const phone = "+36 00 000 000";
	return (
		<footer className="flex flex-col justify-center items-center p-8 w-full font-noto-sans text-white bg-gray-900">
			<p className="text-center">
				Az InfluenceAir Podcastot a{" "}
				<a
					className="font-bold hover:text-iair-lightblue transition duration-300"
					href="https://starnetwork.hu"
					target="_blank"
					rel="noreferrer"
				>
					Star Network csapata{" "}
				</a>
				készíti{" "}
				<a
					className="font-bold hover:text-iair-lightblue transition duration-300"
					href="https://studio.starnetwork.hu"
					target="_blank"
					rel="noreferrer"
				>
					a Stúdiójukban
				</a>
			</p>
			{/* <SocialPanel classname="text-2xl" /> */}
			<p className="text-sm">{email}</p>
			<p className="text-sm">{phone}</p>
			<p className="text-sm font-light">
				Creator Marketing Kft. © 2013-{new Date().getFullYear()}
			</p>
		</footer>
	);
}
