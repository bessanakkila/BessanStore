

let span = document.querySelector(".up");
window.onscroll = function () {
   if (this.scrollY >= 1000) {
	 span.classList.add("show");
   } else {
	 span.classList.remove("show");
   }
};
/*let span =document.querySelector(" .up");
window.onscroll=function () {
	if (window.scrollY >=1000){
		span.style.display="block";
	} else {
		span.style.display="none";
	}
	};*/

 
span.onclick = function () {
  window.scrollTo({
	top: 0,
	behavior: "smooth",
  });
};

//********************************************* */
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
/******************************************* */
let wow= document.querySelectorAll('.wow');
        let i=0;
        window.addEventListener('scroll' , function(){
            for(i=0;i<wow.length;i++){
                if(wow[i].getBoundingClientRect().top < window.innerHeight -200){
                    wow[i].classList.add('show');
                }else{
                    wow[i].classList.remove('show');

                }
            }
        });