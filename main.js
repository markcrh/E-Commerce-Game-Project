const map = document.getElementById("game");
const screen = document.getElementById("screen");
const player = new Player(50, 700);
const player2 = new Player(70, 373);
const enemy = new Enemy(200, 200);
const door = new Door();
const columnArr = [];
const enemyArr = [];
const arrowArr = []

function stage1() { 

  function addEnemy() {
    let enemy1 = new Enemy(225, 260);
    let enemy2 = new Enemy(350, 590);
    let enemy3 = new Enemy(555, 375);
    let enemy4 = new Enemy(885, 45);
    let enemy5 = new Enemy(1050, 700);

    enemyArr.push(enemy1, enemy2, enemy3, enemy4, enemy5);

    enemyArr.forEach(function (enemy) {
      enemy.insert();
    });
  }

  addEnemy();

  function addColumns() {
    let column1 = new Column(200, 130, 100, 100);
    let column2 = new Column(200, 348, 100, 100);
    let column3 = new Column(200, 565, 100, 100);
    let column4 = new Column(530, 240, 100, 100);
    let column5 = new Column(530, 460, 100, 100);
    let column6 = new Column(860, 130, 100, 100);
    let column7 = new Column(860, 348, 100, 100);
    let column8 = new Column(860, 565, 100, 100);

    columnArr.push(
      column1,
      column2,
      column3,
      column4,
      column5,
      column6,
      column7,
      column8
    );

    columnArr.forEach(function (column) {
      column.insert();
    });
  }

  addColumns()





  player.insert();
  let checkEnemyCollision = setInterval(player.collisionDamage, 100, player);

  let doorInterval = setInterval(function () {
    if (enemyArr.length == 0) {
      door.insert()
      clearInterval(doorInterval)
    };
  }, 10)

}

setTimeout(stage1, 1000)

/* function stage2(){
//Boss


function addColumns() {
  let column1 = new Column(200, 130, 100, 100);
  let column2 = new Column(200, 565, 100, 100);
  let column3 = new Column(860, 130, 100, 100);
  let column4 = new Column(860, 565, 100, 100);

  columnArr.push(
    column1,
    column2,
    column3,
    column4
  );

  columnArr.forEach(function (column) {
    column.insert();
  });
}

addColumns();
function spawnArrow() {
  const arrow = new Arrow();
  arrow.insert();
}

player2.insert();
let checkEnemyCollision = setInterval(player.collisionDamage, 100, player);

} */
//stage2()

function spawnArrow() {

  if (player.lastDirection == "up") {
    const arrow = new Arrow(player.posX, player.posY, 0, -1);
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

window.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      player.dirX = -1;
      player.lastDirection = "left";
      player.move();
      break;

    case "d":
      player.dirX = 1;
      player.lastDirection = "right";
      player.move();
      break;

    case "w":
      player.dirY = -1;
      player.lastDirection = "up";
      player.move();
      break;

    case "s":
      player.dirY = 1;
      player.lastDirection = "down";
      player.move();
      break;

    case " ":
      console.log(Arrow.arrowCounter)
      if (Arrow.arrowCounter <= 3) {
        spawnArrow();
      }
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
