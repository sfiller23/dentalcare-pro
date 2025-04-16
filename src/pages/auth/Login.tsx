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
import { LoginFormData, loginFormInfo } from "../../types/loginFormTypes";
import { capitalizeFirstChar } from "../../utils/stringManipulation";

// רכיב
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError(null);
      await login(data.email, data.password);
      navigate("/");
    } catch {
      setError("Invalid email or password.");
    }
  };

  return (
    <Card spacing={2} shadow={true}>
      <Typography role="title" weight="title">
        Login
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {loginFormInfo.map((obj, index) => (
          <FormGroup key={index} labelText={capitalizeFirstChar(obj.label)}>
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
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
        <Link to="/auth/register">
          <Typography role="info" weight="subtitle">
            No Account? Sign Up!
          </Typography>
        </Link>
      </Form>
    </Card>
  );
};

export default Login;
