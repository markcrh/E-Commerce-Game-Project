const map = document.getElementById("game");
const player = new Player (150, 150);
const enemy = new Enemy (200, 200);
const arrow = new Arrow(150, 150);



let column 

const columnArr = []

function addColumns() {

    let column1 = new Column(200, 200, 100, 100);
    let column2 = new Column(400, 400, 100, 100);
    let column3 = new Column(600, 600, 100, 100);
    let column4 = new Column(800, 500, 100, 100);

    columnArr.push(column1, column2, column3, column4)

    columnArr.forEach(function(column){
        column.insert()
    })

}

 player.insert()
 addColumns()
//enemy.insert(); 
//column.insert();
player.insert();
enemy.insert();
arrow.insert();


window.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      player.dirX = -1;
      player.move();
      break;

    case "d":
      player.dirX = 1;
      player.moveX();                                                                                                                                                                                                                                                                                                                                                                     
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

