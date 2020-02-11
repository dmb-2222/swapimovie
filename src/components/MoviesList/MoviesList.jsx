import React, { Component } from "react";
// import { getMovies } from "../../services/api";
import Movie from "../Movie/Movie";
import Loader from "../Loader/Loader";
import styles from "./MoviesList.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { getMoviesListFetch } from "../../redux/moviesList/moviesListOperations";
import { debounce } from "lodash";
import { connect } from "react-redux";

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
    const { items, isLoading } = this.props;
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
        {isLoading && <Loader />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: state.listMovies.movies,
  isLoading: state.listMovies.isLoadingGetMoviesList
});

const mapDispatchToProps = dispatch => ({
  moviesList: value => dispatch(getMoviesListFetch(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
