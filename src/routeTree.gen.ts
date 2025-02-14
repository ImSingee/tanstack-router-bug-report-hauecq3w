/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as FeedRouteImport } from './routes/feed/route'
import { Route as IndexImport } from './routes/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as FeedIndexImport } from './routes/feed/index'
import { Route as LoginCallbackImport } from './routes/login/callback'
import { Route as FeedFeedIdRouteImport } from './routes/feed/$feedId/route'
import { Route as FeedFeedIdIndexImport } from './routes/feed/$feedId/index'

// Create/Update Routes

const FeedRouteRoute = FeedRouteImport.update({
  id: '/feed',
  path: '/feed',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const FeedIndexRoute = FeedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => FeedRouteRoute,
} as any)

const LoginCallbackRoute = LoginCallbackImport.update({
  id: '/login/callback',
  path: '/login/callback',
  getParentRoute: () => rootRoute,
} as any)

const FeedFeedIdRouteRoute = FeedFeedIdRouteImport.update({
  id: '/$feedId',
  path: '/$feedId',
  getParentRoute: () => FeedRouteRoute,
} as any)

const FeedFeedIdIndexRoute = FeedFeedIdIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => FeedFeedIdRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/feed': {
      id: '/feed'
      path: '/feed'
      fullPath: '/feed'
      preLoaderRoute: typeof FeedRouteImport
      parentRoute: typeof rootRoute
    }
    '/feed/$feedId': {
      id: '/feed/$feedId'
      path: '/$feedId'
      fullPath: '/feed/$feedId'
      preLoaderRoute: typeof FeedFeedIdRouteImport
      parentRoute: typeof FeedRouteImport
    }
    '/login/callback': {
      id: '/login/callback'
      path: '/login/callback'
      fullPath: '/login/callback'
      preLoaderRoute: typeof LoginCallbackImport
      parentRoute: typeof rootRoute
    }
    '/feed/': {
      id: '/feed/'
      path: '/'
      fullPath: '/feed/'
      preLoaderRoute: typeof FeedIndexImport
      parentRoute: typeof FeedRouteImport
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/feed/$feedId/': {
      id: '/feed/$feedId/'
      path: '/'
      fullPath: '/feed/$feedId/'
      preLoaderRoute: typeof FeedFeedIdIndexImport
      parentRoute: typeof FeedFeedIdRouteImport
    }
  }
}

// Create and export the route tree

interface FeedFeedIdRouteRouteChildren {
  FeedFeedIdIndexRoute: typeof FeedFeedIdIndexRoute
}

const FeedFeedIdRouteRouteChildren: FeedFeedIdRouteRouteChildren = {
  FeedFeedIdIndexRoute: FeedFeedIdIndexRoute,
}

const FeedFeedIdRouteRouteWithChildren = FeedFeedIdRouteRoute._addFileChildren(
  FeedFeedIdRouteRouteChildren,
)

interface FeedRouteRouteChildren {
  FeedFeedIdRouteRoute: typeof FeedFeedIdRouteRouteWithChildren
  FeedIndexRoute: typeof FeedIndexRoute
}

const FeedRouteRouteChildren: FeedRouteRouteChildren = {
  FeedFeedIdRouteRoute: FeedFeedIdRouteRouteWithChildren,
  FeedIndexRoute: FeedIndexRoute,
}

const FeedRouteRouteWithChildren = FeedRouteRoute._addFileChildren(
  FeedRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/feed': typeof FeedRouteRouteWithChildren
  '/feed/$feedId': typeof FeedFeedIdRouteRouteWithChildren
  '/login/callback': typeof LoginCallbackRoute
  '/feed/': typeof FeedIndexRoute
  '/login': typeof LoginIndexRoute
  '/feed/$feedId/': typeof FeedFeedIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login/callback': typeof LoginCallbackRoute
  '/feed': typeof FeedIndexRoute
  '/login': typeof LoginIndexRoute
  '/feed/$feedId': typeof FeedFeedIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/feed': typeof FeedRouteRouteWithChildren
  '/feed/$feedId': typeof FeedFeedIdRouteRouteWithChildren
  '/login/callback': typeof LoginCallbackRoute
  '/feed/': typeof FeedIndexRoute
  '/login/': typeof LoginIndexRoute
  '/feed/$feedId/': typeof FeedFeedIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/feed'
    | '/feed/$feedId'
    | '/login/callback'
    | '/feed/'
    | '/login'
    | '/feed/$feedId/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login/callback' | '/feed' | '/login' | '/feed/$feedId'
  id:
    | '__root__'
    | '/'
    | '/feed'
    | '/feed/$feedId'
    | '/login/callback'
    | '/feed/'
    | '/login/'
    | '/feed/$feedId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  FeedRouteRoute: typeof FeedRouteRouteWithChildren
  LoginCallbackRoute: typeof LoginCallbackRoute
  LoginIndexRoute: typeof LoginIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  FeedRouteRoute: FeedRouteRouteWithChildren,
  LoginCallbackRoute: LoginCallbackRoute,
  LoginIndexRoute: LoginIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/feed",
        "/login/callback",
        "/login/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/feed": {
      "filePath": "feed/route.tsx",
      "children": [
        "/feed/$feedId",
        "/feed/"
      ]
    },
    "/feed/$feedId": {
      "filePath": "feed/$feedId/route.tsx",
      "parent": "/feed",
      "children": [
        "/feed/$feedId/"
      ]
    },
    "/login/callback": {
      "filePath": "login/callback.tsx"
    },
    "/feed/": {
      "filePath": "feed/index.tsx",
      "parent": "/feed"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/feed/$feedId/": {
      "filePath": "feed/$feedId/index.tsx",
      "parent": "/feed/$feedId"
    }
  }
}
ROUTE_MANIFEST_END */
