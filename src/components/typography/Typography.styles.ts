// Typography.ts
import styled, { css } from "styled-components";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  color?: string;
}

const variantStyles = {
  h1: css`
    font-size: ${({ theme }) => theme.typography.fontSize.extraLarge};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.extraLarge};
  `,
  h2: css`
    font-size: ${({ theme }) => theme.typography.fontSize.large};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.large};
  `,
  h3: css`
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.medium};
  `,
  body: css`
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.medium};
  `,
  caption: css`
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.light};
    line-height: ${({ theme }) => theme.typography.lineHeight.small};
  `,
};

const Typography = styled.p<TypographyProps>`
  color: ${({ color, theme }) => color || theme.colors.onSurface};
  margin: 0;
  ${({ variant }) => variant && variantStyles[variant]}
`;

export default Typography;
