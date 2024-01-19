/*
nested object =Object inside of other object
*/

// const Persone={
//     fullname:  "mohammed ezzaim",
//     age:  21,
//     isEtudent:  true,
//     hobbies: ["swiming","cokking","programing"],
//     adress: {
//         namevile:"marrakech",
//         country:"morroco",
//     }

// }
// console.log(Persone.hobbies[0]);
// console.log(Persone.adress.namevile);

// for(const property in Persone.adress){
//    console.log(Persone.adress[property]);
// }

// class Addresse{
//     constructor(street,city,country){
//             this.street=street;
//             this.city=city;
//             this.country=country;
//     }
// }

// class Persone{
//     constructor(name,age,...adress){
//             this.name=name;
//             this.age=age;
//             this.adress=new Addresse(...adress);
//     }
// }

// const p1=new Persone("mohammed",21,"allah ma yaser"
//                                     ,"marrakech"
//                                     ,"morroco");

// const p2=new Persone("mohammed",21, "allah ma yaser"
//                                     ,"marrakech"
//                                     ,"morroco");
// console.log(p1.adress.country);                                 


const fruit=[{name: "apple",color:"red",calories:95},
             {name: "orange",color:"orange",calories:45},
             {name: "banan",color:"yellow",calories:105},
             {name: "cocount",color:"white",calories:159},
             {name: "pineapple",color:"yellow",calories:37}];

//fruit.push({name: "apple",color:"red",calories:95});
//fruit.pop();
//console.log(fruit);
/*
-----------------froEach--------------------------
fruit.forEach((fruit)=> console.log(fruit.color));
fruit.forEach((fruit)=> console.log(fruit.name));
fruit.forEach((fruit)=> console.log(fruit.calories));

*/


/*-----------------map--------------------------
//return a new array withe the condition
const varible1=fruit.map((fruit)=> fruit.name);
const varible2=fruit.map((fruit)=> fruit.color);
const varible3=fruit.map((fruit)=> fruit.calories);
console.log(varible1);
console.log(varible2);
console.log(varible3);
*/


/*---------------------------filter------------------
const yellowfoudes=fruit.filter((fruit)=> fruit.color==="yellow");
const grande=fruit.filter((fruit)=>fruit.calories>100);
const petite=fruit.filter((fruit)=>fruit.calories<100);
console.log(grande);
console.log(petite);
*/


/*-----------------reduce--------------------
const varible3=fruit.map((fruit)=> fruit.calories);
console.log(varible3);

const maxfruit=fruit.reduce(
    function(max,fruit){
      if(fruit.calories>max.calories){
            return fruit;
      }
      else{
        return max;
      }
    }
);

const minfruit=fruit.reduce((min,fruit)=>
     fruit.calories<min.calories ? fruit : min
);
console.log(maxfruit);
console.log(minfruit);
*/


// sort
// let number=[1,10,2,4,88,5,6,3,2,11,12];
// number.sort((a,b)  =>  a-b );
// console.log(number);

// number.sort((a,b)  =>  b-a);
// console.log(number);

// console.log(fruit);
// fruit.sort((a,b)  =>  a.calories-b.calories);
// console.log(fruit);
// fruit.sort((a,b)  =>  b.calories-a.calories);
// console.log(fruit);

//shufle
const cards=['A',2,3,45,6,7,8,9,10,'J','Q','K'];
shuffle1(cards);
console.log(cards);

function shuffle1(array) {
    for(let i=0;i<array.length;i++){
let v=Math.floor(Math.random()*(array.length));
[array[i],array[v]]=[array[v],array[i]];
    }   
}
function shuffle2(array) {
    for(let i=array.length-1;i>0;i--){
let v=Math.floor(Math.random()*(i+1));
[array[i],array[v]]=[array[v],array[i]];
    }   
}


