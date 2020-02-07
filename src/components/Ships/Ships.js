import React, { Component } from "react";
import { getShip } from "../../services/api";
class Ships extends Component {
  state = { ships: {} };
  componentDidMount() {
    getShip(this.props.location.urlShip).then(data =>
      this.setState({ ships: data })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "prevState",
      prevState.ships.name,
      "=== this.state",
      this.state.ships.name
    );
    console.log("this.props.location.state", this.props.location.state);

    if (prevState.ships.name === this.state.ships.name) {
      getShip(this.props.location.urlShip).then(data =>
        this.setState({ ships: data })
      );
    }
  }
  render() {
    const { ships } = this.state;
    console.log(ships);
    return (
      <>
        <h3>About ship</h3>
        <h4>{ships.name}</h4>
        <p>model:{ships.model}</p>
        <p>manufacturer:{ships.manufacturer}</p>
      </>
    );
  }
}
export default Ships;
