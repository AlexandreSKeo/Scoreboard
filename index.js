let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

let countHome = 0;
let countAway = 0;

let period = 1;
let fouls = 0;
let winner = "";

function addPoint(number, team) {
  if (team == "home") {
    countHome += number;
    homeScore.textContent = countHome;
    if (countHome > countAway) {
      homeScore.style.border = "2px solid yellow";
      awayScore.style.removeProperty("border");
      winner = "Home";
    }
  } else {
    countAway += number;
    awayScore.textContent = countAway;
    if (countHome < countAway) {
      awayScore.style.border = "2px solid yellow";
      homeScore.style.removeProperty("border");
      winner = "Away";
    }
  }
}

function reset() {
  countHome = 0;
  countAway = 0;
  homeScore.textContent = countHome;
  awayScore.textContent = countAway;
}

function addFouls() {
  fouls += 1;
  document.getElementById("fouls-counter").textContent = fouls;
}

function timer() {
  let min = 5;
  let sec = 0;
  let minString = "";
  let secString = "";

  let start = setInterval(clockTimer, 1000);

  function clockTimer() {
    if (min < 10) {
      minString = "0" + min;
    } else {
      minString = min.toString();
    }

    if (sec < 10) {
      secString = "0" + sec;
    } else {
      secString = sec.toString();
    }

    if (sec == 0 && min == 0) {
      document.getElementById("clock").textContent =
        minString + ":" + secString;
      if (period == 4) {
        alert(`Game Finished! Winner is ${winner}!!!`);
        clearInterval(start);
      } else {
        period++;
        document.getElementById("period-counter").textContent = period;
        min = 5;
        sec = 0;
      }
    } else if (sec == 0) {
      min--;
      sec = 59;
      document.getElementById("clock").textContent =
        minString + ":" + secString;
    } else {
      document.getElementById("clock").textContent =
        minString + ":" + secString;
      sec--;
    }
  }
}
