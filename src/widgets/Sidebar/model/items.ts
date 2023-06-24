import React from 'react';

import { RouteConfig } from 'shared/config/routeConfig/routeConfig';

import AboutSvg from 'shared/assets/icons/about.svg';
import HomeSvg from 'shared/assets/icons/home.svg';
import ProfileSvg from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: RouteConfig.main.path || '/',
    Icon: HomeSvg,
    text: 'main',
  },
  {
    path: RouteConfig.about.path || '/',
    Icon: AboutSvg,
    text: 'about',
  },
  {
    path: RouteConfig.profile.path || '/',
    Icon: ProfileSvg,
    text: 'profile',
    authOnly: true,
  },
];
