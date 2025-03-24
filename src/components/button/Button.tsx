import { ButtonHTMLAttributes } from "react";
import { ButtonSizes, Variant } from "../../types/themeTypes";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  variant?: Variant;
  size?: ButtonSizes;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};
