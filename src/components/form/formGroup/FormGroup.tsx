import { ReactNode } from "react";
import { FieldErrors } from "react-hook-form";
import Typography from "../../Typography/Typography";
import { ErrorText } from "./ErrorText.styles";
import { FormGroupStyles, StyledFormGroup } from "./FormGroup.styles";

type FormGroupProps = FormGroupStyles & {
  labelText: string;
  children: ReactNode;
};

const FormGroup = (props: FormGroupProps) => {
  const { labelText, direction = "vertical", children } = props;
  return (
    <StyledFormGroup direction={direction}>
      <label htmlFor={labelText.toLocaleLowerCase()}>
        <Typography role="label" weight="subtitle">
          {labelText}
        </Typography>
      </label>
      {children}
    </StyledFormGroup>
  );
};

export default FormGroup;
