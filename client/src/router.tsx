// import lib, component
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import "mobx-react-lite/batchingForReactDom";

/**
 * function Router for router components
 */
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}
