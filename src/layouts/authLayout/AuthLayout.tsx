import { Outlet } from "react-router-dom";
import RefreshModal from "../../components/modal/refreshModal/RefreshModal";
import { StyledAuthLayout } from "./AuthLayout.styles";

const AuthLayout = () => {
  return (
    <StyledAuthLayout>
      <RefreshModal />
      <Outlet />
    </StyledAuthLayout>
  );
};

export default AuthLayout;
