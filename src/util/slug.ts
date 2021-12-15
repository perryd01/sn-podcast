export const generateSlug = (text: string) =>
	text
		.toLowerCase()
		.normalize("NFD")
		.replace(/[^\w ]+/g, "")
		.replace(/ +/g, "-");
