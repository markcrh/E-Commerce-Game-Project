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
    this.posX = 1155;
    this.posY = 348;
    this.width = 71;
    this.height = 100;
    this.sprite = document.createElement("div");
  }
  insert() {
    this.sprite.setAttribute("id", "door");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.posY + "px";
    this.sprite.style.left = this.posX + "px";
    map.appendChild(this.sprite);
  }
}

