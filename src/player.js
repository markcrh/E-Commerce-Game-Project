import React from "react";
import Character from "./character";

class Player extends Character {
  constructor(){
    super(3, 50, 700, 0, 0, 50, 50, 3)
  }
}

export default Player