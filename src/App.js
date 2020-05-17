import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductList from "./component/ProductList";
import StoreList from "./component/StoreList";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route path="/store-list" render={(props) => checkProduct(props)} />
      {/* Fallback for not found route */}
      <Route path="/">
        <ProductList />
      </Route>
    </Switch>
  </Router>
);

/**
 * Prevents going to /store-list if the url is typed as url by user without
 * passing through the step 1 (product selection), in case redirects to homepage
 * @param {object} location router's location object contains the state
 */
const checkProduct = ({ location }) => {
  const { state } = location;
  debugger;
  return state !== undefined && !!state.productId && !!state.productName ? (
    <StoreList />
  ) : (
    <Redirect to="/" />
  );
};
