export default class DrawAnimals {

    constructor(animals) {
        this.animals = animals;
        this.tableRows = document.querySelectorAll('.wolf-island table tbody tr');
        this.paint();
    }

    paint() {
        this.clear();
        this.animals.forEach(animal => {
            const cell = this.tableRows[animal.position.y].querySelectorAll('td')[animal.position.x];
            cell.setAttribute('data-type', animal.type);
            cell.setAttribute('data-sex', animal.sex);
        });
    }

    clear() {
        const fieldSize = this.tableRows.length;
        for (let i = 0; i < fieldSize; i++) {
            for (let j = 0; j < fieldSize; j++) {
                const cell = this.tableRows[i].querySelectorAll('td')[j];
                if(cell.getAttribute('data-sex')){
                    cell.setAttribute('data-type', '');
                    cell.setAttribute('data-sex', '');
                }
            }
        }
    }

}