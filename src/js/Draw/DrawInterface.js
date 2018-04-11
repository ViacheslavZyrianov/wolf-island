export default class DrawInterface {
  constructor() {
    this.makeMovebtn();
  }

  makeMovebtn(){
    const makeMoveBtn = document.createElement('BUTTON');
    makeMoveBtn.className = 'btn btn-blue btn-make-move';
    makeMoveBtn.innerHTML = 'Make move';
    document.querySelector('.wolf-island').appendChild(makeMoveBtn);
  }

  createButton(){

  }

}
