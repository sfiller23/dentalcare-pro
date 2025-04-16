import styled from "styled-components";
import { ButtonSizes, Variant } from "../../types/themeTypes";

export interface StyledButtonProps {
  variant?: Variant;
  size?: keyof ButtonSizes;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ theme }) => theme.spacing(0.5)};
  font-size: ${({ theme, size }) => theme.fontSizes[size as string]};
  min-width: ${({ theme, size }) => theme.buttonSizes[size as string]};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  background-color: ${({ theme, variant }) => theme.colors[variant]};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
