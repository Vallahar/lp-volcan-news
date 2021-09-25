import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { DashboardPage } from "./views/DashboardPage/DashboardPage.js";
import { MainLayout } from "./templates/MainLayout/MainLayout";


const routes = [
  {
    page: 'dashboard',
    component: DashboardPage,
    path: '/dashboard',
    layout: MainLayout,
  },
];

function getRoutes() {
  return routes.map((route) =>
    <RouteWrapper
      path={route.path}
      component={route.component}
      layout={route.layout}
      page={route.page}
    />
  )
}

function RouteWrapper({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {getRoutes()}
      <Redirect from="/" to="/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);