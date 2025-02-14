import { createContext } from "react";
import type { AuthManager } from "./manager";

export type AuthContextProps = {
  manager?: AuthManager;
};

export const AuthContext = createContext<AuthContextProps>({});
