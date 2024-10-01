class Arrow {
    constructor(posX, posY, dirX, dirY) {
        this.height = 20;
        this.width = 5;
        this.posY = posY;
        this.posX = posX;
        this.dirY = dirY;
        this.dirX = dirX;
        this.speed = 10;
        this.sprite = document.createElement("div");
        this.interval = setInterval(this.move.bind(this), 20)
    }

    insert() {
        this.sprite.setAttribute("class", "arrow");
        
        if (player.lastDirection == "up") {
            this.sprite.style.height = 20 + "px";
            this.sprite.style.width = 5 + "px";
            this.posX = player.posX + player.width / 2 - this.width / 2
            this.posY = player.posY
        } else if (player.lastDirection == "down"){
            this.sprite.style.height = 20 + "px";
            this.sprite.style.width = 5 + "px";
            this.posY = player.posY + player.height - this.height
            this.posX = player.posX + player.width / 2 -this.width / 2
        }else if (player.lastDirection == "right") {
            this.sprite.style.height = 5 + "px";
            this.sprite.style.width = 20 + "px";
            this.posX = player.posX + player.width / 2 + this.width
            this.posY = player.posY + player.height / 2 - this.width / 2
        } else if (player.lastDirection == "left") {
            this.sprite.style.height = 5 + "px";
            this.sprite.style.width = 20 + "px";
            this.posX = player.posX 
            this.posY = player.posY + player.height / 2 - this.width / 2
        }
       
        this.sprite.style.left = this.posX + "px";
        this.sprite.style.top = this.posY + "px";
        map.appendChild(this.sprite);
    }

    remove() {
        map.removeChild(this.sprite)
        clearInterval(this.interval)
    }

    move() {
        let newX = this.posX + this.speed * this.dirX;
        let newY = this.posY + this.speed * this.dirY;
        
        if (newY >= 0 && newY <= 795 - this.height){
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
        if (this.checkColumnCollision(newX, newY)){
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

   /*  checkEnemyCollision() {
        let self = this;
        let enemyCollision = enemyArr.some(function (enemy) {
            if (
                self.posX <= enemy.posX + enemy.width &&
                self.posY <= enemy.posY + enemy.height &&
                self.posX + self.width >= enemy.posX &&
                self.posY + self.height >= enemy.posY
            ) {
                
                self.remove()
                return true;
            } else {
                return false;
            }
        });
        return enemyCollision;
    } */
}



