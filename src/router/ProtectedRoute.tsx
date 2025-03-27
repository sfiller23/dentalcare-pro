import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/hooks";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  if (!user?._id) return <Navigate to="/login" replace />;

  return children;
};
