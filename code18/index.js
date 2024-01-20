//eventListener :
// .addEventListener(event,callback);
//event:click,mouseover,mouseout

const mybox= document.getElementById("mybox");
const b= document.getElementById("b");

// function changeColor(even) {
//     even.target.style.backgroundColor="red";
//     even.target.textContent="moham 🧑  ";
// }

// mybox.addEventListener("click",changeColor);

//with arrow function

mybox.addEventListener("click",(ecote)  =>
{
ecote.target.style.backgroundColor="red",
ecote.target.textContent=" click 🏈  " 
}
);

mybox.addEventListener("mouseout",(ecote)  =>
{
ecote.target.style.backgroundColor="yellow",
ecote.target.textContent="mouseout 🏺   " 
}
);

mybox.addEventListener("mouseover",(ecote)  =>
{
ecote.target.style.backgroundColor="blue",
ecote.target.textContent="mouseover ⏰  " 
}
);




b.addEventListener("click",(ecote)  =>
{
ecote.target.style.backgroundColor="red",
ecote.target.textContent=" click 🏈  " ,
mybox.style.backgroundColor="red",
mybox.textContent=" click 🏈  " 
}
);

b.addEventListener("mouseout",(ecote)  =>
{
ecote.target.style.backgroundColor="yellow",
ecote.target.textContent="mouseout 🏺   " ,
mybox.style.backgroundColor="yellow",
mybox.textContent=" mouseout 🏺  " 
}
);

b.addEventListener("mouseover",(ecote)  =>
{
ecote.target.style.backgroundColor="blue",
ecote.target.textContent="mouseover ⏰  " ,
mybox.style.backgroundColor="blue",
mybox.textContent=" mouseover ⏰  " 
}
);
