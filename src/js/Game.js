import Field from './Field/Field';
import Victim from './Animals/Victim';
import Hunter from './Animals/Hunter';
import DrawAnimals from './Draw/DrawAnimals';
import DrawField from './Draw/DrawField';
import Environment from './Environment/Environment';

export default class Game {

    constructor() {
        this.victimCount = 2;
        this.hunterCount = 2;
        this.animals = [];
        this.start();
    }

    start() {

        const field = new Field();

        new DrawField(field.size);
        new Environment(field);

        // create victims
        for (let i = 0; i < this.victimCount; i++) {
            const victim = new Victim();
            this.animals.push(victim);
            victim.setField(field);
        }

        // create hunters
        for (let i = 0; i < this.hunterCount; i++) {
            const hunter = new Hunter();
            this.animals.push(hunter);
            hunter.setField(field);
        }

        new DrawAnimals(this.animals);

        const that = this;
        setInterval(()=>{
            that.animals.forEach(animal=>{
                animal.move();
            });
            new DrawAnimals(this.animals);
        }, 500)

    }

}