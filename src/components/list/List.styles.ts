import { styled } from "styled-components";
import { Direction } from "../../types/themeTypes";

export const StyledList = styled.ul<{ direction: Direction }>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};
  list-style: none;
`;
