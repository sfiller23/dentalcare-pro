import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/authLayout/AuthLayout";
import Dashboard from "../pages/app/Dashboard";
import NotFound from "../pages/app/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route
          path="/auth"
          element={
            <PublicRoutes>
              <AuthLayout />
            </PublicRoutes>
          }
        >
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
