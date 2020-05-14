import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductFinder } from "./component/ProductFinder";
import { Layout } from "./component/Layout";
import { StoreList } from "./component/StoreList";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Layout>
          <ProductFinder />
        </Layout>
      </Route>
      <Route path="/store-list">
        <Layout>
          <StoreList />
        </Layout>
      </Route>
    </Switch>
  </Router>
);
