const input=document.getElementById("text");
let x;
let y;
let operateur;
function display(event){
   input.value+=event;
}
function calcul(){
    y=input.value;
    y=Number(y);
    switch(operateur){
        case "+" : input.value=x+y; 
                    break;
        case "-" : input.value=x-y; 
                  break;
        case "*" : input.value=x*y;
                  break;
        case "/" : input.value=x/y;
                    break;
    }
}
function clearFonction(){
    input.value="";
}
function some(){
    x=input.value;
    x=Number(x);
    operateur="+";
    input.value="";
    }

function moin(){
    x=input.value;
    x=Number(x);
    operateur="-";
    input.value="";
    }
function div(){
    x=input.value;
    x=Number(x);
    operateur="/";
    input.value="";
    }    
    function multi(){
        x=input.value;
        x=Number(x);
        operateur="*";
        input.value="";
        }    