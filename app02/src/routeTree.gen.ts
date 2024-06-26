/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as App02IndexImport } from './routes/app02/index'
import { Route as App02FooImport } from './routes/app02/foo'
import { Route as App02BarImport } from './routes/app02/bar'

// Create/Update Routes

const App02IndexRoute = App02IndexImport.update({
  path: '/app02/',
  getParentRoute: () => rootRoute,
} as any)

const App02FooRoute = App02FooImport.update({
  path: '/app02/foo',
  getParentRoute: () => rootRoute,
} as any)

const App02BarRoute = App02BarImport.update({
  path: '/app02/bar',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/app02/bar': {
      preLoaderRoute: typeof App02BarImport
      parentRoute: typeof rootRoute
    }
    '/app02/foo': {
      preLoaderRoute: typeof App02FooImport
      parentRoute: typeof rootRoute
    }
    '/app02/': {
      preLoaderRoute: typeof App02IndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  App02BarRoute,
  App02FooRoute,
  App02IndexRoute,
])

/* prettier-ignore-end */
