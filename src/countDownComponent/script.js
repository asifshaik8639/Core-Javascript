"use strict";
// ## Requirements
// Must have features
//     * pass time in hours, minute and second
// * validation so that if user enters any time
//  
//              * edge cases -> validation
//                  * negative values
//                   * hours > 24 
// * greater 60 then it should move to left bit
// * start the count down 
//       * start, pause, continue 
// 

// Good to have
//     * reset option 

// ## Approach

// selected elements
// btns
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");

// inputs
const minInput = document.getElementById("minutes");
const hrsInput = document.getElementById("hours");
const secInput = document.getElementById("seconds");
let saveCountDownTime = 0; // save the countdown time on pause
let counterID; // id for setinterval

let minutesTimeout = 0;
let hoursTimeout = 0;
let secondsTimeout = 0;

/* The `onInputEnter` function is a validation function that is triggered when the user enters
a value in the input fields for hours, minutes, or seconds. It checks if the entered value
is valid based on certain conditions. If the value is not valid, it throws an error. */
function onInputEnter(event) {
    try {
        let inputValue = event.target.value;
        console.log(" inputValue on onInputEnter", inputValue);
        event.target.value = inputValue.slice(0,2);
        let inputElement = event.target.getAttribute('id');
        if(inputElement === 'hours') {
             console.log("in hours validation");
             if(inputValue > 24 || inputValue < 0 || isNaN(inputValue)) {
                 throw new Error('Not a valid input.. Please enter valid input');
             }
        } else if(inputElement === 'minutes'){
             console.log("in minutes validation");
             if(inputValue < 0 || isNaN(inputValue)) {
                 throw new Error('Not a valid input.. Please enter valid input');
             } else if(inputValue > 60) {
     
             }
        } else if(inputElement === 'seconds') {
             console.log("in seconds validation");
             if(inputValue < 0 || isNaN(inputValue)) {
                 throw new Error('Not a valid input.. Please enter valid input');
             } else if(inputValue > 60) {
     
             }
        }
    } catch (error) {
        console.error(" An error occurred while validating ", error);
    }
}

function countDownTimer(currentInputElement = 'seconds') {
    console.log('in countDownTimer');
    try {
        if(currentInputElement === 'seconds') {
            if(!!secInput.value) {
                secInput.value -= 1;
                console.log('in secInput', secInput.value);
                if(secInput.value <= 0) {
                    secInput.value = 0;
                    console.log('in countDownTimer clearTimeout seconds  case');
                    clearInterval(secondsTimeout);
                    minutesTimeout = setInterval(countDownTimer, 60000, 'minutes');
                }
            }
        } else if(currentInputElement === 'minutes') {
            if(!!minInput.value) {
                minInput.value -= 1;
                console.log('in minInput', minInput.value);
                if(minInput.value <= 0) {
                    minInput.value = 0;
                    clearInterval(minutesTimeout);
                    hoursTimeout = setInterval(countDownTimer, 3600000, 'hours');
                }
            }
        } else if(currentInputElement === 'hours') {
            if(!!hrsInput.value) {
                hrsInput.value -= 1;
                console.log('in hrsInput', hrsInput.value);
                if(hrsInput.value <= 0) {
                    hrsInput.value = 0;
                    clearInterval(hoursTimeout);
                    alert('Timer Completed');
                }
            }
        }
    } catch (error) {
        console.error('An error occurred in countDownTimer', error);
    }
}

startBtn.addEventListener("click", (event) => {
    console.log('startBtnClickHandler');
    secondsTimeout = setInterval(countDownTimer, 1000, 'seconds');
});

/***
 * DRY -> do not repeat yourself
 * Single responsibility principles
 * */