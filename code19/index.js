//keydow : entre de clavier
const mybox=document.getElementById("mybox");
// document.addEventListener("keydown",
// (event) => {
// mybox.textContent="😘",
// mybox.style.backgroundColor="red"
// }
// )

// document.addEventListener("keyup",
// (event) => {
// mybox.textContent="😜 ",
// mybox.style.backgroundColor="blue"
// }
// )
const mauveface=10;
let x=0;
let y=0; 
document.addEventListener("keydown",
(event) => {
console.log(event.key);
mybox.textContent="🤠";
if(event.key){
    switch(event.key){
       case "ArrowUp":
             y-=mauveface;
             break;
        case "ArrowDown":
                y+=mauveface;
                break;
        case "ArrowLeft":
                x-=mauveface;
                break;
        case "ArrowRight":
                x+=mauveface;
                break;
    }
    mybox.style.top=`${y}px`;
    mybox.style.left=`${x}px`;

   // mybox.style.bottom=`${y}px`;
   // mybox.style.rigth=`${x}px`;
}
});


console.log("hello mohammed ezzaim");