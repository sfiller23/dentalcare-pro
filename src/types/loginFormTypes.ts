import { ValidationRule } from "react-hook-form";

export interface LoginFormData {
  email: string;
  password: string;
}

interface FormInfo {
  label: keyof LoginFormData;
  type: string;
  validation: { required?: string | ValidationRule<boolean> | undefined };
}

export const loginFormInfo: FormInfo[] = [
  {
    label: "email",
    type: "email",
    validation: { required: "Email is required" },
  },
  {
    label: "password",
    type: "password",
    validation: { required: "password is required" },
  },
];
