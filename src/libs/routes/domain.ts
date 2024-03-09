import { lazy } from 'react';

const Main = lazy(() => import('src/pages/Main'));
const NotFound = lazy(() => import('src/pages/NotFound'));
export const ROUTES = [
  {
    path: '/',
    auth: true,
    node: Main,
  },
  {
    path: '*',
    node: NotFound,
  },
];
