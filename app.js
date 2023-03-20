const slides = document.querySelectorAll('.slide');
function slidesMove(activeSlide) {
    slides[activeSlide].classList.add('active');
    document.addEventListener('keydown', changeSlide => {
        let activeSlide = document.querySelectorAll('.slide.active')[0];

        if (changeSlide.key === 'ArrowLeft') {
            let prev = activeSlide.previousElementSibling;
            if (prev!=null) {                
                clearActiveClasses();
                prev.classList.add('active');
            }
        } else if (changeSlide.key === 'ArrowRight') {
            let next = activeSlide.nextElementSibling;
            if (next!=null) {                
                clearActiveClasses();
                next.classList.add('active');
            }
        }      

    });

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active');
        })
    });

}

function touchMoving () {
    
    let x1 = null;
    
    
    document.addEventListener('touchstart', event => {
                
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;
    })
    
    document.addEventListener('touchend', event => {
        let activeSlide = document.querySelectorAll('.slide.active')[0];
        if (!x1) {
            return false;
        } 
        console.log(event);

        let x2 = event.changedTouches[0].clientX;
                
        let xDiff = x2 - x1;
        
        if (xDiff < 0) {
            console.log('left');
            let next = activeSlide.nextElementSibling;
            if (next!=null) {                
                clearActiveClasses();
                next.classList.add('active');
            }
        } else if (xDiff > 0) {
            console.log('right');

            let prev = activeSlide.previousElementSibling;
            if (prev!=null) {                
                clearActiveClasses();
                prev.classList.add('active');
            }
        }    
    });

}

function clearActiveClasses() {
    for (const slide of slides) {
        slide.classList.remove('active');
    }
}

slidesMove(2);
touchMoving();