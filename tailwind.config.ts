import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            keyframes: {
                slideUpIn: {
                    "0%": { transform: "translateY(40px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" }
                },
                slideUpOut: {
                    "0%": { transform: "translateY(0)", opacity: "1" },
                    "100%": { transform: "translateY(-40px)", opacity: "0" }
                },
                slideDownIn: {
                    "0%": { transform: "translateY(-40px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" }
                },
                slideDownOut: {
                    "0%": { transform: "translateY(0)", opacity: "1" },
                    "100%": { transform: "translateY(40px)", opacity: "0" }
                },
                slideLeftIn: {
                    "0%": { transform: "translateX(40px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" }
                },
                slideLeftOut: {
                    "0%": { transform: "translateX(0)", opacity: "1" },
                    "100%": { transform: "translateX(-40px)", opacity: "0" }
                },
                slideRightIn: {
                    "0%": { transform: "translateX(-40px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" }
                },
                slideRightOut: {
                    "0%": { transform: "translateX(0)", opacity: "1" },
                    "100%": { transform: "translateX(40px)", opacity: "0" }
                }
            },
            animation: {
                slideUpIn: "slideUpIn 1s ease-in-out",
                slideUpOut: "slideUpOut 1s ease-in-out",
                slideDownIn: "slideDownIn 1s ease-in-out",
                slideDownOut: "slideDownOut 1s ease-in-out",
                slideLeftIn: "slideLeftIn 1s ease-in-out",
                slideLeftOut: "slideLeftOut 1s ease-in-out",
                slideRightIn: "slideRightIn 1s ease-in-out",
                slideRightOut: "slideRightOut 1s ease-in-out"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            }
        }
    },
    plugins: []
};
export default config;
