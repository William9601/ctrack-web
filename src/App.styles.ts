import styled from "styled-components";
import theme from "./assets/styles/theme";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${theme.colors.backgroundColor};
  padding: ${theme.spacing.spacingMedium};

  /* Optional: Set max width for the content area */
  max-width: 1200px;
  margin: 0 auto;
`;
