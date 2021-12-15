export const purifyDescription = (text: string) => {
	const mainText = text.slice(0, text.indexOf("A műsorban elhangzó hírek"));
	const eplinks = text.slice(
		text.indexOf("A műsorban elhangzó hírek"),
		text.indexOf("Kövessetek minket"),
	);
	const restText = text.slice(text.indexOf("Kövessetek minket"), text.length);
	return [mainText, eplinks, restText];
};
