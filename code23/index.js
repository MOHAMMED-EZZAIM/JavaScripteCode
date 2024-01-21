
const btns=document.querySelectorAll(".btn");
btns.forEach(btn => {
    btn.classList.add("enabled");
});
btns.forEach(btn =>{
    btn.addEventListener("mouseover",event => {
        event.target.classList.toggle("hover");
    });
});

btns.forEach(btn =>{
    btn.addEventListener("mouseout",event => {
        event.target.classList.toggle("hover");
    });
});

btns.forEach(btn =>{
    btn.addEventListener("click",event => {
        // event.target.classList.toggle("disabled");
        // event.target.classList.replace("enabled","disabled");
        if(event.target.classList.contains("disabled")){
            // event.target.classList.remove("disabled");
            // event.target.classList.add("enabled");
            event.target.textContent+="🥳"
        }else{
            event.target.classList.toggle("disabled");
        }
    });
});

