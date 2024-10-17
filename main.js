const map = document.getElementById("game");
const screen = document.getElementById("screen");
const gameOver = document.getElementById("gameOver")
let isGameOver = false;
let player = new Player(50, 700);
const enemy = new Enemy(200, 200);
let boss
const door = new Door();
let columnArr = [];
let columnArrStage2 = []
const enemyArr = [];
const arrowArr = [];
const fireballArr = [];
let fireballShooting

document.addEventListener('DOMContentLoaded', function(){
  soundIntro.play()
  soundIntro.loop = true
})

let flag = false

function createButton(text){
  const button = document.createElement("button")
  button.setAttribute("id", "button")
  button.innerText = text
  map.appendChild(button)
}

const start = createButton("START")


function stage1() {
  door.insert();
  flag = true

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

  //addEnemy();

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

  addColumns();



  player.insert();
  let checkEnemyCollision = setInterval(player.collisionDamage, 100, player);

  
}

function stage2() {

  door.remove()
  player = new Player(70, 373);
  player.stage = 2
  boss = new Boss(530, 323);
  boss.insert();

  function spawnFireballs() {
    const fireball = new Fireball(boss.posX, boss.posY);
    fireballArr.push(fireball.insert());
  }

  fireballShooting = setInterval(spawnFireballs, 500);

  function addColumns() {
    let column1 = new Column(200, 130, 100, 100);
    let column2 = new Column(200, 565, 100, 100);
    let column3 = new Column(860, 130, 100, 100);
    let column4 = new Column(860, 565, 100, 100);
    columnArrStage2.push(column1, column2, column3, column4);

    columnArrStage2.forEach(function (column) {
      column.insert();
    });
  }


  addColumns();

  player.insert(70, 373);
  const collisionDamage = setInterval(player.collisionDamage, 100, player);

  function checkLiving() {
    if (player.hp > 0) {
    } else {
      clearInterval(fireballShooting);
      clearInterval(boss.interval);
      clearInterval(collisionDamage);
    }
  }

  if (boss.hp <= 0){
    console.log('win')
  }
  setInterval(checkLiving, 5);

  soundStage2.play();
  soundStage2.loop = true;
}

function spawnArrow() {

    if (player.lastDirection == "up") {
      const arrow = new Arrow(player.posX, player.posY, 0, -1);
      arrowArr.push(arrow.insert());
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
      player.sprite.style.backgroundImage =
        "url('./media/img/player-left.png')";
      player.move();
      break;

    case "d":
      player.dirX = 1;
      player.lastDirection = "right";
      player.sprite.style.backgroundImage =
        "url('./media/img/player-right.png')";
      player.move();
      break;

    case "w":
      player.dirY = -1;
      player.lastDirection = "up";
      player.sprite.style.backgroundImage =
        "url('./media/img/player-up.png')";
      player.move();
      break;

    case "s":
      player.dirY = 1;
      player.lastDirection = "down";
      player.sprite.style.backgroundImage =
        "url('./media/img/player-down.png')";
      player.move();
      break;

    case " ":
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


  button.addEventListener('click', function(){
    map.removeChild(button)
    soundIntro.pause()
    soundStage1.play()
    soundStage1.loop = true
    stage1()
  })
