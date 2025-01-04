import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: '15px'
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px'
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)"
		},
		extend: {
			colors: {
				primary:'#1c1c22',
				accent:{
					DEFAULT:'#00ff99',
					hover:'#00e187'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				meteor: 'meteor 5s linear infinite'
			},
			keyframes: {
				meteor: {
					'0%': {
						transform: 'rotate(215deg) translateX(0)',
						opacity: '1'
					},
					'70%': {
						opacity: '1'
					},
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
