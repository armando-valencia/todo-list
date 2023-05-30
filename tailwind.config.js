/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"bounce-short": "bounce .8s ease-in-out 1.5",
			},
		},
	},
	plugins: [],
};
