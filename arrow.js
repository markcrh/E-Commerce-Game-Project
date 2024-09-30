class Arrow {
    constructor(){
        this.height = 20;
        this.width = 5;
        //this.posX = player.posX + player.width / 2 - this.width / 2 
        this.posY = player.posY
        this.directionY = -1
        this.speed = 3;
        this.sprite = document.createElement("div");
    }

    insert() {
        this.sprite.setAttribute("class", "arrow");
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        this.sprite.style.top = this.posY + "px";
        //this.sprite.style.left = this.posX + "px";
        map.appendChild(this.sprite);
    }

}