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
    setInterval(this.move.bind(this), 10);
  }

  insert() {
    this.sprite.setAttribute("id", "player");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.posY + "px";
    this.sprite.style.left = this.posX + "px";
    map.appendChild(this.sprite);
  }

  move() {
    let newX = this.posX + this.speed * this.dirX;
    let newY = this.posY + this.speed * this.dirY;
    if (newX >= 0 && newX <= 1300 - this.width && !this.checkCollision(newX, newY)) {
      this.posX = newX;
      this.sprite.style.left = this.posX + "px";
      arrow.sprite.style.left = this.posX + player.width /  2 - this.width / 2 + "px";
    }

    if (newY >= 0 && newY <= 935 - this.height && !this.checkCollision(newX, newY)) {
      this.posY = newY;
      this.sprite.style.top = this.posY + "px";
    }
  }

  checkCollision(posX, posY) {
    let self = this
    let collision = columnArr.some(function(column){
        if (
      posX < column.posX + column.width &&
      posY < column.posY + column.height &&
      posX + self.width > column.posX &&
      posY + self.height > column.posY
    ) {
      return true;
    } else {
      return false;
    }
    })

    return collision
    
  }

  /* checkCollision(posX, posY) {
    if (
      posX < column1.posX + column1.width &&
      this.posY < column1.posY + column1.height &&
      posX + this.width > column1.posX &&
      this.posY + this.height > column1.posY
    ) {
      return true;
    } else {
      return false;
    }
  } */
}
