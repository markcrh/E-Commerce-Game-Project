class Player {
  constructor(posX, posY) {
    this.hp = 3;
    this.posX = posX;
    this.posY = posY;
    this.dirX = 0;
    this.dirY = 0;
    this.width = 40;
    this.height = 40;
    this.speed = 2;
    this.stage = 1
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
    this.hp = 0
    clearInterval(this.playerInterval);
  }

  move() {
    let newX = this.posX + this.speed * this.dirX;
    let newY = this.posY + this.speed * this.dirY;
    
    if (enemyArr.length == 0 && flag == true){
      
      door.sprite.style.backgroundImage = "url('./media/img/door-open.png')";
      if (this.checkDoorCollision()){
        function deleteColums() {
          columnArr.forEach(function (column, index) {
            column.remove()
          })
          columnArr = []

        }

        deleteColums()

        this.remove()
        soundStage1.pause()
        stage2()
      }

    }

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

    if (player.stage == 2){
      this.checkBossCollision
    }
  }

  checkColumnCollision(posX, posY) {

    let columns
    if(this.stage === 1){
      columns = [...columnArr]
    } else {
      columns = [...columnArrStage2]
    }

    let self = this;
    let columnCollision = columns.some(function (column) {
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
        if (player.hp <= 0) {
          enemyArr.forEach(function (enemy){
            clearInterval(enemy.interval)
            enemy.remove()
          })          
            
            soundStage1.pause()
            player.remove();
            player.gameOver()

          
        }
        return true;
      } else {
        return false;
      }
    });
    return enemyCollision;
  }

  gameOver(){
    createButton("RESTART")
    button.addEventListener('click', function () {
      location.reload()
    })

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

  checkBossCollision(){
    if (
      this.posX <= boss.posX + boss.width &&
      this.posY <= boss.posY + boss.height &&
      this.posX + this.width >= boss.posX &&
      this.posY + this.height >= boss.posY
    ) {
      player.gameOver()

        soundStage2.pause()
        player.remove();
        return true;
      
    } else {
      return false;
    }
  }

  
  checkDoorCollision() {
    if (
      this.posX + this.width >= 1155 && 
      this.posY >= 360 && 
      this.posY <= 420
    ) {
      return true;
      
    }
  }
}
