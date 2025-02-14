import { type ErrorComponentProps, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/login/callback")({
  loader: async ({ context: { authManager } }) => {
    await authManager.handleSignInCallback();

    throw redirect({ to: "/" });

    // Not know the reason, but use redirect will make router context value undefined
    // https://github.com/TanStack/router/discussions/3403

    // NOTE: in iOS / Safari, the redirect may not release the lock, and cause the page to hang
    // https://bugs.webkit.org/show_bug.cgi?id=283528
  },
  pendingComponent: Loading,
  errorComponent: ErrorComp,
});

function Loading() {
  return <div>Signing In</div>;
}

function ErrorComp({ error }: ErrorComponentProps) {
  console.error(error);
  return <div>Error</div>;
}
