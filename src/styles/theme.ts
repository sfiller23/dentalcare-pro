export const theme = {
  colors: {
    primary: "#0077cc",
    secondary: "#e0f0ff",
    danger: "#ff5f5f",
    success: "#4caf50",
    info: "#d4d86f",
    text: "#333333",
    background: "#ffffff",
    muted: "#f5f5f5",
  },
  spacing: (factor: number) => `${factor * 8}px`,
  borderRadius: "12px",
  fontSizes: {
    small: "0.875rem",
    medium: "1rem",
    large: "1.25rem",
    xlarge: "1.5rem",
  },
  buttonSizes: {
    small: "3rem",
    medium: "5rem",
    large: "7rem",
  },
  loaderSizes: {
    small: "2rem",
    medium: "5rem",
    large: "8rem",
  },
};
