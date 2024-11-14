import { DefaultTheme } from "styled-components/dist/types";
import { themeConstants } from "./themeConstants";

export const theme: DefaultTheme = {
  // Color tokens
  colors: {
    primaryColor: themeConstants.colors.primary,
    secondaryColor: themeConstants.colors.secondary,
    backgroundColor: themeConstants.colors.background,
    surfaceColor: themeConstants.colors.surface,
    onPrimaryColor: themeConstants.colors.onPrimary,
    onSecondaryColor: themeConstants.colors.onSecondary,
    onBackgroundColor: themeConstants.colors.onBackground,
    onSurfaceColor: themeConstants.colors.onSurface,
    successColor: themeConstants.colors.success,
    warningColor: themeConstants.colors.warning,
    errorColor: themeConstants.colors.error,
  },
  // Typography tokens
  typography: {
    fontFamily: themeConstants.typography.fontFamily,
    fontSizeSmall: themeConstants.typography.fontSize.small,
    fontSizeMedium: themeConstants.typography.fontSize.medium,
    fontSizeLarge: themeConstants.typography.fontSize.large,
    fontSizeExtraLarge: themeConstants.typography.fontSize.extraLarge,
    fontWeightLight: themeConstants.typography.fontWeight.light,
    fontWeightRegular: themeConstants.typography.fontWeight.regular,
    fontWeightBold: themeConstants.typography.fontWeight.bold,
    lineHeightSmall: themeConstants.typography.lineHeight.small,
    lineHeightMedium: themeConstants.typography.lineHeight.medium,
    lineHeightLarge: themeConstants.typography.lineHeight.large,
    lineHeightExtraLarge: themeConstants.typography.lineHeight.extraLarge,
  },

  // Spacing tokens
  spacing: {
    spacingXsmall: themeConstants.spacing.xsmall,
    spacingSmall: themeConstants.spacing.small,
    spacingMedium: themeConstants.spacing.medium,
    spacingLarge: themeConstants.spacing.large,
    spacingXlarge: themeConstants.spacing.xlarge,
    spacingXxlarge: themeConstants.spacing.xxlarge,
  },

  // Border radius tokens
  borderRadius: {
    borderRadiusSmall: themeConstants.borderRadius.small,
    borderRadiusMedium: themeConstants.borderRadius.medium,
    borderRadiusLarge: themeConstants.borderRadius.large,
  },

  // Shadow tokens
  shadow: {
    shadowLight: themeConstants.shadows.light,
    shadowMedium: themeConstants.shadows.medium,
    shadowDark: themeConstants.shadows.dark,
  },

  // Breakpoints
  breakpoints: {
    breakpointMobile: themeConstants.breakpoints.mobile,
    breakpointTablet: themeConstants.breakpoints.tablet,
    breakpointDesktop: themeConstants.breakpoints.desktop,
    breakpointLargeDesktop: themeConstants.breakpoints.largeDesktop,
  },
};

export default theme;
