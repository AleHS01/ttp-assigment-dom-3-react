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
    this.cellClick = this.cellClick.bind(this);
    this.addColumn = this.addColumn.bind(this);
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
    this.setState((prevState) => {
      const updatedTable = [...prevState.table];
      updatedTable[rowNumber][columnNumber] = prevState.cellColor;
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
          <option value="red">Default</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <Table table={this.state.table} cellClick={this.cellClick} />
      </div>
    );
  }
}

export default AppComponent;
