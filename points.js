//simple point system
var points = 0;

function getPoints(){
    document.getElementById("score").innerHTML = points;
}
function bonusPoints(){
    if(matchCounter==2){
        points += 200;
    }
    else if(matchCounter == 4){
        points += 400;
    }
    else if(matchCounter == 6){
        points += 600;
    }
}