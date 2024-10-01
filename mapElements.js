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
}

class Door {
  constructor(){
    this.posX = 1229;
    this.posY = 428;
    this.width = 71;
    this.height = 80;
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
}

