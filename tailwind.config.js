/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                light: "#fff",
                dark: "#000",
                secondary: "#336699",
                primary: "#FF6666",
                gary: {
                    gary5: "#F9F9F9",
                    gary4: "#DEDEDE",
                    gary3: "#A4A4A4",
                    gary2: "#6E6D7A",
                    gary1: "#212126",
                    gary0: "#111113",
                },
            },
        },
    },
    plugins: [],
};
