import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";
import { CardProps } from "./types";

const defaultCardStyle = css<CardProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || theme.surfaceColor};
  border-radius: ${theme.borderRadiusMedium};
  padding: ${({ padding }) => padding || theme.spacingSmall};
`;

export const StyledCard = styled.div<CardProps>`
  ${defaultCardStyle}
`;

export const StyledCardWithShadow = styled.div<CardProps>`
  ${defaultCardStyle}
  box-shadow: ${theme.shadowLight};
`;
