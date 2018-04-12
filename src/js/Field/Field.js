import Cell from './Cell';

export default class Field {
  constructor() {
    this.size = 5; // means SIZExSIZE
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
      // const cellContent = cell.content;

      // clear all animals
      // if(cellContent.length>0){ // cell is not empty
      //   cellContent.forEach(content=>{
      //     cellContent.length = 0;
      //   });
      // }

      // clear all
      cell.content = [];

      // place all cell data
      cellsData.forEach(cellData => {
        if (cellData.coordinates.x === cell.coordinates.x && cellData.coordinates.y === cell.coordinates.y) {
          cell.content.push(cellData);
        }
      });

    });

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
