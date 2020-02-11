import React, { Component } from "react";
// import { getMovies } from "../../services/api";
import Movie from "../Movie/Movie";
import styles from "./MoviesList.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { getMoviesListFetch } from "../../redux/moviesList/moviesListOperations";
import { debounce } from "lodash";
import { connect } from "react-redux";
// import {
//   getMoviesListSelect,
//   getisLoadingGetMoviesList
// } from "../../redux/moviesList/moviesListSelectors";
// second variant
import * as moviesSelectors from "../../redux/moviesList/moviesListSelectors";

class MoviesList extends Component {
  componentDidMount() {
    this.props.moviesList();
  }

  callAppi = debounce(value => {
    this.props.moviesList(value);
  }, 1000);

  handleInput = e => {
    e.preventDefault();
    this.callAppi(e.target.value);
  };

  render() {
    const { items } = this.props;
    const sortMovies =
      items &&
      items.sort(function(a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    return (
      <>
        <SearchBar handleInput={this.handleInput} />
        {items.length === 0 ? (
          <h2>No match</h2>
        ) : (
          <ul className={styles.listMovie}>
            {sortMovies.map(item => (
              <Movie
                {...item}
                key={item.created}
                handleInput={this.handleInput}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: moviesSelectors.getMoviesListSelect(state),
});

const mapDispatchToProps = dispatch => ({
  moviesList: value => dispatch(getMoviesListFetch(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
