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
      if (cell === "")
        return color;
      return cell;
    })
    );
    this.setState({ table: updatedTable });
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
        <Table table={this.state.table} cellClick={this.cellClick} />
      </div>
    );
  }
}

export default AppComponent;
