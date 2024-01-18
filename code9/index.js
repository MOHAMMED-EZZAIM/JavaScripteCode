let fruit=["apple","orange","banana"];
fruit.push("mohammed");//add la fin
fruit.unshift("lina");// add debus
fruit.pop();//retirer fin
fruit.push();//retier debus
fruit.sort();
fruit.sort().reverse();
console.log(fruit);

let t=[1,7,3,4,5,9];
let max=Math.max(...t);
console.log(max);
let min=Math.min(...t);
console.log(min);
console.log(Math.max(3,4,5,11,222));

let fruits=["apple","orange","banana"];
let vegetable=["carrots","celery","potatoes"];
let foods=[...fruits,...vegetable,"eggs","milk"];
console.log(foods);
//['apple', 'orange', 'banana', 'carrots', 'celery', 'potatoes', 'eggs', 'milk']

const fond1="pizza";
const fond2="humburger";
const fond3="hotdog";
const fond4="sushi";

function openFrige(...foods){
    console.log(foods);//['pizza', 'humburger', 'hotdog', 'sushi']
    console.log(...foods);//pizza humburger hotdog sushi
}

openFrige(fond1,fond2,fond3,fond4);

function getFood(...foods){
    return foods;

}
const f=getFood(fond1,fond2,fond3);
console.log(f);

function sum(...numbers){  
    let result=0;
    for(let number of numbers){
        result+=number;
    }
    return result;
}


function sum2(...numbers){  
    let result=0;
    let l=numbers.length;
   for(let i=0;i<l;i++){
        result+=numbers[i];
   }
    return result;
}

console.log(sum(6,6,6,6));

function avg(...numbers){
    let result=0;
    let l=numbers.length;
   for(let i=0;i<l;i++){
        result+=numbers[i];
   }
    return result/l;
}
console.log(avg(6,6,6,6));

function combinesString(...Strings){
return Strings.join(" ");
}
const fullName=combinesString("Mr","Spongebob"," mohammed","ezzaim");
console.log(fullName);