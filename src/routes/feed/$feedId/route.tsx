import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/feed/$feedId")({
  beforeLoad: ({ params }) => {
    const feedId = params.feedId;
    if (!feedId) {
      // not a valid feed id
      throw notFound();
    }

    return { feedId };
  },
});
