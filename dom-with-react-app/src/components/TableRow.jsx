import React, { Component } from "react";
import TableCell from "./TableCell";

class TableRow extends Component {
  render() {
    return (
      <tr>
        {this.props.rows.map((cellColor, columnNumber) => (
          <TableCell
            key={columnNumber}
            cellColor={cellColor}
            rowNumber={this.props.rowNumber}
            columnNumber={columnNumber}
            cellClick={this.props.cellClick}
          />
        ))}
      </tr>
    );
  }
}

export default TableRow;
