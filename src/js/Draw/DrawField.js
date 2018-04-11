export default class DrawField{

    constructor(fieldSize){
        this.fieldSize = fieldSize;
        this.cellSize = 100;
        this.mainContainer = document.querySelector('.wolf-island');

        this.island = null;
        this.createDivs();

        // this.table = null;
        // this.createTable();
        // this.drawTable();
    }

    // createTable(){
    //     this.mainContainer.appendChild(document.createElement("TABLE"));
    //     this.table = document.querySelector('.wolf-island table');
    // }
    //
    // drawTable(){
    //     for(let rowNum=0; rowNum<this.fieldSize; rowNum++){
    //         let row = this.table.insertRow(rowNum);
    //         for(let cellNum=0; cellNum<this.fieldSize; cellNum++){
    //             const cell = row.insertCell(cellNum);
    //             cell.style.width = cell.style.height = `${this.cellSize}px`;
    //             cell.innerHTML = `<span class="cell-coords">${rowNum}${cellNum}</span>`;
    //         }
    //     }
    // }

    createDivs(){
      this.island = document.createElement("div");
      this.mainContainer.appendChild(this.island);
      this.island.className = 'island';
      this.island.style.width = `${this.fieldSize*this.cellSize}px`
      let cells = [];
      for(let i=0;i<this.fieldSize*this.fieldSize;i++){
        cells[i] = document.createElement("div");
        cells[i].className = 'cell';
        cells[i].style.width = cells[i].style.height = `${this.cellSize}px`;
        cells[i].innerHTML = i;
        cells[i] = cells[i].outerHTML;
      }
      cells = cells.join('');
      this.island.innerHTML = cells;
    }

}
