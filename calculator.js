const searchParams = new URLSearchParams(window.location.search);

let rtimehour = Number(searchParams.get("rtimehour"));
let rtimeminute = Number(searchParams.get("rtimeminute"));
let timestop = Number(searchParams.get("timestop"));
let stopminute = Number(searchParams.get("stopminute"));
let stopleft = Number(searchParams.get("numberstop"));
const starttimestop = Number(searchParams.get("timestop"));
const startstopminute = Number(searchParams.get("stopminute"));
let boxVisible = false; // Variable pour suivre l'état

let secondes = 0;
let interval;

document.getElementById("stopleft").innerHTML = stopleft;

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
let blinkInterval; // Stocke l'intervalle de clignotement

// Stoptimer
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

// Clignotement du stoptimer
function blinkstoptimer() {
  let stoptimerelement = document.getElementById("stoptimer");
  if (stoptimerelement) {
    stoptimerelement.style.color = "red";
    setTimeout(() => {
      stoptimerelement.style.color = "white";
    }, 500);
  }
}

function checkConditions() {
  let box = document.getElementById("box");

  if (
    rtimehour === 0 &&
    rtimeminute === 0 &&
    timestop === 0 &&
    stopleft <= 0 && // Correction ici
    stopminute === 0
  ) {
    box.style.display = "none";
    console.log("end");
    clearInterval(blinkInterval);
    blinkInterval = null;
    document.getElementById("stoptimer").style.color = "white";
    clearInterval(loopInterval);
    clearInterval(countDownMinute);
    return;
  }

  if (timestop === 0 && stopminute === 0) {
    box.style.display = "flex";
    boxVisible = true;
    clearInterval(intervalMinute);
  }

  if (timestop === 0 && stopminute <= 15) {
    if (!blinkInterval) {
      blinkInterval = setInterval(blinkstoptimer, 1200);
    }
  }
}

// Gestion de l'événement clavier
document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && boxVisible) {
    event.preventDefault();

    // Décrémenter `stopleft` mais s'assurer qu'il ne devient pas négatif
    if (stopleft > 0) {
      stopleft--;
    }

    document.getElementById("stopleft").innerHTML = stopleft;
    let box = document.getElementById("box");

    if (box) {
      box.style.display = "none";
      boxVisible = false;
    }

    // Arrêter le clignotement après l’appui sur espace
    if (blinkInterval) {
      clearInterval(blinkInterval);
      blinkInterval = null;
      document.getElementById("stoptimer").style.color = "white"; // Remettre en blanc
    }

    // Réinitialisation du timer d'arrêt
    clearInterval(intervalMinute); // On arrête l'ancien intervalle

    // Réinitialisation des valeurs
    timestop = starttimestop;
    stopminute = startstopminute;
    displayTimeMinute();
    if (stopleft === 0) {
      countDownMinute();
      return;
    }
    console.log(stopleft + ";" + timestop + ";" + stopminute);

    setInterval(countDownMinute, 1000);
  }
});

// Exécution de checkConditions toutes les 500 ms
let loopInterval = setInterval(checkConditions, 500);
