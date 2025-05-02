let prevBtn = document.querySelector(".left__btn");
let nextBtn = document.querySelector(".right__btn");
let images  = ["/images/slide1.png","images/slide2.png","images/slide3.png","images/slide4.png","images/slide5.png"];

let currentSlide = document.querySelector(".slide");

let prevBtn_path = document.querySelector('.left__btn>path')
let nextBtn_path = document.querySelector('.right__btn>path')

let mainColor = "#305A2E"





let currentPosition = 0;

let radioBtn = document.querySelectorAll(".radio");

function styles(el){
  el.style.opacity = 0.5;
}

function timeOut(el){
  setTimeout(()=>el.style.opacity = 1, 2000)
}

prevBtn.addEventListener('click', function(){

    if(currentPosition>0){
        styles(currentSlide)
        radioBtn[currentPosition].checked = false;
                 currentSlide.src         = images[currentPosition-1];
                 currentPosition          = currentPosition-1;
        timeOut(currentSlide)
        radioBtn[currentPosition].checked = true;
 }
    else{
      radioBtn[currentPosition].checked = false;
        styles(currentSlide)
        currentPosition  = images.length-1;
        currentSlide.src = images[currentPosition];
        timeOut(currentSlide)
        radioBtn[currentPosition].checked = true;
        
    }  

    if(currentPosition<4){
      nextBtn_path.setAttribute("fill", mainColor)
    
      
      
    }
    else{
      nextBtn_path.setAttribute("fill", "white")
      
    }
    
    if(currentPosition==0){
      prevBtn_path.setAttribute("fill", "white")
      
    }
    else{
      
      prevBtn_path.setAttribute("fill", mainColor)
      
    }

    
})

nextBtn.addEventListener('click', function(){
  if(currentPosition!=4){
    prevBtn_path.setAttribute("fill", mainColor)
    
  }
  else{
    prevBtn_path.setAttribute("fill", "white")
    
  }
    if(currentPosition<images.length-1){
        currentSlide.src = images[currentPosition+1];
       
        styles(currentSlide)
        currentPosition = currentPosition+1;
        timeOut(currentSlide)
        radioBtn[currentPosition].checked = true;
        
        
    }
    else{
      radioBtn[currentPosition].checked = false;
               currentPosition          = 0;
               currentSlide.src         = images[currentPosition];
        styles(currentSlide)
        timeOut(currentSlide)
        radioBtn[currentPosition].checked = true;
        
       
    }

    if(currentPosition<4){
      nextBtn_path.setAttribute("fill", mainColor)
    
      
    }
    else{
      nextBtn_path.setAttribute("fill", "white")
      
    }


    
})

radioBtn.forEach(function (el, index) {
    el.addEventListener('click', function () {
        currentSlide.src = images[index];
        styles(currentSlide)
        timeOut(currentSlide);
    });
})





