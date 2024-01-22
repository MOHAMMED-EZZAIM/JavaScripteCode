const rock=document.getElementById("b1");
const papper=document.getElementById("b2");
const scissors=document.getElementById("b3");
const noz3e1=document.getElementById("noz3e1");
const noz3e2=document.getElementById("noz3e2");
const myh1=document.getElementById("myh1");
const score1=document.getElementById("score1");
const score2=document.getElementById("score2");
const on=document.getElementById("on");
const of=document.getElementById("of");
myh1.style.color="rgb(6, 89, 243);";
let varuser;
varuser=Number(varuser);
varuser=0;
let varcomputer;
varcomputer=Number(varcomputer);
varcomputer=0;
let t=["rock","papper","scissors"];
let user;
user=Number(user);
let ran;
let com=0;
com=Number(com);
    rock.addEventListener("click",event => {
        myh1.textContent=" IT'S A TIE";
        com++;
        com=Number(com);
        ran=Math.floor(Math.random()*3);
        ran=Number(ran);
        user=0;
        noz3e1.value="Player :"+t[0]+"👊";
        noz3e1.textContent=noz3e1.value;
       
        tesyter(user,ran);
        
    });   
    papper.addEventListener("click",event => {
        myh1.textContent=" IT'S A TIE";
        com++;
        com=Number(com);
        ran=Math.floor(Math.random()*3);
        ran=Number(ran);
        user=1;
        noz3e1.value="Player :"+t[1]+"✋";
        noz3e1.textContent=noz3e1.value;
        testRandom();
         tesyter(user,ran);
    });
    scissors.addEventListener("click",event => {
        myh1.textContent=" IT'S A TIE";
        com++;
        com=Number(com);
        ran=Math.floor(Math.random()*3);
        ran=Number(ran);
        console.log(ran);
        user=2;
        noz3e1.value="Player :"+t[2]+"🤞";
        noz3e1.textContent=noz3e1.value;
        testRandom();
         tesyter(user,ran);
    });
function tesyter(user,computer){
    user=Number(user);
    computer=Number(computer);;
    if(user!=computer && varcomputer<3 && varuser<3){
        if(user==0 && computer==1){
            varcomputer++;
            score2.textContent="Computer:"+varcomputer;
            score2.style.color="red";
        }
        if(user==0 && computer==2){
            varuser++;
            score1.textContent="Player:"+varuser;
        }
        if(user==1 && computer==0){
            varuser++;
            score1.textContent="Player:"+varuser;
        }
        if(user==1 && computer==2){
            varcomputer++;
            score2.textContent="Computer:"+varcomputer;
            score2.style.color="red";
        }
        if(user==2 && computer==1){
            varuser++;
            score1.textContent="Player:"+varuser;
        }
        if(user==2 && computer==0){
            varcomputer++;
            score2.textContent="Computer:"+varcomputer;
            score2.style.color="red";
        }    
    }
    if(varuser==3){
        if(document.body.classList.contains("classBody1")){
            document.body.classList.remove("classBody2");
        }
        document.body.classList.remove("classBody1");
        document.body.classList="classBody1";
        myh1.textContent=" User Win \ud83d\ude0e";
        myh1.style.color="";
       rock.disabled = true;
       papper.disabled = true;
       scissors.disabled = true;
       rock.style.backgroundColor = "black";
       papper.style.backgroundColor = "black";
       scissors.style.backgroundColor = "black";
    }
    if(varcomputer==3){
        if(document.body.classList.contains("classBody1")){
            document.body.classList.remove("classBody1");
        }
        document.body.classList="classBody2";
        myh1.textContent="  Computer Win \ud83d\ude0e "  ;
        myh1.style.color="red";

        rock.disabled = true;
        papper.disabled = true;
        scissors.disabled = true;
        rock.style.backgroundColor = "black";
        papper.style.backgroundColor = "black";
        scissors.style.backgroundColor = "black";
    }

}


on.addEventListener("click",event =>{
    if(document.body.classList.contains("classBody1")){
        document.body.classList.remove("classBody1");
    }
    if(document.body.classList.contains("classBody2")){
        document.body.classList.remove("classBody2");
    }
      rock.disabled = false;
       papper.disabled = false;
       scissors.disabled = false;

       rock.style.backgroundColor = "blue";
       papper.style.backgroundColor = "blue";
       scissors.style.backgroundColor =  "blue";
       varuser=0;
       varcomputer=0;
       score1.textContent=" User :0";
       score2.textContent=" computer:0";
});

off.addEventListener("click",event =>{
    if(document.body.classList.contains("classBody1")){
        document.body.classList.remove("classBody1");
    }
    if(document.body.classList.contains("classBody2")){
        document.body.classList.remove("classBody2");
    }
     rock.disabled = true;
     papper.disabled = true;
     scissors.disabled = true;

     rock.style.backgroundColor = "black";
     papper.style.backgroundColor = "black";
     scissors.style.backgroundColor = "black";
     varuser=0;
     varcomputer=0;
     score1.textContent=" User :0";
     score2.textContent=" computer:0";
     
});

function testRandom(){
    switch(ran){
        case 0:noz3e2.value="Computer :"+t[0]+"👊";
        noz3e2.textContent=noz3e2.value;
        break;
  case 1:noz3e2.value="Computer :"+t[1]+"✋";
        noz3e2.textContent=noz3e2.value;
        break;
  case 2:noz3e2.value="Computer :"+t[2]+"🤞";
        noz3e2.textContent=noz3e2.value;
        break;
    }
}


