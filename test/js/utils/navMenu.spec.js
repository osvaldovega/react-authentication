import React from 'react';
import { Home, Person } from '@material-ui/icons';
import { NAV_MENU_OPTIONS } from '../../../src/js/utils/navMenu';

describe('UTILS - NAV MENU', () => {
  it('Testing Nav Menu files, render all options', () => {
    const expectedNavMenu = [
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

    expect(NAV_MENU_OPTIONS).to.deep.equal(expectedNavMenu);
  });
});