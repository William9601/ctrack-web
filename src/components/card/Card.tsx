import { StyledCard, StyledCardWithShadow } from "./Card.styles";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
  variant,
  height,
  width,
  backgroundColor,
  padding,
  children,
}) => {
  switch (variant) {
    case "boxShadow":
      return (
        <StyledCardWithShadow
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          padding={padding}>
          {children}
        </StyledCardWithShadow>
      );
    default:
      return (
        <StyledCard
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          padding={padding}>
          {children}
        </StyledCard>
      );
  }
};
