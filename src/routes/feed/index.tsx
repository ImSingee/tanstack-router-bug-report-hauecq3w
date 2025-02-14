import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/feed/")({
  beforeLoad: () => {
    // TODO go to recently used feed?

    throw redirect({ to: "/feed/$feedId", params: { feedId: "all" } });
  },
});
