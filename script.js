const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const sliderImages = document.querySelectorAll('#slide');
let current = 0;

// Clear all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// Init slide
function startSlide(){
    reset();
    sliderImages[0].style.display = 'flex';
}

// Previous slide
function slideLeft(){
    reset();
    // index - 1 to go back to previous slide
    sliderImages[current - 1].style.display = 'flex';
    // set current value decrease by 1
    current--;
}

// Next Slide
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'flex';
    current++;
}

// Event Listener for arrow-left
arrowLeft.addEventListener('click', () => {
    // if current = 1st image, then the prev slide would be the last image
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
})

// Event Listener for arrow-right
arrowRight.addEventListener('click', () => {
    // if current image = the last image, then the next slide would be the first image
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
})

startSlide();