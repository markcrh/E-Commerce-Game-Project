class Player {
  constructor(posX, posY) {
    this.hp = 3;
    this.posX = posX;
    this.posY = posY;
    this.dirX = 0;
    this.dirY = 0;
    this.width = 50;
    this.height = 50;
    this.speed = 3;
    this.sprite = document.createElement("div");
  }

  insert() {
    this.sprite.setAttribute("id", "player");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.posY + "px";
    this.sprite.style.left = this.posX + "px";
    map.appendChild(this.sprite);
  }

  moveX() {
    let newX = this.posX + this.speed * this.dirX;

    if (newX >= 0 && newX <= 1300 - this.width) {
      this.posX = newX;
      this.sprite.style.left = this.posX + "px";
    }
  }
  moveY() {
    let newY = this.posY + this.speed * this.dirY;

    if (newY >= 0 && newY <= 935 - this.height) {
      this.posY = newY;
      this.sprite.style.top = this.posY + "px";
    }
  }
}