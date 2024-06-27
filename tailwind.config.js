/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.{html,js}", "./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                quicksand: ["Quicksand", "san-serif"],
            },
            keyframes: {
                move: {
                    "0%, 49.99%": {
                        opacity: "0",
                        "z-index": "10",
                    },
                    "50%, 100%": {
                        opacity: "1",
                        "z-index": "50",
                    },
                },
            },
            animation: {
                move: "move 0.6s",
            },
        },
    },
    plugins: [],
};
