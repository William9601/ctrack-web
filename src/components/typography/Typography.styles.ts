import styled, { css } from "styled-components";
import { TypographyProps } from "./types";

const variantStyles = {
  h1: css`
    font-size: ${({ theme }) => theme.typography.fontSizeExtraLarge};
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    line-height: ${({ theme }) => theme.typography.lineHeightExtraLarge};
  `,
  h2: css`
    font-size: ${({ theme }) => theme.typography.fontSizeLarge};
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    line-height: ${({ theme }) => theme.typography.lineHeightLarge};
  `,
  h3: css`
    font-size: ${({ theme }) => theme.typography.fontSizeMedium};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    line-height: ${({ theme }) => theme.typography.lineHeightMedium};
  `,
  body: css`
    font-size: ${({ theme }) => theme.typography.fontSizeMedium};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    line-height: ${({ theme }) => theme.typography.lineHeightMedium};
  `,
  caption: css`
    font-size: ${({ theme }) => theme.typography.fontSizeSmall};
    font-weight: ${({ theme }) => theme.typography.fontWeightLight};
    line-height: ${({ theme }) => theme.typography.lineHeightSmall};
  `,
  logo: css`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    line-height: ${({ theme }) => theme.typography.lineHeightExtraLarge};
    font-family: "Kdam Thmor Pro", sans-serif;
  `,
};

const Typography = styled.p<TypographyProps>`
  color: ${({ theme, color }) => theme.colors[color || "onSurfaceColor"]};
  margin: 0;
  ${({ variant }) => variant && variantStyles[variant]}
`;

export default Typography;
