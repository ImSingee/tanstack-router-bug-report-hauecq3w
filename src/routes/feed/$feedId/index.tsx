import { createFileRoute } from "@tanstack/react-router";
import { useAuthManager } from "~lib/auth";

export const Route = createFileRoute("/feed/$feedId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { feedId } = Route.useRouteContext();

  return (
    <>
      <div>feedId = {JSON.stringify(feedId)}</div>
      <LogoutButton />
    </>
  );
}

function LogoutButton() {
  const authManager = useAuthManager();
  function handleSignOut() {
    authManager.signOut().then(() => {
      location.href = "/";
    });
  }

  return (
    <>
      <div>
        <button type="button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </>
  );
}
