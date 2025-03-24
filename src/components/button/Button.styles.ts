import styled from "styled-components";
import { sizePadding } from "../../constants/sizes";
import { ButtonSizes, Variant } from "../../types/themeTypes";

export const StyledButton = styled.button<{
  variant: Variant;
  size: ButtonSizes;
}>`
  padding: ${({ theme, size }) => theme.spacing(sizePadding[size])};
  font-size: ${({ theme, size }) => theme.fontSizes[size]};
  min-width: ${({ theme, size }) => theme.buttonSizes[size]};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case "primary":
        return theme.colors.primary;
      case "secondary":
        return theme.colors.secondary;
      case "danger":
        return theme.colors.danger;
      case "success":
        return theme.colors.success;
      default:
        return theme.colors.primary;
    }
  }};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
