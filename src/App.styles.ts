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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  /* grid-template-rows: 1fr min-content; */
  gap: ${theme.spacing.spacingLarge};
  grid-template-areas:
    "one one"
    "two three";
`;

export const GridItemOne = styled.div`
  grid-area: one;
  max-width: 30rem;
`;

export const GridItemTwo = styled.div`
  grid-area: two;
`;

export const GridItemThree = styled.div`
  grid-area: three;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: ${theme.spacing.spacingXlarge};
`;
