import { Validate, ValidationRule } from "react-hook-form";

export interface RegisterFormData {
  email: string;
  password: string;
  confirm_Password: string;
}

export interface FormInfo {
  label: keyof RegisterFormData;
  type: string;
  watchValue?: string;
  validation: {
    required?: string | ValidationRule<boolean> | undefined;
    validate?:
      | Validate<string, RegisterFormData>
      | Record<string, Validate<string, RegisterFormData>>
      | undefined;
  };
}
