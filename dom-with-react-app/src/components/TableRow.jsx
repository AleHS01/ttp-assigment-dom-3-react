import React, { Component } from "react";
import { TableCell } from "./TableCell";

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.rows = props.rows;
    this.rowNumber = props.rowNumber;
    this.cellClick = props.cellClick;
  }

  render() {
    return (
      <tr>
        {this.rows.map((cellColor, columnNumber) => (
          <TableCell
            key={columnNumber}
            cellColor={cellColor}
            rowNumber={this.rowNumber}
            columnNumber={columnNumber}
            cellClick={this.cellClick}
          />
        ))}
      </tr>
    );
  }
}
