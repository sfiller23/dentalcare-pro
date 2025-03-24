import { HTMLAttributes, ReactNode } from "react";
import { StyledCard } from "./Card.styles";

type CardProps = {
  fullWidth?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Card = (props: CardProps) => {
  const { fullWidth, children, ...rest } = props;

  return (
    <StyledCard fullWidth={fullWidth} {...rest}>
      {children}
    </StyledCard>
  );
};
