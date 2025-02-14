import { useContext } from "react";
import { AuthContext } from "~lib/auth/ctx";

function useAuth() {
  return useContext(AuthContext);
}

export function useAuthManager() {
  const { manager } = useAuth();
  if (!manager) {
    throw new Error("AuthManager isn't defined -> Please make sure you have <AuthProvider /> in your component tree");
  }
  return manager;
}
