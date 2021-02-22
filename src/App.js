import React, { Component } from "react";
import Login from "@containers/login/login.jsx";
import Admin from "@containers/admin/admin.jsx";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Redirect to="/login" />
      </Switch>
    );
  }
}
