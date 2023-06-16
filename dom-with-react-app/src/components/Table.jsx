import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.table.map((rows, rowNumber) => (
            <TableRow
              key={rowNumber}
              rows={rows}
              rowNumber={rowNumber}
              cellClick={this.props.cellClick}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
export default Table;
