// Buttons.ts
import styled, { css } from "styled-components";
import { theme } from "../assets/styles/theme";

const defaultButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizeMedium};
  font-weight: ${theme.fontWeightBold};
  padding: ${theme.spacingSmall} ${theme.spacingMedium};
  border-radius: ${theme.borderRadiusSmall};
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
  background-color: ${theme.primaryColor};
  color: ${theme.onPrimaryColor};

  &:hover {
    background-color: ${theme.secondaryColor};
  }
`;

export const SecondaryButton = styled.button`
  ${defaultButtonStyle};
  background-color: ${theme.secondaryColor};
  color: ${theme.onSecondaryColor};

  &:hover {
    background-color: ${theme.primaryColor};
  }
`;

export const TextButton = styled.button`
  ${defaultButtonStyle};
  background-color: transparent;
  color: ${theme.primaryColor};

  &:hover {
    color: ${theme.secondaryColor};
  }
`;

export const DeleteButton = styled.button`
  ${defaultButtonStyle};
  background-color: ${theme.errorColor};
  color: ${theme.onPrimaryColor};

  &:hover {
    background-color: ${theme.warningColor};
  }
`;

export default {
  PrimaryButton,
  SecondaryButton,
  TextButton,
  DeleteButton,
};
