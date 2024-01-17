let conteur=0;
document.getElementById('b1').onclick=function(){
    conteur-=1;
  document.getElementById('myh1').textContent=`${conteur}`;
}

document.getElementById('b2').onclick=function(){
    conteur=0;
  document.getElementById('myh1').textContent=`${conteur}`;
}

document.getElementById('b3').onclick=function(){
    conteur+=1;
  document.getElementById('myh1').textContent=`${conteur}`;
}