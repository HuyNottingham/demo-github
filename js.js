const slides = document.getElementsByClassName('slide-child');
var currentSlide = 0;

function slide(index) {
    let sl = document.getElementsByClassName('slide')[0];
    // -50%
    currentSlide += index;
    if (currentSlide==-1)
      currentSlide = slides.length-1;
    else if (currentSlide==slides.length)
      currentSlide = 0;
    sl.style.transform = "translateX("+ (currentSlide*-50) +"%)";
  }