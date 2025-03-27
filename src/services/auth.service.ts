import api from "./api";

// טיפוס של המשתמש
export interface User {
  _id: string; // thats the way it comes from mongo
  email: string;
  role: string;
}

// טיפוס ל־login
export interface LoginCredentials {
  email: string;
  password: string;
}

// פונקציית login
export const login = async (credentials: LoginCredentials): Promise<void> => {
  await api.post("/auth/login", credentials);
};

export const register = async (
  credentials: LoginCredentials
): Promise<void> => {
  await api.post("/auth/register", credentials);
};

// פונקציית logout
export const logout = async (): Promise<void> => {
  await api.post("/auth/logout");
};

// בקשת me – מקבלת את המשתמש המחובר
export const fetchMe = async (): Promise<User> => {
  const res = await api.get<User>("/auth/me");
  return res.data;
};

export const refresh = async (): Promise<void> => {
  await api.post("/auth/refresh");
};
