import React from 'react';
import { Home, Person } from '@material-ui/icons';

export const NAV_MENU_OPTIONS = [
  {
    value: 'Home',
    path: '/home',
    selectedClass: 'selected',
    icon: <Home className={'icon'} />,
  },
  {
    value: 'About',
    path: '/about',
    selectedClass: 'selected',
    icon: <Person className={'icon'} />,
  }
];