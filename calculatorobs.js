const _0x24a121 = _0x1b9f;
function _0x2dd3() {
  const _0x367bf0 = [
    "red",
    "Space",
    "1462776LrKcQV",
    "innerHTML",
    "519924teUbmJ",
    "10277751UKZjbl",
    "27oKxCvi",
    "stoptimer",
    "textContent",
    "getElementById",
    "search",
    "location",
    "get",
    "white",
    "box",
    "526610KNJArO",
    "style",
    "timestop",
    "5IIxHiu",
    "none",
    "738797bgJSNL",
    "1383196ELuqHh",
    "\x20h\x20",
    "848bDZQOA",
    "flex",
    "68887hrjGkP",
    "color",
    "3elSBni",
    "log",
    "display",
    "\x20min\x20",
    "rtimeminute",
    "rtimehour",
    "time",
  ];
  _0x2dd3 = function () {
    return _0x367bf0;
  };
  return _0x2dd3();
}
(function (_0x512ba7, _0x252417) {
  const _0x1d8df1 = _0x1b9f,
    _0x2a1160 = _0x512ba7();
  while (!![]) {
    try {
      const _0x291a63 =
        parseInt(_0x1d8df1(0x159)) / 0x1 +
        (parseInt(_0x1d8df1(0x16b)) / 0x2) *
          (-parseInt(_0x1d8df1(0x160)) / 0x3) +
        parseInt(_0x1d8df1(0x15a)) / 0x4 +
        (parseInt(_0x1d8df1(0x157)) / 0x5) *
          (-parseInt(_0x1d8df1(0x169)) / 0x6) +
        (parseInt(_0x1d8df1(0x15e)) / 0x7) *
          (parseInt(_0x1d8df1(0x15c)) / 0x8) +
        (parseInt(_0x1d8df1(0x16d)) / 0x9) *
          (-parseInt(_0x1d8df1(0x154)) / 0xa) +
        -parseInt(_0x1d8df1(0x16c)) / 0xb;
      if (_0x291a63 === _0x252417) break;
      else _0x2a1160["push"](_0x2a1160["shift"]());
    } catch (_0x161835) {
      _0x2a1160["push"](_0x2a1160["shift"]());
    }
  }
})(_0x2dd3, 0x81ccc);
const searchParams = new URLSearchParams(
  window[_0x24a121(0x172)][_0x24a121(0x171)]
);
let rtimehour = Number(searchParams[_0x24a121(0x173)](_0x24a121(0x165))),
  rtimeminute = Number(searchParams[_0x24a121(0x173)](_0x24a121(0x164))),
  timestop = Number(searchParams["get"](_0x24a121(0x156))),
  stopminute = Number(searchParams["get"]("stopminute")),
  stopleft = Number(searchParams[_0x24a121(0x173)]("numberstop"));
function _0x1b9f(_0x32ad0d, _0x458021) {
  const _0x2dd343 = _0x2dd3();
  return (
    (_0x1b9f = function (_0x1b9f2d, _0x2b0efe) {
      _0x1b9f2d = _0x1b9f2d - 0x152;
      let _0x3c1ca3 = _0x2dd343[_0x1b9f2d];
      return _0x3c1ca3;
    }),
    _0x1b9f(_0x32ad0d, _0x458021)
  );
}
const starttimestop = Number(searchParams[_0x24a121(0x173)](_0x24a121(0x156))),
  startstopminute = Number(searchParams["get"]("stopminute"));
let boxVisible = ![],
  secondes = 0x0,
  interval;
document[_0x24a121(0x170)]("stopleft")[_0x24a121(0x16a)] = stopleft;
const displayTime = () => {
    const _0xfb743f = _0x24a121;
    let _0x157c45 = rtimehour < 0xa ? "0" + rtimehour : rtimehour,
      _0x27944d = rtimeminute < 0xa ? "0" + rtimeminute : rtimeminute,
      _0x2387ce = secondes < 0xa ? "0" + secondes : secondes;
    document[_0xfb743f(0x170)](_0xfb743f(0x166))[_0xfb743f(0x16f)] =
      _0x157c45 +
      _0xfb743f(0x15b) +
      _0x27944d +
      _0xfb743f(0x163) +
      _0x2387ce +
      "\x20s";
  },
  countDown = () => {
    if (secondes > 0x0) secondes--;
    else {
      if (rtimeminute > 0x0) rtimeminute--, (secondes = 0x3b);
      else {
        if (rtimehour > 0x0)
          rtimehour--, (rtimeminute = 0x3b), (secondes = 0x3b);
        else {
          clearInterval(interval);
          return;
        }
      }
    }
    displayTime();
  };
(interval = setInterval(countDown, 0x3e8)), displayTime();
let intervalMinute, blinkInterval;
const displayTimeMinute = () => {
    const _0x4efbf2 = _0x24a121;
    let _0x1a5d0d = timestop < 0xa ? "0" + timestop : timestop,
      _0x3ce034 = stopminute < 0xa ? "0" + stopminute : stopminute;
    document["getElementById"](_0x4efbf2(0x16e))[_0x4efbf2(0x16f)] =
      _0x1a5d0d + _0x4efbf2(0x163) + _0x3ce034 + "\x20s";
  },
  countDownMinute = () => {
    if (stopminute > 0x0) stopminute--;
    else {
      if (timestop > 0x0) timestop--, (stopminute = 0x3b);
      else {
        clearInterval(intervalMinute);
        return;
      }
    }
    displayTimeMinute();
  };
(intervalMinute = setInterval(countDownMinute, 0x3e8)), displayTimeMinute();
function blinkstoptimer() {
  const _0x1d883e = _0x24a121;
  let _0x1280bf = document["getElementById"](_0x1d883e(0x16e));
  _0x1280bf &&
    ((_0x1280bf["style"][_0x1d883e(0x15f)] = _0x1d883e(0x167)),
    setTimeout(() => {
      const _0x5f0c0d = _0x1d883e;
      _0x1280bf[_0x5f0c0d(0x155)]["color"] = "white";
    }, 0x1f4));
}
function checkConditions() {
  const _0x98232b = _0x24a121;
  let _0x51dbbb = document[_0x98232b(0x170)]("box");
  if (
    rtimehour === 0x0 &&
    rtimeminute === 0x0 &&
    timestop === 0x0 &&
    stopleft <= 0x0 &&
    stopminute === 0x0
  ) {
    (_0x51dbbb["style"][_0x98232b(0x162)] = _0x98232b(0x158)),
      clearInterval(loopInterval),
      clearInterval(blinkInterval),
      (blinkInterval = null),
      (document[_0x98232b(0x170)](_0x98232b(0x16e))[_0x98232b(0x155)][
        _0x98232b(0x15f)
      ] = _0x98232b(0x152));
    return;
  }
  timestop === 0x0 &&
    stopminute === 0x0 &&
    ((_0x51dbbb["style"][_0x98232b(0x162)] = _0x98232b(0x15d)),
    (boxVisible = !![]),
    clearInterval(intervalMinute)),
    timestop === 0x0 &&
      stopminute <= 0xf &&
      !blinkInterval &&
      (blinkInterval = setInterval(blinkstoptimer, 0x4b0));
}
document["addEventListener"]("keydown", function (_0x504d61) {
  const _0x3681cc = _0x24a121;
  if (_0x504d61["code"] === _0x3681cc(0x168) && boxVisible) {
    _0x504d61["preventDefault"](),
      (intervalMinute = setInterval(countDownMinute, 0x3e8));
    stopleft > 0x0 && stopleft--;
    document[_0x3681cc(0x170)]("stopleft")[_0x3681cc(0x16a)] = stopleft;
    if (stopleft === 0x0) {
      clearInterval(intervalMinute);
      return;
    }
    let _0xb38296 = document[_0x3681cc(0x170)](_0x3681cc(0x153));
    _0xb38296 &&
      ((_0xb38296[_0x3681cc(0x155)][_0x3681cc(0x162)] = "none"),
      (boxVisible = ![])),
      blinkInterval &&
        (clearInterval(blinkInterval),
        (blinkInterval = null),
        (document["getElementById"](_0x3681cc(0x16e))["style"][
          _0x3681cc(0x15f)
        ] = _0x3681cc(0x152))),
      clearInterval(intervalMinute),
      (timestop = starttimestop),
      (stopminute = startstopminute),
      displayTimeMinute(),
      console[_0x3681cc(0x161)](stopleft + ";" + timestop + ";" + stopminute),
      (intervalMinute = setInterval(countDownMinute, 0x3e8));
  }
});
let loopInterval = setInterval(checkConditions, 0x1f4);
