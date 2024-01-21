//nodeList=
//querySelectorAll(".nomclass")

let buttons=document.querySelectorAll(".b");
console.log(buttons);
// buttons.forEach(button => {
//         button.style.backgroundColor="green";
//         button.textContent +="🧐 ";
// });

// buttons.forEach(button =>{
//         button.addEventListener("mouseover",event =>{
//         event.target.style.backgroundColor="green";
//         event.textContent +="🧐";
//         });
// });

// buttons.forEach(button =>{
//         button.addEventListener("mouseout",event =>{
//         event.target.style.backgroundColor="green";
//         event.textContent +="🧐";
//         });
// });

const newButton=document.createElement("button");
newButton.textContent="button 5";
newButton.classList="b";
document.body.appendChild(newButton);

const p=document.createElement("p");
p.textContent="name de composant";
p.id="name";
document.body.appendChild(p);
// console.log(newButton);
buttons=document.querySelectorAll(".b");
// console.log(buttons);
buttons.forEach(button =>{
        button.addEventListener("click",event =>{
                //target =but hadaf
                event.target.remove();
                buttons=document.querySelectorAll(".b");
                console.log(buttons);
                button.innerHTML="";
        });
});
document.getElementById("name").textContent=event.target.tagName;

function nomComposante(event){
        document.getElementById("name").innerHTML=event.target.tagName;
}