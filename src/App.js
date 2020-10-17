import React from "react";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";
import ViewItems from "./components/Cart/ViewItems";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Cart></Cart>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/cartItems">
            <ViewItems></ViewItems>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
