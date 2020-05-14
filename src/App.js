import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductFinder } from "./component/ProductFinder";
import { Layout } from "./component/Layout";

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <ProductFinder />
          </Layout>
        </Route>
        <Route path="/store">
          <Layout>
            <Store />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

function Store() {
  return (
    <div>
      <h2>Store</h2>
    </div>
  );
}
