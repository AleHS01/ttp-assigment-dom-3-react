import React, { Component } from "react";
import Table from "./Table";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [[""]],
      cellColor: "transparent",
    };

    this.addRow = this.addRow.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.cellClick = this.cellClick.bind(this);
    this.colorUncolorCells = this.colorUncolorCells.bind(this);
    this.colorAllCells = this.colorAllCells.bind(this);
    this.clearAllCells = this.clearAllCells.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.removeColumn = this.removeColumn.bind(this)
  }

  addRow = () => {
    let columnNumber = this.state.table[0].length;
    let rowToBeAdded = new Array(columnNumber).fill("");
    this.setState((prevState) => ({
      table: [...prevState.table, rowToBeAdded],
    }));
  };

  addColumn = () => {
    this.setState((prevState) => {
      const updatedTable = prevState.table.map((rows) => [...rows, ""]);
      return {
        table: updatedTable,
      };
    });
  };

  selectColor = (dropdown) => {
    this.setState({
      cellColor: dropdown.target.value,
    });
  };

   cellClick = (rowNumber, columnNumber) => {
     const cellColor = this.state.cellColor;
    this.setState((prevState) => {
      const updatedTable = [...prevState.table];
      updatedTable[rowNumber][columnNumber] = cellColor;
      return {
        table: updatedTable,
      };
    });
  };

  colorUncolorCells() {
    const table = this.state.table;
    const color = this.state.cellColor;

    const updatedTable = table.map((row) =>
    row.map((cell) => {
      if (cell === "" || cell === "transparent")
        return color;
      return cell;
    })
    );
    this.setState({ table: updatedTable });
  };

  colorAllCells() {
    const table = this.state.table;
    const color = this.state.cellColor;

    const updatedTable = table.map(function (row) {
      const updatedRow = row.map(function () {
        return color;
      });

      return updatedRow;
    });

    this.setState({
      table: updatedTable
    });
  }

  clearAllCells() {
    const table = this.state.table;
    const color = "transparent";
    const updatedTable = table.map((row) =>
      row.map((cell) => {
        if (cell !== "transparent")
          return color;
        return cell;
      })
    );
    this.setState({
      table: updatedTable
    });
  }

  removeRow = (rowNumber) => {
    this.setState((prevState) => {
      const updatedTable = [...prevState.table];
      if (updatedTable.length > 1) {
        //if the length of the row is greater than one then delete
        updatedTable.splice(rowNumber, 1); // remove 1 row
      }
      return {
        table: updatedTable,
      };
    });
  };

  removeColumn = (columnNumber) => {
    this.setState((prevState) => {
      const updatedTable = prevState.table.map((row) => {
        const updatedRow = [...row]; //row containing an array with cells / columns
        if (updatedRow.length > 1) {
          updatedRow.splice(columnNumber, 1);
        }
        return updatedRow;
      });
      return {
        table: updatedTable,
      };
    });
  };

  render() {
    return (
      <div className="button-container">
        <button id="addrow" onClick={this.addRow}>
          Add Row
        </button>
        <button id="addColumn" onClick={this.addColumn}>
          Add Column
        </button>
        <select
          id="dropdown"
          onChange={this.selectColor}
          value={this.state.cellColor}
        >
          <option value="transparent">Default</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <button onClick={this.colorUncolorCells}>Color Uncolored Cells</button>
        <button onClick={this.colorAllCells}>Color All Cells</button>
        <button onClick={this.clearAllCells}>Clear All Cells</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.removeColumn}>Remove Column</button>
        <Table table={this.state.table} cellClick={this.cellClick} />
      </div>
    );
  }
}

export default AppComponent;
