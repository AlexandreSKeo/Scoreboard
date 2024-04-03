let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let countHome = 0;
let countGuest = 0;

let period = 1;
let fouls = 0;
let winner = "";

function addPoint(number, team) {
    if (team == "home") {
        countHome += number;
        homeScore.textContent = countHome;
        if(countHome > countGuest) {
            homeScore.style.border = "2px solid yellow";
            guestScore.style.removeProperty("border")
            winner = "Home";
        }
    } else {
        countGuest += number;
        guestScore.textContent = countGuest;
        if(countHome < countGuest) {
            guestScore.style.border = "2px solid yellow";
            homeScore.style.removeProperty("border");
            winner = "Guest";     
        }
    }
}

function reset() {
    countHome = 0;
    countGuest = 0;
    homeScore.textContent = countHome;
    guestScore.textContent = countGuest;
}

function addFouls() {
    fouls += 1;
    document.getElementById("fouls-counter").textContent = fouls;
}

function timer(){
    let min = 0;
    let sec = 05; 
    let minString = "";
    let secString = "";
    
    let start = setInterval(clockTimer, 1000);
    
    function clockTimer(){
        if (min <  10) {
            minString = "0" + min; 
        } else {
            minString = min.toString();
        }
        
        if (sec <  10) {
            secString = "0" + sec; 
        } else {
            secString = sec.toString();
        }
        
        if(sec == 0 && min == 0) {
            document.getElementById('clock').textContent = minString + ":" + secString;
            if(period == 4) {
                alert(`Game Finished! Winner is ${winner}!!!`);
                clearInterval(start);
            } else {
            period++;
            document.getElementById("period-counter").textContent = period;
            min = 0;
            sec = 05;
            }
            
        } else if(sec == 0) {
            min--;
            sec = 59;
            document.getElementById('clock').textContent = minString + ":" + secString;            
        } else {
        document.getElementById('clock').textContent = minString + ":" + secString;
        sec--;
        }
    }
}
