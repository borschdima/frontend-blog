import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path:  RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
};