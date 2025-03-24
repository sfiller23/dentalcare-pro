import { HTMLAttributes } from "react";
import { loaderSizes, Variant } from "../../types/themeTypes";
import { StyledLoader } from "./Loader.styles";

type LoaderProps = {
  size?: loaderSizes;
  variant?: Variant;
  inline?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Loader = (props: LoaderProps) => {
  const {
    size = "medium",
    variant = "primary",
    inline = false,
    ...rest
  } = props;

  return (
    <StyledLoader
      size={size}
      variant={variant}
      inline={inline}
      role="status"
      aria-label="Loading..."
      {...rest}
    ></StyledLoader>
  );
};
