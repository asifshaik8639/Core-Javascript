const starContainer = document.querySelector("#star_container");
const countSpan = document.querySelector("#count");
const starsArr = document.querySelectorAll(".star");
let selectedRating = 0;

function resetColor(color) {
    let starsNumber = starsArr.length || 0;
    for(let index = 0; index < starsNumber; index++) {
        starsArr[index].classList.remove(color);
    }
}

function setColor(color, rating) {
    let inputRating = rating !== null ? rating : selectedRating;
    for(let index = 0; index < inputRating; index++) {
        starsArr[index].classList.add(color);
    }
}

starContainer.addEventListener('click', function(event) {
     let IsStarComponent = event.target.classList.contains('star');

     if(IsStarComponent) {
        selectedRating = event.target.getAttribute('idx');
        //reset the applied color, if any
        resetColor('yellow');

        setColor('yellow', selectedRating);

        countSpan.textContent = selectedRating;

     }
});

starContainer.addEventListener('mouseover', function(event) {
    let IsStarComponent = event.target.classList.contains('star');
    if(IsStarComponent) {
        let  tempRating = event.target.getAttribute('idx');
        resetColor('yellow');
        setColor('yellow', tempRating);
    }
});

starContainer.addEventListener('mouseleave', function(event) {
    resetColor('yellow');
    setColor('yellow', null);
});