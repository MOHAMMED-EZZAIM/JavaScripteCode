const i1=document.getElementById('i1');
const i2=document.getElementById('i2');
const i3=document.getElementById('i3');
const b=document.getElementById('b');

b.onclick=function(){
    if(i1.checked){
        document.getElementById('res').textContent="you are subscribe";
    }
    else if(i2.checked){
        document.getElementById('res').textContent="paypale";
    }
    else if(i3.checked){
        document.getElementById('res').textContent="contry";
    }
    else{
            document.getElementById('res').textContent="chek un item";
        }
}

let user =  "     mohammed ezzaim      ";
console.log(user.trim());
console.log(user.startsWith(' '));
console.log(user.trim().startsWith(' '));//mohammed ezzaim
let email="mohammedezzaim00@gmail.com";
console.log(email.slice(0,email.indexOf('@')));
console.log(email.slice(0,16));

console.log(email.slice(email.indexOf("@")));


/*
let name=prompt("entre your name :");
name=name.trim();
let c=name.charAt(0).toUpperCase();
name=name.slice(1).toLowerCase();
console.log(c+name);
*/



const PI=3.14;
if(PI==="3.14"){
    console.log("le meme contenue et le mem type");
}else{
    console.log("n'est pas le meme contenue et le meme type");
}

if(PI=="3.14"){
    console.log("le meme contenue ");
}else{
    console.log("n'est pas le meme contenue et le meme type");
}

let mohammed="";
while(mohammed===""){
    mohammed=window.prompt("entre your name");
}
mohammed=mohammed.trim();
mohammed=mohammed.charAt(0).toUpperCase()+mohammed.slice(1).toLowerCase();
console.log(mohammed);