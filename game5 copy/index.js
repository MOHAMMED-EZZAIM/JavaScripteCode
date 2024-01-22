const choies=["rock","papper","scissors"];
const playerDispaly=document.getElementById("playerDisplay");
const computerDispaly=document.getElementById("computerDisplay");
const resltDisplay=document.getElementById("resultDisplay");

const playerscoreDisplay=document.getElementById("playerscoreDisplay");
const ComputerscoreDisplay=document.getElementById("ComputerscoreDisplay");
let playrescor=0;
let computerscore=0;

function playGame(playerChies){
  const computerchoies=choies[Math.floor(Math.random()*3)];
  console.log();
  let result="";
  if(playerChies===computerchoies){
    result="IT'S A TIR!";
  }else{
    switch(playerChies){
case "rock" :
result=(computerchoies==="scissors") ?  "YOU WIN!" : "YOU LOSE!";
break;
case "papper" :
result=(computerchoies==="rock") ?  "YOU WIN!" : "YOU LOSE!";
break;
case "scissors" :
result=(computerchoies==="papper") ?  "YOU WIN!" : "YOU LOSE!";
break;
  }
}
playerDispaly.textContent=`PLAYER : ${playerChies} `;
computerDispaly.textContent=`Computer :${computerchoies}`;
resltDisplay.textContent=result;
resltDisplay.classList.remove("greenText","redTest");
switch(result){
   case "YOU WIN!":
    resltDisplay.classList.add("greenText");
    playrescor++;
    playerscoreDisplay.textContent=playrescor;
   case "YOU LOSE!":
    resltDisplay.classList.add("redTest");
    computerscore++;
    ComputerscoreDisplay.textContent=computerscore;

}

}
