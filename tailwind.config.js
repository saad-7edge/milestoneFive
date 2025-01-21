/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"inner-lg": "inset 0 4px 6px rgba(0, 0, 0, 0.5)", // Adjust values as needed
			},
			fontFamily: {
				custom: ["Poppins"],
			},
		},
	},
	plugins: [],
};
