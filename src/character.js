import React from 'react'

class Character {
  constructor(hp, posX, posY, dirX, dirY, width, height, speed) {
    this.hp = hp;
    this.posX = posX;
    this.posY = posY;
    this.dirX = dirX;
    this.dirY = dirY;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.move.bind(this), 10);
  }
  insert(idName) {
    this.sprite.setAttribute('id', idName)
    this.sprite.style.width = this.width + "px"
    this.sprite.style.height = this.height + "px"
    this.sprite.style.top = this.posY + "px"
    this.sprite.style.left = this.posX + "px"
    game.appendChild(this.sprite)
  }
  remove() {
    game.removeChild(this.sprite)
    this.hp = 0
    clearInterval(this.interval)
  }
  move() {
    let newX = this.posX + this.speed * this.dirX
    let newY = this.posY + this.speed * this.dirY;
  }
  checkColumnCollision(posX, posY) {
    if (
      this.posX <= column.posX + column.width &&
      this.posY <= column.posY + column.height &&
      this.posX + width >= column.posX &&
      this.posY + height >= column.posY
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default Character