import { RouterProvider, createRouter } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";
import ReactDOM from "react-dom/client";
import { AuthManager, AuthProvider } from "~lib/auth";
import { SyncManager, SyncProvider } from "~lib/sync";
import { routeTree } from "~routeTree.gen";

const authManager = new AuthManager();
const syncManager = new SyncManager(authManager);

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: { authManager, syncManager },
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function Providers({ children }: PropsWithChildren) {
  return (
    <AuthProvider manager={authManager}>
      <SyncProvider manager={syncManager}>{children}</SyncProvider>
    </AuthProvider>
  );
}

// biome-ignore lint/style/noNonNullAssertion: #app is always present in index.html
const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Providers>
      <RouterProvider router={router} />
    </Providers>,
  );
}
