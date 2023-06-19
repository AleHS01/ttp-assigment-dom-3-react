import React, { Component } from "react";
import TableCell from "./TableCell";

class TableRow extends Component {
  render() {
    const { rows, rowNumber, cellClick, onMouseDown, onMouseOver, onMouseUp } =
      this.props;

    return (
      <tr>
        {rows.map((cellColor, columnNumber) => (
          <TableCell
            key={columnNumber}
            cellColor={cellColor}
            rowNumber={rowNumber}
            columnNumber={columnNumber}
            cellClick={cellClick}
            onMouseDown={onMouseDown}
            onMouseOver={onMouseOver}
            onMouseUp={onMouseUp}
          />
        ))}
      </tr>
    );
  }
}

export default TableRow;
