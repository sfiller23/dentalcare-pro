import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/hooks";

export const PublicRoutes = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  if (user) return <Navigate to="/" replace />;

  return children;
};
