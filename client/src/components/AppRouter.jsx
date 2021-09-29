import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const { userInfo } = useSelector(state => fstate.userLogin);

  let accessibleRoutes = [...publicRoutes];
  if (userInfo) accessibleRoutes = accessibleRoutes.concat(privateRoutes);
  if (userInfo?.isAdmin) accessibleRoutes = accessibleRoutes.concat(adminRoutes);

  const redirectRoute = userInfo ? '/' : '/login';

  return (
    <Switch>
      {accessibleRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to={redirectRoute} />
    </Switch>
  );
};

export default AppRouter;
