import { type ReactNode, useSyncExternalStore } from "react";
import { Events } from "./events";
import type { SyncManager } from "./manager";

import { createContext } from "react";
import type { Database } from "./manager";

export const AContext = createContext<Database | undefined>(undefined);

export type SyncProviderProps = { manager: SyncManager; children: ReactNode };

export function SyncProvider({ manager, children }: SyncProviderProps) {
  const db = useSyncExternalStore(
    (subscribe) => {
      manager.addEventListener(Events.DatabaseChange, subscribe);
      return () => {
        manager.removeEventListener(Events.DatabaseChange, subscribe);
      };
    },
    () => manager.db,
  );

  if (!db) {
    return children;
  }

  return <AContext.Provider value={db}>{children}</AContext.Provider>;
}
