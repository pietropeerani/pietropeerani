/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"]
      }
    },
  },
  plugins: [],
}

