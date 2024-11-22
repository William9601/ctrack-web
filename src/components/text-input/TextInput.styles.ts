import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacingSmall};
  font-size: ${({ theme }) => theme.typography.fontSizeMedium};
  color: ${({ theme }) => theme.colors.contentLeadColor};
  background-color: ${({ theme }) => theme.colors.surfaceColor};
  border: 1px solid ${({ theme }) => theme.colors.onBackgroundColor};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadiusSmall};
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryColor};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryColor}40;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.onSurfaceColor};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.contentColor};
  }
`;

export const InputLabel = styled.label``;
