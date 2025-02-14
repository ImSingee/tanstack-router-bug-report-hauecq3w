import type { ReactNode } from "react";
import { AuthContext } from "./ctx";
import type { AuthManager } from "./manager";

export function AuthProvider({ manager, children }: { manager: AuthManager; children: ReactNode }) {
  return <AuthContext.Provider value={{ manager }}>{children}</AuthContext.Provider>;
}
