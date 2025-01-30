const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth; 

let currentPosition = 0;


function moveSlides() {
    currentPosition -= slideWidth;
    slider.style.transform = `translateX(${currentPosition}px)`;

    
    if (currentPosition <= -((totalSlides - 1) * slideWidth)) {
        currentPosition = 0;
        slider.style.transform = `translateX(${currentPosition}px)`;
    }
}


setInterval(moveSlides, 1000); 
