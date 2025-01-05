//first slider

let prev = document.getElementById("prev");
let next = document.getElementById("next");

let slidersContent = document.querySelectorAll(".projects__container");

function nextSlide(el){

    for(let i=0; i<el.length; i++){

        if(el[i].classList.contains('hide')==false){
            el[i].classList.add("hide");

            if((i+1)<el.length){
                el[i+1].classList.remove("hide");
            }
            else{
                el[0].classList.remove("hide");
            }
            
            break
        }
        
    }

}

function prevSlide(el){
    for(let i=el.length-1; i>-1; i--){

        if(el[i].classList.contains('hide')==false){
            el[i].classList.add("hide");

            if((i-1)>-1){
                el[i-1].classList.remove("hide");
            }
            else{
                i=el.length-1;
                el[0].classList.add("hide");
                el[i].classList.remove("hide");
               
            }
            
            break
        }
        
    }
       
  
}
next.addEventListener("click", ()=>nextSlide(slidersContent));
prev.addEventListener("click", ()=>prevSlide(slidersContent));







//slider №2

let processButtons = document.querySelectorAll(".slider_btn");
let sliderContent = document.querySelectorAll(".process__slider-content");

//console.log(processButtons[1].value==sliderContent[1].getAttribute('data-value'))
//console.log(sliderContent[0].getAttribute('data-value'))

function addCheck(btn){
   
    btn.classList.add("checked");
   
for(let i=0; i<sliderContent.length; i++){
    sliderContent[i].classList.add("hide");
    console.log(btn.value);
    
    /*if(i==sliderContent.length-1){
        sliderContent[btn.value-1].classList.remove("hide");
    }*/

    
}


console.log(sliderContent[btn.value-1]);
sliderContent[btn.value-1].classList.remove("hide");
    
}




processButtons.forEach(

    
btn=>{
    btn.addEventListener('click', function(event) {
        
        for(let i=0; i<processButtons.length;i++){
            if(this.value!=i-1){
                processButtons[i].classList.remove("checked");
            }
        }
    });
    btn.addEventListener("click", ()=>addCheck(btn))}

)





