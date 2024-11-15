import styled from "styled-components";
import theme from "./assets/styles/theme";

export const AppContainer = styled.div`
  display: grid;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${theme.colors.backgroundColor};
  padding: ${theme.spacing.spacingXxlarge};

  /* Optional: Set max width for the content area */
  max-width: 1200px;
  margin: 0 auto;
`;
