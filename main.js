const map = document.getElementById("game");
const player = new Player (100, 100);



    setTimeout(() => {
        player.insert();
    }, 5000)



window.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      player.dirX = -1;
      player.moveX();
      break;

    case "d":
      player.dirX = 1;
      player.moveX();
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

