import React, { Component } from "react";
import { getInfo } from "../../services/api";
import { Link, Route } from "react-router-dom";
import Ships from "../../components/Ships/Ships";
import Planet from "../../components/Planets/Planets";
import styles from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movieDetals: {}
  };
  componentDidMount() {
    const linkToMovie = this.props.match.url;
    const url = `https://swapi.co/api${linkToMovie}`;
    getInfo(url).then(data => this.setState({ movieDetals: data }));
  }
  handleGoBack = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { movieDetals } = this.state;
    const { state } = this.props.location;
    console.log(this.props);
    // const ships = !movieDetals.starships
    //   ? "no ships"
    //   : movieDetals.starships.map(ship => ship);
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={styles.movieDetailsPage}>
          <div>
            <h1>{movieDetals.title}</h1>
            <p>{movieDetals.opening_crawl}</p>
            <div className={styles.choice}>
              <div>
                <h3>Choice ship</h3>
                {movieDetals.starships &&
                  movieDetals.starships.map((ship, index) => (
                    <div key={ship}>
                      <Link
                        to={{
                          pathname: `${this.props.match.url}/ships${index + 1}`,
                          urlShip: ship,
                          state
                        }}
                      >
                        starship {index + 1}
                      </Link>
                    </div>
                  ))}
              </div>
              <div>
                <h3>Choice planet</h3>
                {movieDetals.planets &&
                  movieDetals.planets.map((planet, index) => (
                    <div key={planet}>
                      <Link
                        to={{
                          pathname: `${this.props.match.url}/planets${index +
                            1}`,
                          urlPlanet: planet,
                          state
                        }}
                      >
                        planet {index + 1}
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <Route path={`${this.props.match.url}/ships:id`} component={Ships} />
        <Route path={`${this.props.match.url}/planets:id`} component={Planet} />
      </>
    );
  }
}

export default MovieDetailsPage;
