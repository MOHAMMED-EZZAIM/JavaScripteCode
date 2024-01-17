/*
let x="hello word";
let y="1";
let z="";

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));
*/
let rayoun;
let surface;
const PI=3.14;
document.getElementById('b').onclick=function(){
    rayoun=document.getElementById('text').value;
    surface =2*PI*rayoun;
    document.getElementById('myh2').textContent=`le resulta est :${surface}`;
    document.getElementById('myh2').style.color='green';
}
