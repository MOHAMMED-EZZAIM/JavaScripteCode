const btn=document.getElementById('b');
const l1=document.getElementById('l1');
const l2=document.getElementById('l2');
const l3=document.getElementById('l3');
// nbr mabine 1 ou 6  random()=  0=<nbr<1   
//   random()*6
// Returns a random integer from 1 to 100:
//Math.floor(Math.random() * 100) + 1;
btn.onclick=function(){
    l1.textContent=Math.floor(Math.random()*6)+1;// random de 0 a 5 main plus 1   (1 a 6)
    l2.textContent=Math.floor(Math.random()*6)+1;
    l3.textContent=Math.floor(Math.random()*6)+1;
}
