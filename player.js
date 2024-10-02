class Player {
  constructor(posX, posY) {
    this.hp = 3;
    this.posX = posX;
    this.posY = posY;
    this.dirX = 0;
    this.dirY = 0;
    this.width = 50;
    this.height = 50;
    this.speed = 2;
    this.lastDirection = "";
    this.sprite = document.createElement("div");
    this.playerInterval = setInterval(this.move.bind(this), 10);
  }

  insert() {
    this.sprite.setAttribute("id", "player");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.posY + "px";
    this.sprite.style.left = this.posX + "px";
    map.appendChild(this.sprite);
  }

  remove() {
    map.removeChild(this.sprite);
    clearInterval(this.playerInterval);
  }

  move() {
    let newX = this.posX + this.speed * this.dirX;
    let newY = this.posY + this.speed * this.dirY;
    this.checkDoorCollision(newX, newY);

    if (
      newX >= 0 &&
      newX <= 1160 - this.width &&
      !this.checkColumnCollision(newX, newY) &&
      !this.checkEnemyCollision()
    ) {
      this.posX = newX;
      this.sprite.style.left = this.posX + "px";
      this.posX + player.width / 2 - this.width / 2 + "px";
    }

    if (
      newY >= 0 &&
      newY <= 795 - this.height &&
      !this.checkColumnCollision(newX, newY) &&
      !this.checkEnemyCollision()
    ) {
      this.posY = newY;
      this.sprite.style.top = this.posY + "px";
    }
  }

  checkColumnCollision(posX, posY) {
    let self = this;
    let columnCollision = columnArr.some(function (column) {
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
  collisionDamage(player) {
    let enemyCollision = enemyArr.some(function (enemy) {
      if (
        player.posX <= enemy.posX + enemy.width &&
        player.posY <= enemy.posY + enemy.height &&
        player.posX + player.width >= enemy.posX &&
        player.posY + player.height >= enemy.posY
      ) {
        player.hp -= 1;
        if (player.hp == 0) {
          player.remove();
        }
        return true;
      } else {
        return false;
      }
    });
    return enemyCollision;
  }

  checkEnemyCollision() {
    let self = this;
    let enemyCollision = enemyArr.some(function (enemy) {
      if (
        self.posX <= enemy.posX + enemy.width &&
        self.posY <= enemy.posY + enemy.height &&
        self.posX + self.width >= enemy.posX &&
        self.posY + self.height >= enemy.posY
      ) {
        return true;
      } else {
        return false;
      }
    });
    return enemyCollision;
  }

  
  checkDoorCollision(posX, posY) {
    if (
      this.posX <= door.posX + door.width &&
      this.posY <= door.posY + door.height &&
      this.posX + this.width >= door.posX &&
      this.posY + this.height >= door.posY
    ) {
      window.alert("hey");
      return true;
    }
  }
}
