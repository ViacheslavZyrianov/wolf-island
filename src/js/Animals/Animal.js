import {random} from '../random';

export default class Animal {

    constructor() {
        this.type = null;
        this._isAlive = true;
        this.health = 0;
        this.position = {
            x: null,
            y: null
        };
        this._sex = random(0, 1);
        this.speed = null;
        this.field = null;

    }

    get sex() {
        return this._sex ? 'male' : 'female';
    }

    get isAlive() {
        return this._isAlive ? 'alive' : 'dead';
    }

    setField(field, x=null, y=null){
        this.field = field;
        if(x===null){
            x = random(0,field.size-1);
        }
        if(y===null){
            y = random(0,field.size-1);
        }
        this.setPosition(x,y);
    }

    setPosition(x, y){
        this.position.x = x;
        this.position.y = y;
    }

    move(){
        const moves = this.field.getAvailableMoves(this.position.x, this.position.y);
        const movesLength = moves.length-1;
        this.position = moves[random(0,movesLength)];
    }

}