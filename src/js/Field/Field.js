export default class Field {

    constructor() {
        this.size = 10; // means SIZExSIZE
        this.field = [];
        this.table = document.querySelector('table');

        this.create();
    }

    create() {
        for (let rowNum = 0; rowNum < this.size; rowNum++) {
            this.field.push([]);
            for (let cellNum = 0; cellNum < this.size; cellNum++) {
                this.field[rowNum].push({
                    coords: {
                        x: rowNum,
                        y: cellNum
                    }
                });
            }
        }
    }

    isCellAvailableForMove(x, y) {
        return x >= 0 && x <= this.size - 1 && y >= 0 && y <= this.size - 1;
    }

    getAvailableMoves(x, y) {
        let availableMoves = [];
        for (let xD = -1; xD <= 1; xD++) {
            for (let yD = -1; yD <= 1; yD++) {
                const supposedX = x + xD;
                const supposedY = y + yD;
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