import {
  random
} from '../random';

export default class Animal {

  constructor() {
    this.type = null;
    this.isAlive = true;
    this.health = null;
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

  setOnField(field, x = null, y = null) {
    this.field = field;
    if (x === null) {
      x = random(0, field.size - 1);
    }
    if (y === null) {
      y = random(0, field.size - 1);
    }
    this.setPosition(x, y);
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  static move(animal) {
    animal.run();
    animal.feed();
    animal.starve();
  }

  run() {
    if (this.isAlive) {
      const routes = this.field.getAvailableMoves(this.position.x, this.position.y);
      this.position = routes[random(0, routes.length - 1)];
    }
  }

  starve() {
    this.health > 1 ? this.health -= 1 : this.isAlive = false;
  }

  feed() {

  }

}
