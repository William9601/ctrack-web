export const themeConstants = {
  colors: {
    primary: "#2C2A4A", // Navy
    secondary: "#4B4877", // Purple
    background: "#2C2A4A", // Navy
    contentLead: "#E3FEFE", // Baby blue
    content: "#F9EAEA", // Cream
    surface: "#4B4877", // Purple
    onPrimary: "#E3FEFE",
    onSecondary: "#FFFFFF",
    onBackground: "#333333",
    onSurface: "#333333",
    success: "#B6FBBD", // Green
    warning: "#FBB6BE", // Red
    error: "#D32F2F",
  },

  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: {
      small: "12px",
      medium: "16px",
      large: "20px",
      extraLarge: "24px",
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
    lineHeight: {
      small: "16px",
      medium: "24px",
      large: "28px",
      extraLarge: "32px",
    },
  },

  spacing: {
    xsmall: "4px",
    small: "8px",
    medium: "16px",
    large: "24px",
    xlarge: "32px",
    xxlarge: "48px",
  },

  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },

  shadows: {
    light: "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
    medium: "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)",
    dark: "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
  },

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1440px",
  },
};

// export type DefaultTheme = typeof themeConstants;
