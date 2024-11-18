import styled from "styled-components";
import theme from "../../assets/styles/theme";
import { TotalTypographyProps } from "./Types";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
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

export const TotalTypography = styled.p<TotalTypographyProps>`
  font-size: ${({ theme }) => theme.typography.fontSizeExtraLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  line-height: ${({ theme }) => theme.typography.lineHeightExtraLarge};
  color: ${({ theme, color }) => theme.colors[color || "surfaceColor"]};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing.spacingSmall};
  background-color: ${({ theme }) => theme.colors.surfaceColor};
  color: ${({ theme }) => theme.colors.contentLeadColor};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.spacingSmall};
  color: ${({ theme }) => theme.colors.contentColor};
`;
