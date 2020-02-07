import React from "react";
import { Route, Switch } from "react-router-dom";
import MoviesList from "../MoviesList/MoviesList";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";

const SwapApp = () => (
  <Switch>
    <Route path="/" exact component={MoviesList} />
    <Route path="/films/:id" component={MovieDetailsPage} />
  </Switch>
);

export default SwapApp;
