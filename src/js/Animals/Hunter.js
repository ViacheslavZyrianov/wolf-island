import Animal from './Animal';

export default class Hunter extends Animal{

    constructor(){
        super();
        this.type = 'hunter';
        this.health = 100;
        this.speed = 2;
    }

}