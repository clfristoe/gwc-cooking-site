var timer;
var slides;
var dots;
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	stopTimer();
  showSlides(slideIndex += n);
}

function currentSlide(n) {
	stopTimer();
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  
  if (n== undefined){
	  n = ++slideIndex;
  }
  
  if (n > slides.length) {
	slideIndex = 1;
	} 

  if (n < 1){
		slideIndex = slides.length;
	}
	
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  timer = setTimeout (showSlides, 2500);
  }
  function startTimer() {
	  timer = setTimeout (showSlides, 2500);
  }
  function stopTimer() {
	  clearTimeout (timer);
  }
  