const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalid=null;
initizeSlider();
// document.addEventListener("DOMContentLoaded",initizeSlider);
function initizeSlider(){
    if(slides.length>0){
        slides[slideIndex].classList.add("displayslide");
        intervalid=setInterval(nextslide,4000);
    }
}
function showSlide(index){
  if(index >= slides.length){
    slideIndex=0;
  }
  else{
    slideIndex=slides.length-1;
  }
  slides.forEach(slide =>{
    slide.classList.remove("displayslide");
  });
  slides[slideIndex].classList.add("displayslide");
}
function nextslide(){
    slideIndex++;
    showSlide(slideIndex);
}
function prevslide(){
  slideIndex--;
  showSlide(slideIndex);
}