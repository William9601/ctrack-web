import theme from "../../assets/styles/theme";

export interface CardProps {
  variant?: CardVariant;
  height: string;
  width: string;
  backgroundColor?: keyof typeof theme.colors;
  padding?: keyof typeof theme.spacing;
  children: React.ReactNode;
}

type CardVariant = "default" | "boxShadow";
