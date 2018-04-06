import {randomCellsCoordinates} from "../random";

export default class Grass{

    constructor(field){
        this.field = field;

        this.setGrass();
    }

    setGrass(){
        this.field.grass = randomCellsCoordinates(this.grassQNT)
    }

}