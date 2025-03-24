import { InputHTMLAttributes } from "react";
import { StyledInput, StyledInputWrapper } from "./InputWrapper.styles";

type InputWrapperProps = {
  errorText?: string;
  labelText: string;
  inputId: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputWrapper = (props: InputWrapperProps) => {
  const { errorText, labelText, inputId, ...rest } = props;
  return (
    <StyledInputWrapper>
      <label htmlFor={inputId}>{labelText}</label>
      <StyledInput
        id={inputId}
        aria-describedby={errorText}
        aria-invalid={!!errorText}
        {...rest}
      />
      {errorText && <span>{errorText}</span>}
    </StyledInputWrapper>
  );
};
