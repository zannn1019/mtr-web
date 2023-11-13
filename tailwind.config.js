/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            backgroundColor: {
                primary: "#202442",
                secondary: "#99B080",
                buttton: "#FFC91F",
            },
            fontSize: {
                "6xl": "56px",
                "5xl": "40px",
                "5.5xl": "48px",
            },
            colors: {
                secondary: "#FFC91F",
            },
        },
    },
    plugins: [],
};
