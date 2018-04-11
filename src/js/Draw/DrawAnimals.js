export default class DrawAnimals {

  constructor(animals) {
    this.animals = animals;
    this.tableRows = document.querySelectorAll('.wolf-island table tbody tr');
    this.paint();
  }

  paint() {
    this.clearCells();
    this.animals.forEach(animal => {
      const cell = this.tableRows[animal.position.y].querySelectorAll('td')[animal.position.x];
      if (animal.isAlive) {
        cell.setAttribute('data-alive', animal.isAlive);
        cell.setAttribute('data-type', animal.type);
        cell.setAttribute('data-sex', animal.sex);
        cell.setAttribute('data-health', animal.health);
      } else {
        this.clearCell(cell);
      }
    });
  }

  clearCells() {
    const fieldSize = this.tableRows.length;
    for (let i = 0; i < fieldSize; i++) {
      for (let j = 0; j < fieldSize; j++) {
        const cell = this.tableRows[i].querySelectorAll('td')[j];
        if (cell.getAttribute('data-sex')) {
          this.clearCell(cell);
        }
      }
    }
  }

  clearCell(cell){
    cell.removeAttribute('data-type');
    cell.removeAttribute('data-sex');
    cell.removeAttribute('data-health');
    cell.removeAttribute('data-alive');
  }

}
