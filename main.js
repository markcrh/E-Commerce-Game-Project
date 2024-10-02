const map = document.getElementById("game");
const screen = document.getElementById("screen")
const player = new Player (50, 700);
const enemy = new Enemy (200, 200);
const door = new Door();


const columnArr = [];
const enemyArr = [];
const arrowArr = [];


function addEnemy() {
  let enemy1 = new Enemy(100, 100)
  let enemy2 = new Enemy(300, 120);

  enemyArr.push(enemy1, enemy2)

  enemyArr.forEach(function (enemy) {
    enemy.insert()
  })
}

function addColumns() {

    let column1 = new Column(200, 130, 100, 100);
    let column2 = new Column(200, 348, 100, 100);
    let column3 = new Column(200, 565, 100, 100);
    let column4 = new Column(530, 240, 100, 100);
    let column5 = new Column(530, 460, 100, 100);
    let column6 = new Column(860, 130, 100, 100);
    let column7 = new Column(860, 348, 100, 100);
    let column8 = new Column(860, 565, 100, 100);

    columnArr.push(column1, column2, column3, column4, column5, column6, column7, column8)

    columnArr.forEach(function(column){
        column.insert()
    })

}

function spawnArrow () {

  if (player.lastDirection == "up"){
    const arrow = new Arrow(player.posX, player.posY, 0, -1 );
    arrowArr.push(arrow.insert())
  } else if (player.lastDirection == "down") {
    const arrow = new Arrow(player.posX, player.posY, 0, 1);
    arrowArr.push(arrow.insert());
  } else if (player.lastDirection == "right") {
    const arrow = new Arrow(player.posX, player.posY, 1, 0);
    arrowArr.push(arrow.insert());
  } else if (player.lastDirection == "left") {
    const arrow = new Arrow(player.posX, player.posY, -1, 0);
    arrowArr.push(arrow.insert());
  }
}

addEnemy()
player.insert();
let checkEnemyCollision = setInterval(player.collisionDamage, 100, player)
addColumns();
door.insert();


window.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      player.dirX = -1;
      player.lastDirection = "left"
      player.move();
      break;

    case "d":
      player.dirX = 1;
      player.lastDirection = "right"
      player.move();                                                                                                                                                                                                                                                                                                                                                                     
      break;

    case "w":
      player.dirY = -1;
      player.lastDirection = "up"
      player.move();
      break;

    case "s":
      player.dirY = 1;
      player.lastDirection = "down"
      player.move();
      break;

    case " ":

      spawnArrow()
      break;
  }
});

window.addEventListener("keyup", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      player.dirX = 0;
      break;

    case "d":
      player.dirX = 0;
      break;

    case "w":
      player.dirY = 0;
      break;

    case "s":
      player.dirY = 0;
      break;

  }
});

