import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./component/ProductList";
import StoreList from "./component/StoreList";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route path="/store-list">
        <StoreList />
      </Route>
    </Switch>
  </Router>
);
