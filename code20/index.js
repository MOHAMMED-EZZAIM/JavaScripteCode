const b=document.getElementById("myBytton");
const img=document.getElementById("img");
b.addEventListener("click",
(event) => {
        if(img.style.display==="none"){
                img.style.display="block";
                b.textContent="Hide";
        } 
        else{
                img.style.display="none";
                b.textContent="Show";
        }
        
}

);