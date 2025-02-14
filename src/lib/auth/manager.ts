import { Events } from "./events";

const lsKey = "auth.test";

export class AuthManager extends EventTarget {
  constructor() {
    super();

    const success = !!localStorage.getItem(lsKey);

    if (success) {
      this.status = "ok";
    } else {
      this.status = "unauthenticated";
    }
  }

  // -- status storage
  private _status: "ok" | "unauthenticated" = "unauthenticated";
  get status() {
    return this._status;
  }
  private set status(value: typeof this._status) {
    this._status = value;
    this.dispatchEvent(new Event(Events.StatusChange));
  }

  // -- action: login

  async loginNew() {
    location.href = "/login/callback";
  }

  async handleSignInCallback() {
    localStorage.setItem(lsKey, "1");
    this.status = "ok";
  }

  // - action: sign out

  async signOut() {
    localStorage.removeItem(lsKey);
    this.status = "unauthenticated";
  }
}
