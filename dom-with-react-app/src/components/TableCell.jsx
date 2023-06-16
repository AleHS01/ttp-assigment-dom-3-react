import React, { Component } from "react";

class TableCell extends Component {
  constructor(props) {
    super(props);

    this.cellColor = props.cellColor;
    this.rowNumber = props.rowNumber;
    this.columnNumber = props.columnNumber;
    this.cellClick = props.columnNumber;
    this.id = props.key;
  }

  render() {
    return (
      <td
        style={{ backgroundColor: this.cellColor }}
        onClick={this.cellClick(this.rowNumber, this.columnNumber)}
        id={this.id}
      ></td>
    );
  }
}
