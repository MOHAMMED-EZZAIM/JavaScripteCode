const i1=document.getElementById('i1');
const i2=document.getElementById('i2');
const i3=document.getElementById('i3');
const btn=document.getElementById('b');
const  res=document.getElementById('result');
let nombre;
btn.onclick=function (){
    if(i2.checked){
        nombre=Number(i1.value);
        nombre=nombre+273.15
        res.textContent=nombre+"c";
    }
    else if(i3.checked){
        nombre=Number(i1.value);
        nombre=nombre-273.15;
        res.textContent=nombre+"c";
    }
    else{
        res.textContent="plaise";
    }
}

let fruit=["apple","orange","banana"];
fruit.push("mohammed");
fruit.unshift("lina");
fruit.pop();
fruit.push();
fruit.sort();
fruit.sort().reverse();
console.log(fruit);

let t=[1,7,3,4,5,9];
let max=Math.max(...t);
console.log(max);

let min=Math.min(...t);
console.log(min);

console.log(Math.max(3,4,5,11,222));


