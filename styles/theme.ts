/**
 * Central theme tokens for the portfolio.
 * You can customize colors, fonts, and container widths here or in app/globals.css.
 */

export const themeConfig = {
  containerMaxWidth: "960px",
  fontFamily: "var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  colors: {
    light: {
      background: "#ffffff",
      textPrimary: "#333333",
      textHeading: "#111111",
      textMuted: "#555555",
      textSubtle: "#777777",
      link: "#0066cc",
      linkHover: "#004b99",
      border: "#eeeeee",
      codeBg: "#f5f5f5",
      tagBg: "#f3f4f6",
      tagText: "#374151",
      avatarBg: "#E8EEF5",
    },
    dark: {
      background: "#121212",
      textPrimary: "#d4d4d8",
      textHeading: "#fafafa",
      textMuted: "#a1a1aa",
      textSubtle: "#71717a",
      link: "#38bdf8",
      linkHover: "#7dd3fc",
      border: "#27272a",
      codeBg: "#1e1e24",
      tagBg: "#27272a",
      tagText: "#e4e4e7",
      avatarBg: "#1e293b",
    }
  }
};
