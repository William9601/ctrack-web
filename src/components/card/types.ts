export interface CardProps {
  variant?: CardVariant;
  height: string;
  width: string;
  backgroundColor?: string;
  padding?: number;
  children: React.ReactNode;
}

type CardVariant = "default" | "boxShadow";
