const map = document.getElementById("game");
const player = new Player (100, 100);
const enemy = new Enemy (200, 200);
const column1 = new Column (200, 200, 100, 100);

/* player.insert();
enemy.insert(); */
column1.insert();


window.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      player.dirX = -1;
      player.moveX();
      break;

    case "d":
      player.dirX = 1;
      break;

    case "w":
      player.dirY = -1;
      player.moveY();
      break;

    case "s":
      player.dirY = 1;
      player.moveY();
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

