//Date(year,month,day,hour,minute,second,ms)
//const date=new Date("2003-6-18");

/*
const date=new Date();
const year=date.getFullYear();
const month =date.getMonth();//0-11
const day =date.getDate();1-31
const heur=date.getHours();
const mein=date.getMinutes();
const second=date.getSeconds();

console.log(year);
console.log(month);
console.log(day);
console.log(heur);
console.log(mein);
console.log(second);

date.setFullYear(2030);
date.setMonth(0);
date.setDate(1);
console.log(date);


const date1=new Date("2023-12-31");
const date2=new Date("2023-12-30");

if(date1>date2){
    console.log("hello word");
}
*/


//closure : A function defined inide of another function the inner
//          the inner function has access to ht variables 
// and scope of the outer function
// allow for private variables ans state maintenance
// used frequently in JS frameworks :React


function outer(){
  // tout les vatiable est private
    let messages="hello";
    function inner(){
        console.log(messages);
    }
    inner();
}

outer();
/*
cette methode n'est pas securise pour variable count
let count=0;
function increment(){
    count++;
    console.log(count);
}
increment();
increment();
increment();
*/
function craeteCounter(){
    let count=0;
    function increment(){
        count++;
        console.log(count);
    }
    function getCunt(){
        return count;
    }
    return {increment,getCunt};
}

const counter=craeteCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log("nouvel count est"+counter.getCunt());


function createGame(){

    let score=0;
function incremeniScore(Poinds){
    score+=Poinds;
    return `+${score}px`
}

function decrementScore(Poinds){
    score-=Poinds;
    return `-${score}px`
}
function getScore(){
    return score+"px";
}
return {incremeniScore,decrementScore,getScore};

}
const game=createGame();
game.incremeniScore(30);
game.incremeniScore(44);
game.decrementScore(1);
game.decrementScore(30);
console.log(game.getScore());

game.score=29999;
console.log(game.getScore());


