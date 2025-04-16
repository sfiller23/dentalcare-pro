import { styled } from "styled-components";
import { Direction } from "../../../types/themeTypes";

export interface FormGroupStyles {
  direction?: Direction;
}

export const StyledFormGroup = styled.div<FormGroupStyles>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
`;
