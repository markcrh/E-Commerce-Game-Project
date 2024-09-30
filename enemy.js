class Enemy {
  constructor(posX, posY) {
    this.hp = 3;
    this.posX = posX;
    this.posY = posY;
    this.dirX = 1;
    this.dirY = 1;
    this.width = 50;
    this.height = 50;
    this.speed = 3;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.moveX.bind(this), 10);
  }

  insert() {
    this.sprite.setAttribute("id", "enemy");
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