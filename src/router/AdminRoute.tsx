import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";

export const AdminRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (!user || user.role !== "admin") return <Navigate to="/" replace />;

  return children;
};
