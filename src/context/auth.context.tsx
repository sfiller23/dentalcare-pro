import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import {
  fetchMe,
  login as loginRequest,
  logout as logoutRequest,
  signUp as registerRequest,
  User,
} from "../services/auth.service";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isTokenExpired: boolean;
  setIsTokenExpired: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  const currentUrl = window.location.href;

  const init = async () => {
    try {
      setIsLoading(true);
      if (!user) {
        const meObj = await fetchMe();
        setUser(meObj.user);
        setIsTokenExpired(false);
      }
    } catch (err) {
      const errorObj = err as AxiosError;
      //If we are in the app (not in the auth flow) and we get 401 the token has expired
      if (errorObj?.response?.status === 401 && !currentUrl.includes("auth")) {
        setIsTokenExpired(true);
      }
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const signUp = async (email: string, password: string) => {
    await registerRequest({ email, password });
  };

  const login = async (email: string, password: string) => {
    await loginRequest({ email, password });
    await init();
  };

  const logout = async () => {
    await logoutRequest();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        signUp,
        setUser,
        isTokenExpired,
        setIsTokenExpired,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
