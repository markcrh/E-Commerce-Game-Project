class Fireball {
  constructor(posX, posY) {
    this.posY = posY;
    this.posX = posX;
    this.dirX = 0;
    this.dirY = 0;
    this.width = 60;
    this.height = 60;
    this.speed = 10;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.move.bind(this), 20);
  }

  insert() {
    this.sprite.setAttribute("class", "fireball");
    this.sprite.style.height = this.height + "px";
    this.sprite.style.width = this.width + "px";
    this.posX = boss.posX + boss.width / 2 - this.width / 2;
    this.posY = boss.posY + boss.height / 2 - this.height / 2;
    this.randomDir();
    this.sprite.style.left = this.posX + "px";
    this.sprite.style.top = this.posY + "px";
    map.appendChild(this.sprite);
  }

  remove() {
    map.removeChild(this.sprite);
    //fireballArr.shift();
    clearInterval(this.interval);
  }

  move() {
    let newX = this.posX + this.speed * this.dirX;
    let newY = this.posY + this.speed * this.dirY;

    if (newY >= 0 && newY <= 795 - this.height) {
      this.posY = newY;
      this.sprite.style.top = this.posY + "px";
    } else {
      this.remove();
    }
    if (newX >= 0 && newX <= 1160 - this.width) {
      this.posX = newX;
      this.sprite.style.left = this.posX + "px";
    } else {
      this.remove();
    }
    if (this.checkColumnCollision(newX, newY)) {
      this.remove();
    }
    if (this.checkPlayerCollision(newX, newY)) {
      this.remove();
      soundStage2.pause()
      player.remove()
    }
  }
  randomDir() {
    let random = Math.floor(Math.random() * 4);
    if (random === 0) {
      this.dirX = 1;
      this.dirY = 0;
      this.sprite.style.backgroundImage = "url('./media/img/fireball-right.png')";
      boss.sprite.style.backgroundImage = "url('./media/img/boss-right.png')";
    } else if (random === 1) {
      this.dirX = -1;
      this.dirY = 0;
      this.sprite.style.backgroundImage =
        "url('./media/img/fireball-left.png')";
      boss.sprite.style.backgroundImage = "url('./media/img/boss-left.png')";
    } else if (random === 2) {
      this.dirX = 0;
      this.dirY = 1;
      this.sprite.style.backgroundImage =
        "url('./media/img/fireball-down.png')";
    } else {
      this.dirX = 0;
      this.dirY = -1;
      this.sprite.style.backgroundImage =
        "url('./media/img/fireball-up.png')";
    }
  }

  checkColumnCollision(posX, posY) {
    let self = this;
    let columnCollision = columnArrStage2.some(function (column) {
      if (
        posX <= column.posX + column.width &&
        posY <= column.posY + column.height &&
        posX + self.width >= column.posX &&
        posY + self.height >= column.posY
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
