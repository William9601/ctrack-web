import styled, { css } from "styled-components";

const defaultButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSizeMedium};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  padding: ${({ theme }) => theme.spacing.spacingSmall},
    ${({ theme }) => theme.spacing.spacingMedium}; // Check this works, I had to add a comma to avoid error
  border-radius: ${({ theme }) => theme.borderRadius.borderRadiusSmall};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const PrimaryButton = styled.button`
  ${defaultButtonStyle};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.onPrimaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

export const SecondaryButton = styled.button`
  ${defaultButtonStyle};
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.onSecondaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const TextButton = styled.button`
  ${defaultButtonStyle};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryColor};

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

export const DeleteButton = styled.button`
  ${defaultButtonStyle};
  background-color: ${({ theme }) => theme.colors.errorColor};
  color: ${({ theme }) => theme.colors.onPrimaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.warningColor};
  }
`;

export default {
  PrimaryButton,
  SecondaryButton,
  TextButton,
  DeleteButton,
};
