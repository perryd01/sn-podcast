const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			transitionTimingFunction: {
				DEFAULT: defaultTheme.transitionTimingFunction.out,
			},
			fontFamily: {
				roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
				"noto-sans": ["Noto Sans", ...defaultTheme.fontFamily.serif],
			},
			borderRadius: {
				"figma-base": "24px",
			},
			colors: {
				iair: {
					darkblue: "#196BAD",
					lightblue: "#2192D6",
				},
				social: {
					spotify: "#1DB954",
					youtube: "#FF0000",
					facebook: "#4267B2",
					instagram: "#e95950",
					tiktok: "#ff0050",
				},
				material: {
					blue: {
						light: "#CBE6FF",
						"light-text": "#0B1D46",
					},
					purple: {
						lightpurple: "#DAE1FF",
						"light-text": "#131D48",
					},
				},
			},
			boxShadow: {
				"figma-base": "0px 4px 4px rgba(0, 0, 0, 0.25)",
			},

			margin: (theme, { negative }) => ({
				auto: "auto",
				...negative(theme("spacing")),
			}),
		},
	},
	corePlugins: {
		animation: false,
	},
};
