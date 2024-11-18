import styled from "styled-components";
import theme from "./assets/styles/theme";

export const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${theme.colors.backgroundColor};
  padding: 2rem 8rem;

  /* Optional: Set max width for the content area */
  max-width: 1200px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: ${theme.spacing.spacingXlarge};
`;
