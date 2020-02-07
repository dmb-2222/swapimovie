import React, { Component } from "react";
import { getInfo } from "../../services/api";
class Ships extends Component {
  state = { ships: {} };
  componentDidMount() {
    getInfo(this.props.location.urlShip).then(data =>
      this.setState({ ships: data })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.ships.name === this.state.ships.name) {
      getInfo(this.props.location.urlShip).then(data =>
        this.setState({ ships: data })
      );
    }
  }
  render() {
    const { ships } = this.state;
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
