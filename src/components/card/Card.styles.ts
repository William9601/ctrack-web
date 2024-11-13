import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";
import { CardProps } from "./types";

const defaultCardStyle = css<CardProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || theme.colors.surfaceColor};
  border-radius: ${theme.borderRadius.borderRadiusMedium};
  padding: ${({ padding }) => padding || theme.spacing.spacingSmall};
`;

export const StyledCard = styled.div<CardProps>`
  ${defaultCardStyle}
`;

export const StyledCardWithShadow = styled.div<CardProps>`
  ${defaultCardStyle}
  box-shadow: ${theme.shadow.shadowLight};
`;
