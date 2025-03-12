const searchParams = new URLSearchParams(window.location.search);

let rtimehour = Number(searchParams.get("rtimehour"));
let rtimeminute = Number(searchParams.get("rtimeminute"));
let timestop = Number(searchParams.get("timestop"));
let stopleft = Number(searchParams.get("numberstop"));
let stopminute = Number(searchParams.get("stopminute"));
let boxVisible = false; // Variable pour suivre l'état

document.getElementById("stopleft").innerHTML = stopleft;

let secondes = 0;
let interval;

const displayTime = () => {
  let heureString = rtimehour < 10 ? "0" + rtimehour : rtimehour;
  let minuteString = rtimeminute < 10 ? "0" + rtimeminute : rtimeminute;
  let secondeString = secondes < 10 ? "0" + secondes : secondes;
  document.getElementById(
    "time"
  ).textContent = `${heureString} h ${minuteString} min ${secondeString} s`;
};

const countDown = () => {
  if (secondes > 0) {
    secondes--;
  } else if (rtimeminute > 0) {
    rtimeminute--;
    secondes = 59;
  } else if (rtimehour > 0) {
    rtimehour--;
    rtimeminute = 59;
    secondes = 59;
  } else {
    clearInterval(interval);
    return;
  }
  displayTime();
};
interval = setInterval(countDown, 1000);
displayTime();

let intervalMinute;

const displayTimeMinute = () => {
  let minuteStringMinute = timestop < 10 ? "0" + timestop : timestop;
  let secondeStringMinute = stopminute < 10 ? "0" + stopminute : stopminute;
  document.getElementById(
    "stoptimer"
  ).textContent = `${minuteStringMinute} min ${secondeStringMinute} s`;
};

const countDownMinute = () => {
  if (stopminute > 0) {
    stopminute--;
  } else if (timestop > 0) {
    timestop--;
    stopminute = 59;
  } else {
    clearInterval(intervalMinute);
    return;
  }
  displayTimeMinute();
};

intervalMinute = setInterval(countDownMinute, 1000);
displayTimeMinute();

// 2 Part

function blinkstoptimer() {
  let stoptimerelement = document.getElementById("stoptimer");
  if (stoptimerelement) {
    stoptimerelement.style.color = "red";
    setTimeout(() => {
      stoptimerelement.style.color = "white";
    }, 500);
    if (stopminute === 0) {
      stoptimerelement.style.color = "white";
    }
  }
}

// Fonction qui vérifie les conditions en boucle
function checkConditions() {
  console.log("timestop:", timestop, "stopminute:", stopminute);

  if (timestop === 0 && stopminute === 0) {
    console.log("test");
    let box = document.getElementById("box");
    box.style.display = "flex";
    boxVisible = true;
  }

  if (
    rtimehour === 0 &&
    rtimeminute === 0 &&
    timestop === 0 &&
    stopleft === 0 &&
    stopminute === 0
  ) {
    clearInterval(loopInterval);
    return;
  }

  if (timestop === 0 && stopminute === 5) {
    setInterval(blinkstoptimer, 1200);
  }
}

// Gestion de l'événement clavier
document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && boxVisible) {
    event.preventDefault();
    let box = document.getElementById("box");
    if (box) {
      box.style.display = "none";
      boxVisible = false;
    }
  }
});

// Exécution de checkConditions toutes les 500 ms
let loopInterval = setInterval(checkConditions, 500);
