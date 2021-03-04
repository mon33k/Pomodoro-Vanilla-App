// grab all elements you need to manipulate 
let displayMinutes = document.querySelector('.timerMinutes')
let displaySeconds = document.querySelector('.timerSeconds')

let startBtn = document.querySelector('.start') 
let stopBtn = document.querySelector('.stop')
let resetBtn = document.querySelector('.reset')

// add intervals 
let timeIntervalMinutes;
let timeIntervalSeconds;
let breakTimeInterval;

let minutes = 30; //30
let seconds = 59; //59
let confirmed = false;

displayMinutes.innerHTML = `<div>${minutes}:</div>`
displaySeconds.innerHTML = `<div> ${seconds < 10 ? formatSeconds : seconds}</div>`


// IF YOU HAVENT CLICKED THE START BTN STOP BTN IS DISABLED
// IF YOU START TIMER THEN START BTN SHOULD BE DISABLED AND STOP BTN ENABLED

// add controls to start, pause, stop
function startTimer() {

    timeIntervalMinutes = setInterval(() => {
        if(minutes === 0 && seconds === 0) {
            console.log("done bitches")
        }

        if(minutes <= 0) {
            stopTimer()
        } else {
            minutes = minutes - 1
        }
        displayMinutes.innerHTML = `<div>${minutes}:</div>`
    }, 60000)


    timeIntervalSeconds = setInterval(() => {
        if(minutes === 0 && seconds === 0) {
            stopTimer()

            if(confirm("Do you want to take a break?") === true) {
                minutes = 5
                seconds = 59
                displayMinutes.innerHTML = `<div>${minutes}:</div>`
                displaySeconds.innerHTML =  `<div>${seconds < 10 ? `0${seconds}` : seconds}</div>`
            }
        }

        if(seconds <= 0) {
            seconds = 59           
        } else {
            seconds = seconds - 1
        }
        displaySeconds.innerHTML = `<div>${seconds < 10 ? `0${seconds}` : seconds}</div>`
    }, 1000) 
} 


function stopTimer() {
    clearInterval(timeIntervalMinutes)
    clearInterval(timeIntervalSeconds)
}

function resetTimer() {
    minutes = 30
    seconds = 0

    displayMinutes.innerHTML = `<div>${minutes}:</div>`
    displaySeconds.innerHTML =  `<div>0${seconds}</div>`
}


startBtn.addEventListener('click',startTimer)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)
