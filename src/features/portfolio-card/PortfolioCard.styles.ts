import styled from "styled-components";

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
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
`;
