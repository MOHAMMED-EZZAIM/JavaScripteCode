/*
console.log(`hello word `);
console.log(`i like piza`);
window.alert('thid is a lert');
window.alert('i like pizza');
document.getElementById("myh1").textContent='hello word 999';

let age=30;
console.log(`your age est ${age}`);

let firsname ="mohammed ezzaim ";
console.log(`your name is ${firsname}`);

let boleane=false;
console.log(boleane);
document.getElementById('myp').textContent="your are mohammed ezzam";
document.write(window.prompt('enter your name'));
*/
let username;
document.getElementById('b').onclick=function(){
    username=document.getElementById('text').value;
    document.getElementById('h1').textContent=`hello ${username}`;
}