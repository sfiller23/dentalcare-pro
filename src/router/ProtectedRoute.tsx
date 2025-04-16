import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/hooks";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useAuth();
  console.log(user, "from protected route");
  if (isLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/auth/login" replace />;

  return children;
};
