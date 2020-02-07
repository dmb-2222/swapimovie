import React, { Component } from "react";
import { getMovies } from "../../services/api";
import Movie from "../Movie/Movie";
import Loader from "../Loader/Loader";
import styles from "./MoviesList.module.css";
import SearchBar from "../SearchBar/SearchBar";

class MoviesList extends Component {
  state = { items: [], isLoader: true };

  componentDidMount() {
    getMovies().then(data => this.setState({ items: data, isLoader: false }));
  }
  handleInput = e => {
    e.preventDefault();
    this.setState({ isLoader: true });
    getMovies(e.target.value).then(data =>
      this.setState({ items: data, isLoader: false })
    );
  };

  render() {
    const { items, isLoader } = this.state;
    const sortMovies = items.sort(function(a, b) {
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
        {isLoader && <Loader />}
      </>
    );
  }
}

export default MoviesList;
