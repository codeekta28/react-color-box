import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorBoxContainer.css";

export class ColorBoxContainer extends Component {
  static defaultProps = {
    numberOfBoxes: 15,
  };
  render() {
    const colorBoxes = Array.from(Array(this.props.numberOfBoxes)).map((box) => <ColorBox />);

    return <div className="ColorBoxContainer">{colorBoxes}</div>;
  }
}

export default ColorBoxContainer;
