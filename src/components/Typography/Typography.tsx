import { PropsWithChildren } from "react";
import { StyledTypography, TypographyProps } from "./Typography.styles";

const Typography = (props: PropsWithChildren<TypographyProps>) => {
  const {
    role = "info",
    color = "primary",
    weight = "info",
    children,
    ...rest
  } = props;

  return (
    <StyledTypography role={role} color={color} weight={weight} {...rest}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
