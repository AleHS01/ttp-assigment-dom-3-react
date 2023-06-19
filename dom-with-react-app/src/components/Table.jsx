import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  render() {
    const { table, cellClick, onMouseDown, onMouseOver, onMouseUp } =
      this.props;

    return (
      <table id="table">
        <tbody>
          {table.map((rows, rowNumber) => (
            <TableRow
              key={rowNumber}
              rows={rows}
              rowNumber={rowNumber}
              cellClick={cellClick}
              onMouseDown={onMouseDown}
              onMouseOver={onMouseOver}
              onMouseUp={onMouseUp}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
