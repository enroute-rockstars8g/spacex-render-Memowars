import { LazyExoticComponent } from 'react';

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  name: string;
}

export const routes: Route[] = [
  /*   {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: <p></p>,
    name: 'Shopping Page',
  },
  {
    to: '/no-lazy',
    path: '/no-lazy',
    Component: "XD",
    name: 'No lazy load',
  }, */
];
