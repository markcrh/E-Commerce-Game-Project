class Boss {
  constructor(posX, posY) {
    this.hp = 3;
    this.posX = posX;
    this.posY = posY;
    this.dirX = 0;
    this.dirY = 0;
    this.width = 125;
    this.height = 125;
    this.speed = 5 ;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.move.bind(this), 10);
    this.randomMovement = setInterval(this.randomDir.bind(this), 500);
  }

  insert() {
    this.sprite.setAttribute("id", "boss");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.posY + "px";
    this.sprite.style.left = this.posX + "px";
    map.appendChild(this.sprite);
  }
  remove() {
    map.removeChild(this.sprite)
    clearInterval(this.interval)
    fireballArr.forEach(function(fireball){
      fireball.remove()
    })
    clearInterval(fireballShooting);
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
      this.sprite.style.backgroundImage =
        "url('./media/img/boss-right.png')";
    } else if (random === 1) {
      this.dirX = -1;
      this.dirY = 0;
      this.sprite.style.backgroundImage =
        "url('./media/img/boss-left.png')";
    } else if (random === 2) {
      this.dirX = 0;
      this.dirY = 1;
    } else {
      this.dirX = 0;
      this.dirY = -1;
    }
  }

  checkColumnCollision(posX, posY) {
    let self = this;
    let columnCollision = columnArrStage2.some(function (column) {
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

  /* checkOtherEnemiesCollision() {
    let self = this
    let otherEnemies = enemyArr.filter(enemy => enemy !== this)
    let collisions = otherEnemies.some(function (thisEnemy) {
      if (
        self.posX <= thisEnemy.posX + thisEnemy.width &&
        self.posY <= thisEnemy.posY + thisEnemy.height &&
        self.posX + self.width >= thisEnemy.posX &&
        self.posY + self.height >= thisEnemy.posY
      ) {

      self.randomDir()
        return true;
      } else {
        return false;
      }
    });
    return collisions;
  } */
}
