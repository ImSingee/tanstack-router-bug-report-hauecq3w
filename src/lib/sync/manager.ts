import { Events as AuthEvents, type AuthManager } from "~lib/auth";
import { Events } from "./events";

export type Database = 233;

export class SyncManager extends EventTarget {
  private readonly authManager: AuthManager;

  private currentUserId: string | undefined;
  db: Database | undefined;

  constructor(authManager: AuthManager) {
    super();

    this.authManager = authManager;

    // init and subscribe to authManager events
    this.#init().then(() => {
      this.authManager.addEventListener(AuthEvents.StatusChange, this.handleAuthStatusChange.bind(this));
    });
  }

  async #init() {
    console.debug("[SyncManager] init");
    if (this.authManager.status !== "unauthenticated") {
      this.currentUserId = "test";

      return this.#startSync();
    }
  }

  async #startSync() {
    if (!this.currentUserId) {
      throw new Error("[SyncManager] currentUserId is not set");
    }

    console.log("[SyncManager] Start Sync");

    this.db = 233;
    this.dispatchEvent(new Event(Events.DatabaseChange));
  }

  async #stopSync() {
    if (this.currentUserId) {
      throw new Error("[SyncManager] currentUserId is not clear");
    }

    if (!this.db) {
      console.warn("[SyncManager] call stopSync with db is not set");
      return;
    }

    console.log("[SyncManager] Stop Sync");

    this.dispatchEvent(new Event(Events.DatabaseChange));
  }

  private handleAuthStatusChange() {
    const newUserId = "test";
    if (this.currentUserId === newUserId) {
      // nothing changed
      return;
    }

    if (newUserId && !this.currentUserId) {
      // start sync
      this.currentUserId = newUserId;
      void this.#startSync();
    } else if (this.currentUserId && !newUserId) {
      // stop sync
      this.currentUserId = undefined;
      void this.#stopSync();
    } else {
      // user id change - impossible
      console.warn("[SyncManager] user id changed unexpectedly");
    }
  }
}
