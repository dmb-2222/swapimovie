import React, { Component } from "react";
import { getInfo } from "../../services/api";
class Planet extends Component {
  state = { planet: {} };
  componentDidMount() {
    getInfo(this.props.location.urlPlanet).then(data =>
      this.setState({ planet: data })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.planet.name === this.state.planet.name) {
      getInfo(this.props.location.urlPlanet).then(data =>
        this.setState({ planet: data })
      );
    }
  }
  render() {
    const { planet } = this.state;
    console.log(planet);
    return (
      <>
        <h3>About planet</h3>
        <h4>name:{planet.name}</h4>
        <p>rotation_period:{planet.rotation_period}</p>
        <p>orbital_period:{planet.orbital_period}</p>
        <p>climate:{planet.climate}</p>
        <p>planet.gravity:{planet.gravity}</p>
        <p>planet.terrain:{planet.terrain}</p>
        <p>population:{planet.population}</p>
      </>
    );
  }
}
export default Planet;
