import Animal from './Animal';

export default class Victim extends Animal{

    constructor(){
        super();
        this.type = 'victim';
        this.health = 70;
        this.speed = 1;
    }

    makeMove(){
        super.makeMove();
    }

}