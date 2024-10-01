const map = document.getElementById("game");
const player = new Player (350, 350);
const enemy = new Enemy (100, 200);
const arrow = new Arrow(150, 150);

const columnArr = []
const enemyArr = []

function addColumns() {

    let column1 = new Column(200, 200, 100, 100);
    let column2 = new Column(400, 150, 100, 100);
    //let column3 = new Column(600, 600, 100, 100);
    //let column4 = new Column(800, 500, 100, 100);

    columnArr.push(column1, column2)

    columnArr.forEach(function(column){
        column.insert()
    })
}

function addEnemy() {
  let enemy1 = new Enemy (100, 100)
  let enemy2 = new Enemy(250, 120);

  enemyArr.push(enemy1, enemy2)

  enemyArr.forEach(function(enemy){
    enemy.insert()
  })
}


addColumns()
addEnemy()
player.insert();

let checkEnemyCollisionInterval = setInterval(player.collisionDamage, 100, player)


window.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      player.dirX = -1;
      player.move();
      break;

    case "d":
      player.dirX = 1;
      player.move();                                                                                                                                                                                                                                                                                                                                                                     
      break;

    case "w":
      player.dirY = -1;
      player.move();
      break;

    case "s":
      player.dirY = 1;
      player.move();
      break;

    /* case " ":
      spawnBullets();
      break; */
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
      player.dirY =0;
      break;

    /* case " ":
      spawnBullets();
      break; */
  }
});

