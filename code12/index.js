//filter()  =create a new array by filltering out elements
/*
const ages=[16,17,18,18,19,20,60];
const adult=ages.filter(isAdult);
const notadult=ages.filter(isNoteAdult);
console.log(adult);
console.log(notadult);

function isAdult(elments){
if(elments>=18){
return elments;
}
}
function isNoteAdult(elments){
    return elments<18;
    }

    const words =["apple","orange","banana","kiwi",
                    "pomegranate","cocount"];
    const short=words.filter(isShort);
    const longue=words.filter(isLongue);
    console.log(short);
    console.log(longue);
function isShort(elements){
   if(elements.length<=6){
    return elements;
   }
}

function isLongue(elements){
    if(elements.length>6){
     return elements;
    }
 }

 //reduce()  : reducs the elments of an array to a sigle value

 const prices=[5,30,10,25,15,20];
 const total=prices.reduce(sum);
console.log(total);
 function sum(n1,n2){
        return n1+n2;
 }

 const grades=[75,50,90,80,65,95];
 const maximu=grades.reduce(getMax);
 function getMax(n1,n2){
  if(n1>=n2){
    return n1;
  }
  else{
    return n2;
  }
 }

//  function getMax(n1,n2){
//    return Math.max(n1,n2);
//    }

console.log(maximu);

function hello(){
    console.log("hello word");
}

// setTimeout(fonction,time);
setTimeout(hello,3000);// 3000 <=> 3s

setTimeout(function helloMohammed(){
    console.log("hello mohammed ezzaim");
},3000);
*/

const numbers=[1,2,3,4,5,6];

let dou=numbers.map(function squqre(elments){
    return  Math.pow(elments,2);
});
console.log(dou);

const ev=numbers.filter(
    function paire(elments){
           return elments%2==0
    }
);

const some=numbers.reduce(
    function (numbers,n2){
                return numbers+n2;
    }
);
console.log(ev);
console.log(some);

const f=function (){
    console.log("mohammed ezzaim");
}
f();