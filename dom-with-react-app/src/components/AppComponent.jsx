import React, { Component } from "react";
import Table from "./Table";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [[""]],
      cellColor: "white",
      isDragging: false,
      startCell: null,
    };

    this.addRow = this.addRow.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.cellClick = this.cellClick.bind(this);
    this.colorUncolorCells = this.colorUncolorCells.bind(this);
    this.colorAllCells = this.colorAllCells.bind(this);
    this.clearAllCells = this.clearAllCells.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.removeColumn = this.removeColumn.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    const tableElement = document.getElementById("table");
    tableElement.addEventListener("mouseup", this.handleMouseUp);
    tableElement.addEventListener("mouseleave", this.handleMouseUp);
  }

  componentWillUnmount() {
    const tableElement = document.getElementById("table");
    tableElement.removeEventListener("mouseup", this.handleMouseUp);
    tableElement.removeEventListener("mouseleave", this.handleMouseUp);
  }

  // addRow: This function is used to add a new row to the table.
  // It creates an empty row (array filled with empty strings) with the same length as the existing rows.
  addRow = () => {
    let columnNumber = this.state.table[0].length;
    let rowToBeAdded = new Array(columnNumber).fill("");
    this.setState((prevState) => ({
      table: [...prevState.table, rowToBeAdded],
    }));
  };

  // addColumn: This function is used to add a new column to all existing rows in the table.
  // It maps over the current state of the table and adds an empty string to the end of each row.
  addColumn = () => {
    this.setState((prevState) => {
      const updatedTable = prevState.table.map((rows) => [...rows, ""]);
      return {
        table: updatedTable,
      };
    });
  };

  // selectColor: This function updates the selected cell color in the component's state.
  selectColor = (dropdown) => {
    this.setState({
      cellColor: dropdown.target.value,
    });
  };

  // cellClick: This function updates the color of a specific cell in the table when clicked.
  // It updates the color based on the currently selected color in the state.
  cellClick = (rowNumber, columnNumber) => {
    const cellColor = this.state.cellColor;
    this.setState((prevState) => {
      const updatedTable = [...prevState.table];
      updatedTable[rowNumber][columnNumber] = cellColor;
      return {
        table: updatedTable,
        isDragging: true,
        startCell: [rowNumber, columnNumber],
      };
    });
  };

  // colorUncolorCells: This function updates the color of all uncolored or white cells in the table.
  // It updates the color based on the currently selected color in the state.
  colorUncolorCells() {
    const table = this.state.table;
    const color = this.state.cellColor;

    const updatedTable = table.map((row) =>
      row.map((cell) => {
        if (cell === "" || cell === "white") return color;
        return cell;
      })
    );
    this.setState({ table: updatedTable });
  }

  // colorAllCells: This function updates the color of all cells in the table.
  // It updates the color based on the currently selected color in the state.
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
      table: updatedTable,
    });
  }

  // clearAllCells: This function clears all colored cells in the table.
  // It sets the color of all non-white cells to white.
  clearAllCells() {
    const table = this.state.table;
    const color = "white";
    const updatedTable = table.map((row) =>
      row.map((cell) => {
        if (cell !== "white") return color;
        return cell;
      })
    );
    this.setState({
      table: updatedTable,
    });
  }

  // removeRow: This function removes a specific row from the table.
  removeRow = (rowNumber) => {
    this.setState((prevState) => {
      const updatedTable = [...prevState.table];
      if (updatedTable.length > 1) {
        updatedTable.splice(rowNumber, 1);
      }
      return {
        table: updatedTable,
      };
    });
  };

  // removeColumn: This function removes a specific column from all rows in the table.
  removeColumn = (columnNumber) => {
    this.setState((prevState) => {
      const updatedTable = prevState.table.map((row) => {
        const updatedRow = [...row];
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

  // handleMouseDown: This function is called when the mouse button is pressed down.
  // It's used to start the process of coloring a range of cells via mouse dragging.
  handleMouseDown(rowNumber, columnNumber) {
    this.setState({
      isDragging: true,
      startCell: [rowNumber, columnNumber],
    });
  }

  // handleMouseOver: This function is called when the mouse cursor moves over a cell while the mouse button is pressed down.
  // It's used to color a range of cells by dragging the mouse.
  handleMouseOver(rowNumber, columnNumber) {
    if (this.state.isDragging) {
      const startCell = this.state.startCell;
      const endCell = [rowNumber, columnNumber];

      const updatedTable = this.state.table.map((rows, rowIndex) => {
        return rows.map((cellColor, columnIndex) => {
          if (
            rowIndex >= Math.min(startCell[0], endCell[0]) &&
            rowIndex <= Math.max(startCell[0], endCell[0]) &&
            columnIndex >= Math.min(startCell[1], endCell[1]) &&
            columnIndex <= Math.max(startCell[1], endCell[1])
          ) {
            return this.state.cellColor;
          } else {
            return cellColor;
          }
        });
      });

      this.setState({
        table: updatedTable,
      });
    }
  }

  // handleMouseUp: This function is called when the mouse button is released.
  // It's used to stop the process of coloring a range of cells via mouse dragging.
  handleMouseUp() {
    this.setState({
      isDragging: false,
      startCell: null,
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="button-container">
          <button id="addrow" onClick={this.addRow}>
            Add Row
          </button>
          <button id="addColumn" onClick={this.addColumn}>
            Add Column
          </button>
          <button onClick={this.removeRow}>Remove Row</button>
          <button onClick={this.removeColumn}>Remove Column</button>
          <div
            className="color-preview"
            style={{ backgroundColor: this.state.cellColor }}
          ></div>
          <select
            id="dropdown"
            onChange={this.selectColor}
            value={this.state.cellColor}
          >
            <option value="white">Default</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
          <button onClick={this.colorUncolorCells}>
            Color Uncolored Cells
          </button>
          <button onClick={this.colorAllCells}>Color All Cells</button>
          <button onClick={this.clearAllCells}>Clear All Cells</button>
        </div>

        <Table
          table={this.state.table}
          cellClick={this.cellClick}
          onMouseDown={this.handleMouseDown}
          onMouseOver={this.handleMouseOver}
          onMouseUp={this.handleMouseUp}
        />
      </div>
    );
  }
}

export default AppComponent;
