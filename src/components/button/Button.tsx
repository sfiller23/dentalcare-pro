import { ButtonHTMLAttributes } from "react";
import { StyledButton, StyledButtonProps } from "./Button.styles";

type ButtonProps = StyledButtonProps & {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};
