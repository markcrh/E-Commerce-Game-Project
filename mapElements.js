class Column {
  constructor(posX, posY, width, height) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.sprite = document.createElement("div");
  }
  insert() {
    this.sprite.setAttribute("class", "column");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.posY + "px";
    this.sprite.style.left = this.posX + "px";
    map.appendChild(this.sprite);
  }
  remove(){
    map.removeChild(this.sprite)
  }


}

class Door {
  constructor() {
    this.posX = 1230
    this.posY = 432.5
    this.width = 70;
    this.height = 70;
    this.sprite = document.createElement("div");
  }
  insert() {
    this.sprite.setAttribute("id", "door");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.posY + "px";
    this.sprite.style.left = this.posX + "px";
    screen.appendChild(this.sprite);
  }
  remove(){
    screen.removeChild(this.sprite)

  }
}

let soundStage1 = new Audio("/songs/last_guardian.mp3");
let soundStage2 = new Audio("/songs/n64_zelda_ganondorf.mp3");
let soundIntro = new Audio("/songs/ocarina_of_time.mp3");
