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
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onBackground};
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  body {
    line-height: ${({ theme }) => theme.typography.lineHeight.medium};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    overflow-x: hidden;
    min-height: 100vh;
    margin: 0;
  }

  /* Typography defaults */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  h1 { font-size: ${({ theme }) => theme.typography.fontSize.extraLarge}; }
  h2 { font-size: ${({ theme }) => theme.typography.fontSize.large}; }
  h3 { font-size: ${({ theme }) => theme.typography.fontSize.medium}; }
  h4, h5, h6 { font-size: ${({ theme }) => theme.typography.fontSize.small}; }

  p, span, a, li {
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    color: ${({ theme }) => theme.colors.onBackground};
    line-height: ${({ theme }) => theme.typography.lineHeight.medium};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.medium};
  }
`;

export default GlobalStyles;
