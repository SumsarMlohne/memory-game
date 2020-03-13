//timer
let seconds = 0;
let minutes = 0;
var timer;
let x, y;

function plusTime(){
    seconds += 1;
    if(seconds == 60){
        minutes += 1;
        seconds = 0;
    }
    if(seconds < 10){
        x = "0";
    }else{x = "";}
    if(minutes < 10){
        y = "0"
    }else{y = "";}
}
function startTimer(){
    timer = setInterval(plusTime, 1000);
}
function stopTimer(){
    if(seconds < 10){
        x = "0";
    }else{x = "";}
    if(minutes < 10){
        y = "0"
    }else{y = "";}
    document.getElementById("time").innerHTML = y + minutes + ":" + x + seconds;
    clearInterval(timer);
}
function resetTimer(){
    seconds = 0;
    minutes = 0;
}
