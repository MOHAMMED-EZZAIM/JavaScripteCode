//Get Slider Item
var sliderImages=Array.from(document.querySelectorAll(".slider-conteiner img"));
console.table(sliderImages);

//Get Number of Slides 
var slidesCount=sliderImages.length;
// console.log(slidesCount);

// set firstImage
var currentSlide=1;

//slide Number String Element
var slideNumberElement=document.getElementById("slide-number");

//prev et next button
var nextbtn=document.getElementById("next");
var prevtbtn=document.getElementById("prev");

nextbtn.onclick=nextSlide;
prevtbtn.onclick=prevSlide;


function nextSlide(){
    console.log("next");
}
function prevSlide(){
    console.log("prev");
}
var paginationElement=document.createElement(`ul`);
paginationElement.setAttribute(`id`,`pagination ul`);
//create list item on slider cout
for(var i=1;i<=slidesCount;i++){
   var paginationItem=document.createElement(`li`);
   paginationItem.setAttribute(`data-index`,i);
   paginationItem.appendChild(document.createTextNode(i));
   paginationElement.appendChild(paginationItem);
}
document.getElementById("indicators").appendChild(paginationElement);

var ulList=document.getElementById("pagination ul");

checker();
function checker(){
    slideNumberElement.textContent="slide #"+(currentSlide)+"of"+slidesCount;
    sliderImages[cu].classList.add(`active`);
}


