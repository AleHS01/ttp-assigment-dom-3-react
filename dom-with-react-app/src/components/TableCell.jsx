import React, { Component } from "react";

class TableCell extends Component {
  render() {
    const { cellColor, rowNumber, columnNumber, cellClick } = this.props;


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
