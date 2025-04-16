import { HTMLAttributes, PropsWithChildren } from "react";
import { StyledCard } from "./Card.styles";

type CardProps = {
  fullWidth?: boolean;
  hoverEffect?: boolean;
  clickable?: boolean;
  shadow?: boolean;
  spacing?: number;
} & HTMLAttributes<HTMLDivElement>;

export const Card = (props: PropsWithChildren<CardProps>) => {
  const {
    fullWidth = false,
    hoverEffect = false,
    clickable = false,
    shadow = false,
    children,
    ...rest
  } = props;

  return (
    <StyledCard
      fullWidth={fullWidth}
      hoverEffect={hoverEffect}
      clickable={clickable}
      shadow={shadow}
      {...rest}
    >
      {children}
    </StyledCard>
  );
};
