import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/authLayout/AuthLayout";
import Dashboard from "../pages/app/Dashboard";
import NotFound from "../pages/app/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
