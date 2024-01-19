/*Callback =a function that is passed as an argument
to another function.
*/
/*
hello(goodby());
function hello(goodby){
    console.log("Hello!");
}
function goodby(){
    console.log("GoodBy");
}
*/
hello(goodby);
function hello(goodby){
    console.log("Hello!");
    goodby();
}
function goodby(){
    console.log("GoodBy");
}

function leave(){
    console.log("leave");
}
function sum(Callback,x,y){
    let result=x+y;
    Callback(result);
}
function dspalaysum(result){
    console.log(result);
}
sum(dspalaysum,4,5);
sum(dspalaysumPage,4,5);
function dspalaysumPage(result){
    document.getElementById("myH1").textContent=result;
}


//foreach
// array.foreach(callback)

let numbers=[1,2,3,4,5];
numbers.forEach(squqre);

function dispalayMethode(elements){
    console.log(elements);
}
function double(elements){
    console.log(elements*2);
}
function triple(elements){
    console.log(elements*3);
}
function squqre(elements){
    console.log(Math.pow(elements,2));
}

let fouds=["APPLE","orange","banana","coconut"];
fouds.forEach(capitaliase);
function dispalaMeth(elements){
    console.log(elements);
}
function uppercase(elements){
    console.log(elements.toUpperCase());
}
function lowecase(elements){
    console.log(elements.toLowerCase());
}
function capitaliase(elements){
    console.log(elements.charAt(0).toUpperCase()+elements.slice(1));
}


const dates=["2020-01-3","2021-5-3","2022-7-3"];

function formate(elments){
    let m=elments[0];
    const variable=m.split("-");
    console.log(`la date est : ${variable[2]}/${variable[1]}/${variable[0]} `);
}

formate(dates);