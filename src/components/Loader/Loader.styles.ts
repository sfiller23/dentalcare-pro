import { styled } from "styled-components";
import { loaderSizes, Variant } from "../../types/themeTypes";

export const StyledLoader = styled.div<{
  size: loaderSizes;
  variant: Variant;
  inline: boolean;
}>`
  background-color: transparent;
  border: 10px solid
    linear-gradient(
      90deg,
      ${({ theme, variant }) => theme.colors[variant]},
      white
    );
  border-radius: 50%;
  width: ${({ theme, size }) => theme.loaderSizes[size]};
  height: ${({ theme, size }) => theme.loaderSizes[size]};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  animation: spin 1s infinite;
`;
