import appRoutes from '../../../src/js/utils/appRoutes';
import Home from '../../../src/js/components/Home';
import About from '../../../src/js/components/About';
import Login from '../../../src/js/components/Login';

describe('UTILS - ROUTES ARRAY', () => {
  it('Testing all routes renders in the correct order', () => {
    const expectedRoutes = [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/login',
        component: Login,
      },
    ];

    expect(appRoutes).to.deep.equal(expectedRoutes);
  });
});