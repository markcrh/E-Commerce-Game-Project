class Enemy {
  constructor(posX, posY) {
    this.hp = 1;
    this.posX = posX;
    this.posY = posY;
    this.dirX = 0;
    this.dirY = 0;
    this.width = 60;
    this.height = 60;
    this.speed = 4;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.move.bind(this), 10);
    this.randomMovement = setInterval(this.randomDir.bind(this), 500);
  }

  insert() {
    this.sprite.setAttribute("id", "enemy");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.posY + "px";
    this.sprite.style.left = this.posX + "px";
    map.appendChild(this.sprite);
  }

  remove() {
    if (map.contains(this.sprite)){
    map.removeChild(this.sprite)
    clearInterval(this.interval)
    }
  }

  move() {
    let newX = this.posX + this.speed * this.dirX;
    let newY = this.posY + this.speed * this.dirY;
    
    if (
      newX >= 0 &&
      newX <= 1160 - this.width &&
      !this.checkColumnCollision(newX, newY) &&
      !this.checkPlayerCollision(newX, newY)
    ) {
      this.posX = newX;
      this.sprite.style.left = this.posX + "px";
    } else {
      this.randomDir();
    }

    if (
      newY >= 0 &&
      newY <= 795 - this.height &&
      !this.checkColumnCollision(newX, newY) &&
      !this.checkPlayerCollision(newX, newY)
    ) {
      this.posY = newY;
      this.sprite.style.top = this.posY + "px";
    } else {
      this.randomDir();
    }
  }

  randomDir() {
    let random = Math.floor(Math.random() * 4);
    if (random === 0) {
      this.dirX = 1;
      this.dirY = 0;
      this.sprite.style.backgroundImage = "url('./media/img/enemy-right.png')";
    } else if (random === 1) {
      this.dirX = -1;
      this.dirY = 0;
      this.sprite.style.backgroundImage = "url('./media/img/enemy-left.png')";
    } else if (random === 2) {
      this.dirX = 0;
      this.dirY = 1;
      this.sprite.style.backgroundImage = "url('./media/img/enemy-down.png')";
    } else {
      this.dirX = 0;
      this.dirY = -1;
      this.sprite.style.backgroundImage = "url('./media/img/enemy-up.png')";
    }
  }

  checkColumnCollision(posX, posY) {
    let self = this;
    let columnCollision = columnArr.some(function (column) {
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
    });
    return columnCollision;
  }
  checkPlayerCollision(posX, posY) {
    let self = this;
    if (
      posX < player.posX + player.width &&
      posY < player.posY + player.height &&
      posX + self.width > player.posX &&
      posY + self.height > player.posY
    ) {
      return true;
    } else {
      return false;
    }
  }
}
