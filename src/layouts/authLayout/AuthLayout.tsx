import { Outlet } from "react-router-dom";
import { StyledAuthLayout } from "./AuthLayout.styles";

const AuthLayout = () => {
  return (
    <StyledAuthLayout>
      <Outlet />
    </StyledAuthLayout>
  );
};

export default AuthLayout;
