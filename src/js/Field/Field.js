import Cell from './Cell';

export default class Field {
  constructor() {
    this.size = 3; // means SIZExSIZE
    this.cells = [];

    this.createCells();
  }

  createCells() {
    for (let rowNum = 0; rowNum < this.size; rowNum++) {
      for (let cellNum = 0; cellNum < this.size; cellNum++) {
        this.cells.push(
          new Cell({
            coordinates: {
              x: rowNum,
              y: cellNum,
            }
          })
        );
      }
    }
  }

  updateCells(cellsData) {
    this.cells.forEach(cell => {
      cell.content = null;
      cellsData.forEach(cellData => {
        if (cellData.position.x === cell.coordinates.x && cellData.position.y === cell.coordinates.y) {
          cell.content = cellData;
        }
      });
    });
    console.log(this.cells);
  }

  isCellAvailableForMove(x, y) {
    return x >= 0 && x <= this.size - 1 && y >= 0 && y <= this.size - 1;
  }

  getAvailableMoves(x, y) {
    let availableMoves = [];
    for (let dX = -1; dX <= 1; dX++) {
      for (let dY = -1; dY <= 1; dY++) {
        const supposedX = x + dX;
        const supposedY = y + dY;
        if (this.isCellAvailableForMove(supposedX, supposedY)) {
          availableMoves.push({
            x: supposedX,
            y: supposedY,
          })
        }
      }
    }
    return availableMoves;
  }

}
