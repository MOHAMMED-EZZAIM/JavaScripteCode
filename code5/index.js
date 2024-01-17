const btn=document.getElementById('b');
const input=document.getElementById('enter');
const l=document.getElementById('l');

let age;
let sortie;
btn.onclick=function(){
    age=input.value;
    if(age>18){
        l.textContent="your age est pasable";
    }
    else if(age<=0){
        l.textContent="tu es faux";
    }
    else{
        l.textContent="your age est note pasable";
    }
}
