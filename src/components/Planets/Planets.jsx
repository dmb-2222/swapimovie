import React, { Component } from "react";
// import { getInfo } from "../../services/api";
import { getInfoPlanetShipsFetch } from "../../redux/planets/planetsOperations";
import { connect } from "react-redux";

class Planet extends Component {
  state = { planet: null };
  componentDidMount() {
    const slicePlanet = this.props.location.pathname.slice(9, 25);
    const queryPlanet = `https://swapi.co/api/${slicePlanet}`;
    if (queryPlanet) {
      this.props.getPlanet(queryPlanet);
      // getInfo(queryPlanet).then(data =>
      //   this.setState({ planet: data })
      // );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.urlPlanet !== prevProps.location.urlPlanet) {
      this.props.getPlanet(this.props.location.urlPlanet);
    }
  }
  render() {
    const { planet } = this.props;
    return (
      <>
        {planet && (
          <div>
            <h3>About planet</h3>
            <h4>name: {planet.name}</h4>
            <p>rotation_period: {planet.rotation_period}</p>
            <p>orbital_period: {planet.orbital_period}</p>
            <p>climate: {planet.climate}</p>
            <p>planet.gravity: {planet.gravity}</p>
            <p>planet.terrain: {planet.terrain}</p>
            <p>population: {planet.population}</p>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  planet: state.planets
});

const mapDispatchToProps = dispatch => ({
  getPlanet: value => dispatch(getInfoPlanetShipsFetch(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Planet);
