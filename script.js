// (1) Resume Section Buttons Functionality
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-details');

        // button active class toggle
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        // button functionality to switch resume details
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});


// (2) project section navigation button functionality
const arrowRight = document.querySelector('.project-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.project-box .navigation .arrow-left');

let index = 0;
const activeProject =  () => {
    const imgSlide = document.querySelector('.project-carousel .img-slide');
    const projectDetails = document.querySelectorAll('.project-details')
    projectDetails.forEach(detail => {
        detail.classList.remove('active')
    });
    projectDetails[index].classList.add('active');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
}
arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activeProject();
})
arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activeProject();
})