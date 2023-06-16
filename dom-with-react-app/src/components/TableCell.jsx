import React, { Component } from "react";

class TableCell extends Component {
  constructor(props) {
    super(props);

    this.cellColor = this.props.cellColor;
    this.rowNumber = this.props.rowNumber;
    this.columnNumber = this.props.columnNumber;
    this.cellClick = this.props.cellClick;
  }

  render() {
    const cellColor = this.props.cellColor;
    const rowNumber = this.props.rowNumber;
    const columnNumber = this.props.columnNumber;
    const cellClick = this.props.cellClick;

    return (
      <td
        className="table-cell"
        style={{ backgroundColor: cellColor }}
        onClick={() => cellClick(rowNumber, columnNumber)}
      ></td>
    );
  }
}

export default TableCell;
