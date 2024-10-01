class Arrow {
    constructor() {
        this.height = 20;
        this.width = 5;
        this.posY = 0;
        this.posX = 0;
        this.speed = 3;
        this.sprite = document.createElement("div");
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

}



