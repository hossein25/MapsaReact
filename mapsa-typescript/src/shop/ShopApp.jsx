import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import SignUp from "./SignUp";

const ShopApp = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default ShopApp;
