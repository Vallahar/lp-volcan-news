import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { DashboardPage } from "./views/DashboardPage/DashboardPage";
import { ArticlesListPage } from "./views/ArticlesListPage/ArticlesListPage";
import { ArticlePage } from "./views/ArticlePage/ArticlePage";
import { MainLayout } from "./templates/MainLayout/MainLayout";

import { apiConfig } from "../package.json";

import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI(apiConfig);

const routes = [
  {
    page: 'dashboard',
    component: DashboardPage,
    path: '/',
    layout: MainLayout,
    exact: true
  },
  {
    page: 'articles',
    component: ArticlesListPage,
    path: '/articulos',
    layout: MainLayout,
  },
  {
    page: 'article',
    component: ArticlePage,
    path: '/articulo/:id',
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
      exact={route.exact}
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
        <Component {...props} api={api} />
      </Layout>
    } />
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {getRoutes()}
      <Redirect from="/" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);