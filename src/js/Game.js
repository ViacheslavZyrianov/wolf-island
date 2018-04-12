import Field from './Field/Field';
import Animal from './Animals/Animal';
import Hunter from './Animals/Hunter';
import Victim from './Animals/Victim';
import Environment from './Environment/Environment';

export default class Game {

  constructor() {
    this.victimCount = 1;
    this.hunterCount = 1;

    this.start();
  }

  start() {

    // create field
    const field = new Field();

    // create environment
    const environment = new Environment(field);

    const animals = [];

    // create victims
    for (let i = 0; i < this.victimCount; i++) {
      const victim = new Victim();
      victim.setOnField(field);
      animals.push(victim);
    }

    // create hunters
    for (let i = 0; i < this.hunterCount; i++) {
      const hunter = new Hunter();
      hunter.setOnField(field);
      animals.push(hunter);
    }

    // place grass


    window.moveAnimals = () => {
      animals.forEach(animal=>{
        Animal.move(animal);
      });
      field.updateCells([...animals, ...field.grass]);

      // draw
      field.cells.forEach(cell=>{
        // console.log(cell.coordinates, cell.content);
      });

    }

  }

}
