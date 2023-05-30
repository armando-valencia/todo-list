/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				// use when deleting items (animate-ping-complete)
				"ping-delete": "ping 1s cubic-bezier(0, .2, 0.2, 1)",
			},
		},
	},
	plugins: [],
};
