/*destructuring=extract values from arrays and objects,
                then assign them to variables is a convenient way
                [] =to perform array destructuring
                {} =tp perform pbject destructuring
--------------------Example1-----------------
swap the value of two variable

--------------------Example2-----------------
swap 2 elements in array

--------------------Example3-----------------
ASSIGN Array elments to Variables

--------------------Example4-----------------
Extra values from object

*/

//Example1
let a=1;
let b=2;
console.log(`a=${a}`);
console.log(`b=${b}`);
[a,b]=[b,a];
console.log(`a=${a}`);
console.log(`b=${b}`);

//Example2
const colors=["red","green","blue","black","white"];
console.log(colors);
[colors[0],colors[4]]=[colors[4],colors[0]];
console.log(colors);

//Example3
const [v1,v2,v3,...subtable]=colors;
console.log(v1);
console.log(v2);
console.log(v3);
console.log(subtable);

//Exampel4

const perso1={
    firsname: "mohammed",
    lastname: "ezzaim",
    age: 21,
    job: "programmeur",
}

const perso2={
    firsname: "houda",
    lastname: "ezzaim",
    age: 24,
}

const {firsname,lastname,age,job="morafi9a"}=perso2;
console.log(firsname);
console.log(lastname);
console.log(age);
console.log(job);

function dispalayPerson1({firsname,lastname,age,job}){
    console.log(firsname);
    console.log(lastname);
    console.log(age);
    console.log(job);
};

dispalayPerson1(perso1);
dispalayPerson2(perso2);
function dispalayPerson2({firsname,lastname,age,job="morafi9a"}){
    console.log(firsname);
    console.log(lastname);
    console.log(age);
    console.log(job);
};