import Animal from './Animal';

export default class Hunter extends Animal{

    constructor(){
        super();
        this.type = 'hunter';
        this.health = 10;
        this.speed = 1;

        this.hunt();
    }

    hunt(){
      super.feed();
      // console.log('Hunter', this);
    }

}
