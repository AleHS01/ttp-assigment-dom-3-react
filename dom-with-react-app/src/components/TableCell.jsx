import React, { Component } from "react";

class TableCell extends Component {
  constructor(props) {
    super(props);

    this.cellColor = props.cellColor;
    this.rowNumber = props.rowNumber;
    this.columnNumber = props.columnNumber;
    this.cellClick = props.cellClick;
  }

  render() {
    return (
      <td
        className="table-cell"
        style={{ backgroundColor: this.cellColor }}
        onClick={() => this.cellClick(this.rowNumber, this.columnNumber)}
      ></td>
    );
  }
}

export default TableCell;
