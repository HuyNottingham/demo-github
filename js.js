const slides = document.getElementsByClassName('slide-child');
var currentSlide = 0;
function slide(i) {
    let sl = document.getElementsByClassName('slide')[0];
    currentSlide += i;
    if (currentSlide==-1)
      currentSlide = slides.length-1;
    else if (currentSlide==slides.length)
      currentSlide = 0;
    sl.style.transform = "translateX("+ (currentSlide*-(100/slides.length)) +"%)";
}

  
const products = document.getElementsByClassName('product');
var currentProducts = 0;
function product(i) {
    let pr = document.getElementsByClassName('products')[0];
    currentProducts += i;
    if (currentProducts==-1)
      currentProducts = products.length-1;
    else if (currentProducts==products.length)
    currentProducts = 0;
    pr.style.transform = "translateX("+ (currentProducts*-(100/products.length)) +"%)";
}

  
const Cpersons = document.querySelectorAll('.person-control li');
const persons = document.getElementsByClassName('person');
var currentPersons = 0;
for (let i = 0; i < Cpersons.length; i++) {
  Cpersons[i].onclick = () => {
    Cpersons[currentPersons].classList.remove('active');
    Cpersons[i].classList.add('active');
    currentPersons = i;
    let ps = document.getElementsByClassName('persons')[0];
    ps.style.transform = "translateX("+ (i*-(25/persons.length)) +"%)";
    // alert(persons.length);
  }};


const brands = document.querySelectorAll('.brands img');
var currentBrand = 0;
function brand(i) {
    let br = document.getElementsByClassName('brands')[0];
    currentBrand += i;
    if (currentBrand==-1)
    currentBrand = brands.length-1;
    else if (currentBrand==brands.length)
    currentBrand = 0;
    br.style.transform = "translateX("+ (currentBrand*-(25/brands.length)) +"%)";
}

document.querySelectorAll(".back-to-top i")[0].onclick = () => {
  window.scrollTo({top:0, behavior: 'smooth'})};