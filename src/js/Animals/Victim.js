import Animal from './Animal';

export default class Victim extends Animal{

    constructor(){
        super();
        this.type = 'victim';
        this.health = 5;
        this.speed = 1;

        this.eat();
    }

    eat(){
      super.feed();
      // console.log('Victim', this);
    }

}
