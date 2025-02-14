import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: async ({ context: { authManager } }) => {
    if (authManager.status === "unauthenticated") {
      throw redirect({ to: "/login" });
    }

    throw redirect({ to: "/feed" });
  },
});
