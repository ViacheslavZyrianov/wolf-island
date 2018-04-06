import {randomCellsCoordinates} from "../random";

export default class DrawEnvironment{

    constructor(environment){
        this.environment = environment;
        this.grass = this.environment.grass;

        this.drawGrass();
    }

    drawGrass(){
        for(let i=0; i<this.environment.grass; i++){

        }
    }

}