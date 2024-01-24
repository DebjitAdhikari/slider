const slider=document.querySelector(".slider");
const allSlides=document.querySelectorAll(".slide");
const btnLeft=document.querySelector(".left");
const btnRight=document.querySelector(".right");
let currentSlide=-1;
const maxSlide=allSlides.length;
function gotoSlideForRight(){
    currentSlide++;
    allSlides.forEach((el,i)=>{
        el.style.left=`${100*(i-currentSlide)}%`;
        
    })
}
gotoSlideForRight();
btnRight.addEventListener("click",function(){
    if(currentSlide===maxSlide-1){
        currentSlide=-1;
        gotoSlideForRight()
    }else
        gotoSlideForRight();
})
function gotoSlideForLeft(){
    currentSlide--;
    allSlides.forEach((el,i)=>{
        el.style.left=`${100*(i-currentSlide)}%`;
    })
}
btnLeft.addEventListener("click",function(){
    if(currentSlide===0){
        currentSlide=maxSlide;
        gotoSlideForLeft();
    }else
        gotoSlideForLeft();
})