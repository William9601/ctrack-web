// Buttons.ts
import styled, { css } from "styled-components";
import { theme } from "../assets/styles/theme";

const defaultButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSizeMedium};
  font-weight: ${theme.typography.fontWeightBold};
  padding: ${theme.spacing.spacingSmall} ${theme.spacing.spacingMedium};
  border-radius: ${theme.borderRadius.borderRadiusSmall};
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
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.onPrimaryColor};

  &:hover {
    background-color: ${theme.colors.secondaryColor};
  }
`;

export const SecondaryButton = styled.button`
  ${defaultButtonStyle};
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.onSecondaryColor};

  &:hover {
    background-color: ${theme.colors.primaryColor};
  }
`;

export const TextButton = styled.button`
  ${defaultButtonStyle};
  background-color: transparent;
  color: ${theme.colors.primaryColor};

  &:hover {
    color: ${theme.colors.secondaryColor};
  }
`;

export const DeleteButton = styled.button`
  ${defaultButtonStyle};
  background-color: ${theme.colors.errorColor};
  color: ${theme.colors.onPrimaryColor};

  &:hover {
    background-color: ${theme.colors.warningColor};
  }
`;

export default {
  PrimaryButton,
  SecondaryButton,
  TextButton,
  DeleteButton,
};
