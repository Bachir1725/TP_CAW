

import EX3 from "./EX03.js";
import { EX1 } from "./EXO1.js";
export{
  endGame,islost,btn,maze,end,iswinner,passStart,example
}
const maze = document.querySelectorAll(".boundary");
const example = document.querySelector(".example");
const end = document.querySelector("#end");
const start = document.querySelector("#start");
const btn = document.querySelector(".example");
const body = document.querySelector("body");

var islost = false;
var iswinner = false;
var passStart = false;
var endGame = false;

if (islost || iswinner) {
  
}else{
  start.addEventListener("mouseover", function () {
    if (iswinner == false && islost == false && endGame == false) {
      passStart = true;
    }
    if (passStart) {
      //  start EX1
  EX1();
  // EX3;
  EX3();
    }
  });
}
