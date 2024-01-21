const input=document.getElementById("text");
function display(event){
   input.value+=event;
}
function calcul(){
    input.value=eval(input.value);
}
function clearFonction(){
    input.value="";
}

