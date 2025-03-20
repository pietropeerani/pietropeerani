/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        selectionBg: "var(--selection-bg)",
        selectionTx: "var(--selection-tx)",

        txTitle: "var(--tx-title)",
        txPrimary: "var(--tx-primary)",
        txSecondary: "var(--tx-secondary)",
        txLink: "var(--tx-link)",

        bgPrimary: "var(--bg-primary)",
        body: "var(--body)",
        bgSecondary: "var(--bg-secondary)",
        bgTableSelect: "var(--bg-table-select)",

        logo: "var(--logo)",

        navBg: "var(--nav-bg)",
        navTx: "var(--nav-tx)",

        windowBg: "var(--window-bg)",
        windowBorder: "var(--window-border)",

        gramDefault: "var(--gram-default)",
        gramHover: "var(--gram-hover)",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
