import React from 'react';
import { Link, Route } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// react-router-dynamic-breadcrumbs

export default () => {
  const style = {margin: '15px 0'};
  const linkStyle = { display: 'flex' }

  const routes = [
    {
      path: '/',
      exact: true,
      sidebar: () => '',
    },
    {
      path: '/Toyota',
      sidebar: () => <div style={linkStyle}>&nbsp;/&nbsp; <Link to="/Toyota"> Toyota </Link> </div>,
    },
    {
      path: '/BMW',
      sidebar: () => <div style={linkStyle}>&nbsp;/&nbsp; <Link to="/BMW"> BMW </Link> </div>,
    },
    {
      path: '/Mercedes-Benz',
      sidebar: () => <div style={linkStyle}>&nbsp;/&nbsp; <Link to="/Mercedes-Benz"> Mercedes-Benz </Link> </div>,
    },
  ];

  return (
    <Breadcrumb style={style}> 
      <Link to="/"> Brands  </Link>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.sidebar}
        />
      ))}
    </Breadcrumb>
  );
}
