class Arrow {
    static arrowCounter = 0;
    constructor(posX, posY, dirX, dirY) {
        this.height = 30;
        this.width = 20;
        this.posY = posY;
        this.posX = posX;
        this.dirY = dirY;
        this.dirX = dirX;
        this.speed = 10;
        this.sprite = document.createElement("div");
        this.interval = setInterval(this.move.bind(this), 20)
        Arrow.arrowCounter ++;
    }

    insert() {
        this.sprite.setAttribute("class", "arrow");

        if (player.lastDirection == "up") {
            this.sprite.style.height = 30 + "px";
            this.sprite.style.width = 20 + "px";
            this.posX = player.posX + player.width / 2 - this.width / 2
            this.posY = player.posY
            this.sprite.style.backgroundImage =
              "url('./media/img/arrow-up.png')";

        } else if (player.lastDirection == "down"){
            this.sprite.style.height = 30 + "px";
            this.sprite.style.width = 20 + "px";
            this.posY = player.posY + player.height - this.height
            this.posX = player.posX + player.width / 2 -this.width / 2
            this.sprite.style.backgroundImage =
              "url('./media/img/arrow-down.png')";
        }else if (player.lastDirection == "right") {
            this.sprite.style.height = 20 + "px";
            this.sprite.style.width = 30 + "px";
            this.posX = player.posX + player.width / 2 + this.width
            this.posY = player.posY + player.height / 2 - this.width / 2
            this.sprite.style.backgroundImage = "url('./media/img/arrow-right.png')";
        } else if (player.lastDirection == "left") {
            this.sprite.style.height = 20 + "px";
            this.sprite.style.width = 30 + "px";
            this.posX = player.posX 
            this.posY = player.posY + player.height / 2 - this.width / 2
            this.sprite.style.backgroundImage =
              "url('./media/img/arrow-left.png')";
        }

        this.sprite.style.left = this.posX + "px";
        this.sprite.style.top = this.posY + "px";
        map.appendChild(this.sprite);
    }

    remove() {
        map.removeChild(this.sprite)
        arrowArr.shift()
        clearInterval(this.interval)
        Arrow.arrowCounter--
    }

    move() {
        let newX = this.posX + this.speed * this.dirX;
        let newY = this.posY + this.speed * this.dirY;

        if (newY >= 0 && newY <= 795 - this.height) {
            this.posY = newY;
            this.sprite.style.top = this.posY + "px";
        } else {
            this.remove()
        }
        if (newX >= 0 && newX <= 1160 - this.width) {
            this.posX = newX;
            this.sprite.style.left = this.posX + "px";
        } else {
            this.remove()
        }
        if (this.checkColumnCollision(newX, newY)) {
            this.remove()
        }
        if (this.checkEnemyCollision(newX, newY)) {
            this.remove()
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

    checkEnemyCollision(posX, posY) {
        let self = this;
        console.log('in arrow')
        let enemyCollision = enemyArr.forEach(function (enemy, index) {
            if (
                posX <= enemy.posX + enemy.width &&
                posY <= enemy.posY + enemy.height &&
                posX + self.width >= enemy.posX &&
                posY + self.height >= enemy.posY
            ) {
                enemy.hp --;
                self.remove()
                if (enemy.hp <= 0) {
                    enemy.remove()
                    enemyArr.splice(index, 1)
                    console.log(enemyArr.length)
                    return true;
                }
            } else {
                return false;
            }
        })
        return enemyCollision;
    }
}



