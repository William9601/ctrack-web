import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* HTML defaults */
  html {
    font-size: 100%; /* 16px */
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.onBackgroundColor};
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  body {
    line-height: ${({ theme }) => theme.typography.lineHeightMedium};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    overflow-x: hidden;
    min-height: 100vh;
    margin: 0;
    
  }

  /* Typography defaults */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    margin-bottom: ${({ theme }) => theme.spacingSmall};
  }

  h1 { font-size: ${({ theme }) => theme.typography.fontSizeExtraLarge}; }
  h2 { font-size: ${({ theme }) => theme.typography.fontSizeLarge}; }
  h3 { font-size: ${({ theme }) => theme.typography.fontSizeMedium}; }
  h4, h5, h6 { font-size: ${({ theme }) => theme.typography.fontSizeSmall}; }

  p, span, a, li {
    font-size: ${({ theme }) => theme.typography.fontSizeMedium};
    color: ${({ theme }) => theme.onBackgroundColor};
    line-height: ${({ theme }) => theme.typography.lineHeightMedium};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacingMedium};
  }
`;

export default GlobalStyles;
