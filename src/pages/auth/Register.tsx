import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/card/Card";
import { Form } from "../../components/form/Form.styles";
import { ErrorText } from "../../components/form/formGroup/ErrorText.styles";
import FormGroup from "../../components/form/formGroup/FormGroup";
import { Input } from "../../components/form/formGroup/input/Input.styles";
import Typography from "../../components/Typography/Typography";
import { useAuth } from "../../context/hooks";
import { FormInfo, RegisterFormData } from "../../types/RegisterFormTypes";
import {
  capitalizeFirstChar,
  trimUnderscore,
} from "../../utils/stringManipulation";

// רכיב
const Register = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>();

  const password = watch("password");

  const registerFormInfo: FormInfo[] = [
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
    {
      label: "confirm_Password",
      type: "password",
      validation: {
        required: "Please confirm your password",
        validate: (value: string) =>
          value === password || "Passwords do not match",
      },
    },
  ];

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setError(null);
      await signUp(data.email, data.password);
      navigate("/");
    } catch {
      setError("Invalid email or password.");
    }
  };

  return (
    <Card spacing={2} shadow={true}>
      <Typography role="title" weight="title">
        Register
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {registerFormInfo.map((obj, index) => (
          <FormGroup
            key={index}
            labelText={trimUnderscore(capitalizeFirstChar(obj.label))}
          >
            <Input
              id={obj.label}
              type={obj.type}
              {...register(obj.label, obj.validation)}
            />
            {errors[obj.label] && (
              <ErrorText>{errors[obj.label]?.message}</ErrorText>
            )}
          </FormGroup>
        ))}
        {error && <ErrorText center>{error}</ErrorText>}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Sign up"}
        </Button>
        <Link to="/auth/login">
          <Typography role="info" weight="subtitle">
            Have an Account? Sign Up!
          </Typography>
        </Link>
      </Form>
    </Card>
  );
};

export default Register;
