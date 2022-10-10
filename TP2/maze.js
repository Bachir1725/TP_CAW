"use strict";
const maze = document.querySelectorAll(".boundary");
const p = document.querySelectorAll("p");
const example = document.querySelector(".example");
const end = document.querySelector("#end");
const start = document.querySelector("#start");
const btn = document.querySelector(".example");
const stat = document.querySelector("#status");
const body = document.querySelector("body");
var islost = false;
var iswinner = false;
var passStart = false;
var endGame = false;
var startX;

start.addEventListener("mouseover", function () {
  if (iswinner == false && islost == false && endGame == false) {
    passStart = true;
  }
  if (passStart) {
    
maze.forEach((bo) => {
  // EX1 + EX2
  bo.addEventListener("mouseenter", function () {
    if (endGame == false) {
      bo.style.backgroundColor = "red";
      setTimeout(() => {
        maze.forEach(element => {
          element.style.backgroundColor = "red";
          btn.style.backgroundColor = "";
        });
       
      }, 1000);
      islost = true;
      endGame = true;
      stat.textContent = "LOST !!";
    }
  });
});
//  EX3
end.addEventListener("mouseover", function () {
  if (
    iswinner == false &&
    islost == false &&
    passStart == true &&
    endGame == false
  ) {
    //  EX 6
    stat.textContent = "WIN !!";
    endGame = true;
  }
  iswinner = true;

});
 // EX 4
start.addEventListener("click",function(){
  window.location.reload();
})

  }
});
// EX 7
body.addEventListener("mouseover", function (e) {
  const limitMouse=e.clientX;
   startX = start.getBoundingClientRect().left;
    
  //  console.log(startX,limitMouse,endGame,passStart);
 
   if (limitMouse < startX  && passStart && endGame == false) {
     maze.forEach(element => {
       element.style.backgroundColor = "red";
       btn.style.backgroundColor = "";
     });
 
     islost = true;
     endGame = true;
     stat.textContent = "LOST !!";
   }
 });

