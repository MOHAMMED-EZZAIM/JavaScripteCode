/*le butte button avec id but ajouter un clase
classList.add("nomClass")
classList.remove(nomClasse);
classList.contains(noclass) return true si class existe et false si class n'esiste pas
*/

/*
const b=document.getElementById("b");
b.classList.add("enabled");
const myh1=document.getElementById("myh1");
 myh1.classList.add("disabled");
myh1.classList.add("enabled");
b.classList.remove("enabled");

b.addEventListener("mouseover", event => {
     event.target.classList.add("hover");
 });

b.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});
b.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent +="😓";
    }
    else{
        // event.target.classList.replace("enabled","disabled");
        event.target.classList.remove("enabled");
        event.target.classList.add("disabled");
    }
});
*/
const btn=document.querySelectorAll(".btn");
btn.forEach(buttn=>{
    buttn.addEventListener("click",event => {
        event.target.classList.add("disabled");
    });   
});

btn.forEach(buttn=>{
    buttn.addEventListener("mouseover",event => {
        event.target.classList.remove("disabled");
        event.target.classList.add("hover");
    });   
});

btn.forEach(buttn=>{
    buttn.addEventListener("mouseout",event => {
        event.target.classList.remove("disabled");
        event.target.classList.add("hover");
    });   
});