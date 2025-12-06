/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          purple: "#a855f7",
          pink: "#ec4899",
          blue: "#3b82f6",
          neon: "#00f2ff",
        }
      },

      boxShadow: {
        neon: "0 0 10px #00f2ff, 0 0 20px #00f2ff",
        purple: "0 0 10px #a855f7, 0 0 25px #a855f7",
      },

      backgroundImage: {
        "grid-cyber":
          "linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)",
      },

      animation: {
        "float": "float 3s ease-in-out infinite",
        "glitch": "glitch 1.5s infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },

        glitch: {
          "0%": { textShadow: "2px 2px #ff00c1, -2px -2px #00f2ff" },
          "20%": { textShadow: "-2px -2px #ff00c1, 2px 2px #00f2ff" },
          "40%": { textShadow: "2px -2px #ff00c1, -2px 2px #00f2ff" },
          "60%": { textShadow: "-2px 2px #ff00c1, 2px -2px #00f2ff" },
          "100%": { textShadow: "2px 2px #ff00c1, -2px -2px #00f2ff" },
        },
      },
    },
  },
  plugins: [],
}
