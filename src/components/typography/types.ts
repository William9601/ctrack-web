import theme from "../../assets/styles/theme";

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: keyof typeof theme.colors;
}

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "lead"
  | "caption"
  | "logo";
