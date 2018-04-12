import {
  rnd,
  rndCellsCoords
} from "../random";

import Cell from '../Field/Cell'
import Grass from './Grass';

export default class Environment {

  constructor(field) {
    this.fieldCoordinates = [];
    field.cells.forEach(cell => {
      this.fieldCoordinates.push(cell.coordinates);
    });

    this.grassCount = 4;
    this.grass = [];

    this.createGrass();
    field.grass = this.grass;
  }

  createGrass() {
    const coords = rndCellsCoords(this.grassCount, this.fieldCoordinates);

    for(let i=0;i<this.grassCount;i++){
      this.grass.push(new Grass({
        value: rnd(1,10),
        coordinates: coords[i]
      }))
    }

  }

}
