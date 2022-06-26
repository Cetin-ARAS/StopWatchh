let seconds = 0;
let minutes = 0;
let hour = 0;

let timerSeconds =0;
let timerMinutes =0;
let timerHours = 0;
function timer(){

    seconds++;

    if (seconds / 60 === 1){
        seconds =0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }
    

    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
}

window.setInterval(timer, 10);