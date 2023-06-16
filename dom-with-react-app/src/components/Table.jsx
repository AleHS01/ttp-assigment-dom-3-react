import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor(props) {
    super(props);

    this.grid = props.grid;
    this.cellClick = props.cellClick;
  }

  render() {
    return (
      <table>
        <tbody>
          {this.grid.map((rows, rowNumber) => (
            <TableRow
              key={rowNumber}
              rows={rows}
              rowNumber={rowNumber}
              cellClick={this.cellClick}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
export default Table;
