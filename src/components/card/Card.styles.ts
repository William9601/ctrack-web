import styled, { css } from "styled-components";
import { CardProps } from "./types";

const defaultCardStyle = css<CardProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor || "surfaceColor"]};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadiusSmall};
  padding: ${({ theme, padding }) => theme.spacing[padding]};
`;

export const StyledCard = styled.div<CardProps>`
  ${defaultCardStyle}
`;

export const StyledCardWithShadow = styled.div<CardProps>`
  ${defaultCardStyle}
  box-shadow: ${({ theme }) => theme.shadow.shadowLight};
`;
