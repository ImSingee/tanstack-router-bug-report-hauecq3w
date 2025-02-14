import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/feed")({
  beforeLoad: async ({ context: { authManager } }) => {
    if (authManager.status === "unauthenticated") {
      throw redirect({ to: "/login" });
    }
  },
});
