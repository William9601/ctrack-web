import styled from "styled-components";

export const Flex = styled.div<{
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  gap: ${({ gap }) => gap || "0"};
`;
