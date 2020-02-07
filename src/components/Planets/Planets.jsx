import React, { Component } from "react";
import { getInfo } from "../../services/api";
// import PropTypes from "prop-types";

class Planet extends Component {
  // static propTypes = {
  //   planet: PropTypes.object.isRequired,
  // };
  state = { planet: null };
  componentDidMount() {
    getInfo(this.props.location.urlPlanet).then(data =>
      this.setState({ planet: data })
    );
  }
  componentDidUpdate(prevProps, prevState) {

    if (this.props.location.urlPlanet !== prevProps.location.urlPlanet) {
      getInfo(this.props.location.urlPlanet).then(data =>
        this.setState({ planet: data })
      );
    }
  }
  render() {
    const { planet } = this.state;
    return (
      <>
        {planet && (
          <div>
            <h3>About planet</h3>
            <h4>name:{planet.name}</h4>
            <p>rotation_period:{planet.rotation_period}</p>
            <p>orbital_period:{planet.orbital_period}</p>
            <p>climate:{planet.climate}</p>
            <p>planet.gravity:{planet.gravity}</p>
            <p>planet.terrain:{planet.terrain}</p>
            <p>population:{planet.population}</p>
          </div>
        )}
      </>
    );
  }
}
export default Planet;
