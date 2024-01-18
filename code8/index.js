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