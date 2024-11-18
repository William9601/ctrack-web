import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      backgroundColor: string;
      contentLeadColor: string;
      contentColor: string;
      surfaceColor: string;
      onPrimaryColor: string;
      onSecondaryColor: string;
      onBackgroundColor: string;
      onSurfaceColor: string;
      successColor: string;
      warningColor: string;
      errorColor: string;
    };

    typography: {
      fontFamily: string;
      fontSizeSmall: string;
      fontSizeMedium: string;
      fontSizeLarge: string;
      fontSizeExtraLarge: string;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightBold: number;
      lineHeightSmall: string;
      lineHeightMedium: string;
      lineHeightLarge: string;
      lineHeightExtraLarge: string;
    };

    spacing: {
      spacingXsmall: string;
      spacingSmall: string;
      spacingMedium: string;
      spacingLarge: string;
      spacingXlarge: string;
      spacingXxlarge: string;
    };

    borderRadius: {
      borderRadiusSmall: string;
      borderRadiusMedium: string;
      borderRadiusLarge: string;
    };

    shadow: {
      shadowLight: string;
      shadowMedium: string;
      shadowDark: string;
    };

    breakpoints: {
      breakpointMobile: string;
      breakpointTablet: string;
      breakpointDesktop: string;
      breakpointLargeDesktop: string;
    };
  }
}
