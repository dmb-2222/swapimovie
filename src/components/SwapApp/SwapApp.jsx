import React from "react";
import { Route, Switch } from "react-router-dom";
import MoviesList from "../MoviesList/MoviesList";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";

const SwapApp = ({ isLoading }) => (
  <>
    <Switch>
      <Route path="/" exact component={MoviesList} />
      <Route path="/films/:id" component={MovieDetailsPage} />
    </Switch>
    {isLoading && <Loader />}
  </>
);

const mapStateToProps = state => ({
  isLoading: state.listMovies.isLoadingGetMoviesList
});

export default connect(mapStateToProps)(SwapApp);
