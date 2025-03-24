import { InputHTMLAttributes, ReactNode } from "react";
import { Variant } from "../../types/themeTypes";
import { StyledBadge } from "./Badge.styles";

type BadgeProps = {
  rounded?: boolean;
  variant?: Variant;
  children: ReactNode;
} & InputHTMLAttributes<HTMLDivElement>;

export const Badge = (props: BadgeProps) => {
  const { children, rounded = true, variant = "primary", ...rest } = props;

  return (
    <StyledBadge rounded={rounded} variant={variant} {...rest}>
      {children}
    </StyledBadge>
  );
};
