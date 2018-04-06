export default class DrawField{

    constructor(fieldSize){
        this.fieldSize = fieldSize;
        this.table = null;
        this.cellSize = 100;
        this.createTable();
        this.drawTable();
    }

    createTable(){
        document.querySelector('.wolf-island').appendChild(document.createElement("TABLE"));
        this.table = document.querySelector('.wolf-island table');
    }

    drawTable(){
        for(let rowNum=0; rowNum<this.fieldSize; rowNum++){
            let row = this.table.insertRow(rowNum);
            for(let cellNum=0; cellNum<this.fieldSize; cellNum++){
                const cell = row.insertCell(cellNum);
                cell.style.width = cell.style.height = `${this.cellSize}px`;
                cell.innerHTML = `<span class="cell-coords">${rowNum}${cellNum}</span>`;
            }
        }
    }

}