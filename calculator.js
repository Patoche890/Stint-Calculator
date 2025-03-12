const searchParams = new URLSearchParams(window.location.search);

let rtimehour = Number(searchParams.get("rtimehour"));
let rtimeminute = Number(searchParams.get("rtimeminute"));
let timestop = Number(searchParams.get("timestop"));
let numberstop = Number(searchParams.get("numberstop"));
let stopleft = Number(searchParams.get(numberstop));

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
let secondesMinute = 0;

const displayTimeMinute = () => {
  let minuteStringMinute = timestop < 10 ? "0" + timestop : timestop;
  let secondeStringMinute =
    secondesMinute < 10 ? "0" + secondesMinute : secondesMinute;
  document.getElementById(
    "stoptimer"
  ).textContent = `${minuteStringMinute} min ${secondeStringMinute} s`;
};

const countDownMinute = () => {
  if (secondesMinute > 0) {
    secondesMinute--;
  } else if (timestop > 0) {
    timestop--;
    secondesMinute = 59;
  } else {
    clearInterval(intervalMinute);
    return;
  }
  displayTimeMinute();
};

intervalMinute = setInterval(countDownMinute, 1000);
displayTimeMinute();

document.getElementById("stopleft").innerHTML = stopleft;

if (timestop == 0 && secondesMinute == 0) {
}
