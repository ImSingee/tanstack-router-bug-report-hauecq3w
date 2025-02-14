import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useAuthManager } from "~lib/auth";

export const Route = createFileRoute("/login/")({
  component: LoginPage,
});

function LoginPage() {
  const authManager = useAuthManager();

  const [loading, setLoading] = useState(false);

  function handleClickSignIn() {
    setLoading(true);
    authManager.loginNew().finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className="space-y-4">
      <button type="button" onClick={handleClickSignIn} disabled={loading}>
        {loading ? "Redirecting..." : "Sign In / Sign Up"}
      </button>
    </div>
  );
}
