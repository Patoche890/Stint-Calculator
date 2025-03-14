const _0x182df4 = _0x1309;
(function (_0x218974, _0x27c81f) {
  const _0x44e515 = _0x1309,
    _0x4726da = _0x218974();
  while (!![]) {
    try {
      const _0x16ebf7 =
        (parseInt(_0x44e515(0x189)) / 0x1) *
          (parseInt(_0x44e515(0x185)) / 0x2) +
        parseInt(_0x44e515(0x187)) / 0x3 +
        (parseInt(_0x44e515(0x17e)) / 0x4) *
          (parseInt(_0x44e515(0x183)) / 0x5) +
        (parseInt(_0x44e515(0x192)) / 0x6) *
          (-parseInt(_0x44e515(0x175)) / 0x7) +
        -parseInt(_0x44e515(0x180)) / 0x8 +
        (-parseInt(_0x44e515(0x190)) / 0x9) *
          (parseInt(_0x44e515(0x17c)) / 0xa) +
        (parseInt(_0x44e515(0x179)) / 0xb) * (parseInt(_0x44e515(0x173)) / 0xc);
      if (_0x16ebf7 === _0x27c81f) break;
      else _0x4726da["push"](_0x4726da["shift"]());
    } catch (_0x286fc0) {
      _0x4726da["push"](_0x4726da["shift"]());
    }
  }
})(_0x45d9, 0xeca19);
const searchParams = new URLSearchParams(window[_0x182df4(0x184)]["search"]);
let rtimehour = Number(searchParams[_0x182df4(0x171)]("rtimehour")),
  rtimeminute = Number(searchParams[_0x182df4(0x171)](_0x182df4(0x18d))),
  timestop = Number(searchParams[_0x182df4(0x171)](_0x182df4(0x193))),
  stopminute = Number(searchParams[_0x182df4(0x171)](_0x182df4(0x176))),
  stopleft = Number(searchParams["get"](_0x182df4(0x178)));
const starttimestop = Number(searchParams[_0x182df4(0x171)](_0x182df4(0x193))),
  startstopminute = Number(searchParams[_0x182df4(0x171)](_0x182df4(0x176)));
let boxVisible = ![],
  secondes = 0x0,
  interval;
function _0x45d9() {
  const _0x38eee8 = [
    "log",
    "none",
    "72950wvuFQF",
    "flex",
    "784652uTBbbs",
    "time",
    "6960304PpIjjI",
    "color",
    "innerHTML",
    "5oyhZLN",
    "location",
    "2dclLLi",
    "Space",
    "2371470jnnAYO",
    "addEventListener",
    "303839XFHGhX",
    "box",
    "textContent",
    "style",
    "rtimeminute",
    "stoptimer",
    "getElementById",
    "450uFKURE",
    "red",
    "1974fRDPUn",
    "timestop",
    "stopleft",
    "\x20h\x20",
    "keydown",
    "white",
    "get",
    "\x20min\x20",
    "404568dDjaZu",
    "preventDefault",
    "16429Hksusc",
    "stopminute",
    "code",
    "numberstop",
    "550pIJczw",
  ];
  _0x45d9 = function () {
    return _0x38eee8;
  };
  return _0x45d9();
}
document[_0x182df4(0x18f)]("stopleft")[_0x182df4(0x182)] = stopleft;
const displayTime = () => {
    const _0x4e16bd = _0x182df4;
    let _0x5ebc5c = rtimehour < 0xa ? "0" + rtimehour : rtimehour,
      _0x3be7e2 = rtimeminute < 0xa ? "0" + rtimeminute : rtimeminute,
      _0x13e4cb = secondes < 0xa ? "0" + secondes : secondes;
    document[_0x4e16bd(0x18f)](_0x4e16bd(0x17f))[_0x4e16bd(0x18b)] =
      _0x5ebc5c +
      _0x4e16bd(0x195) +
      _0x3be7e2 +
      _0x4e16bd(0x172) +
      _0x13e4cb +
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
function _0x1309(_0x5bfbc5, _0x586d4c) {
  const _0x45d9b6 = _0x45d9();
  return (
    (_0x1309 = function (_0x130958, _0x13c570) {
      _0x130958 = _0x130958 - 0x171;
      let _0x80bfd7 = _0x45d9b6[_0x130958];
      return _0x80bfd7;
    }),
    _0x1309(_0x5bfbc5, _0x586d4c)
  );
}
const displayTimeMinute = () => {
    const _0x114db3 = _0x182df4;
    let _0x29eeb8 = timestop < 0xa ? "0" + timestop : timestop,
      _0x425fde = stopminute < 0xa ? "0" + stopminute : stopminute;
    document[_0x114db3(0x18f)](_0x114db3(0x18e))[_0x114db3(0x18b)] =
      _0x29eeb8 + _0x114db3(0x172) + _0x425fde + "\x20s";
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
  const _0x3f3a05 = _0x182df4;
  let _0x69de02 = document[_0x3f3a05(0x18f)](_0x3f3a05(0x18e));
  _0x69de02 &&
    ((_0x69de02[_0x3f3a05(0x18c)][_0x3f3a05(0x181)] = _0x3f3a05(0x191)),
    setTimeout(() => {
      const _0x86a96f = _0x3f3a05;
      _0x69de02[_0x86a96f(0x18c)][_0x86a96f(0x181)] = _0x86a96f(0x197);
    }, 0x1f4));
}
function checkConditions() {
  const _0x3d772b = _0x182df4;
  let _0x2b547c = document[_0x3d772b(0x18f)](_0x3d772b(0x18a));
  if (
    rtimehour === 0x0 &&
    rtimeminute === 0x0 &&
    timestop === 0x0 &&
    stopleft <= 0x0 &&
    stopminute === 0x0
  ) {
    (_0x2b547c[_0x3d772b(0x18c)]["display"] = _0x3d772b(0x17b)),
      clearInterval(loopInterval),
      clearInterval(blinkInterval),
      (blinkInterval = null),
      (document[_0x3d772b(0x18f)]("stoptimer")[_0x3d772b(0x18c)][
        _0x3d772b(0x181)
      ] = _0x3d772b(0x197));
    return;
  }
  timestop === 0x0 &&
    stopminute === 0x0 &&
    ((_0x2b547c[_0x3d772b(0x18c)]["display"] = _0x3d772b(0x17d)),
    (boxVisible = !![]),
    clearInterval(intervalMinute)),
    timestop === 0x0 &&
      stopminute <= 0xf &&
      !blinkInterval &&
      (blinkInterval = setInterval(blinkstoptimer, 0x4b0));
}
document[_0x182df4(0x188)](_0x182df4(0x196), function (_0x457e1b) {
  const _0x11bd90 = _0x182df4;
  if (_0x457e1b[_0x11bd90(0x177)] === _0x11bd90(0x186) && boxVisible) {
    _0x457e1b[_0x11bd90(0x174)]();
    stopleft > 0x0 && stopleft--;
    document[_0x11bd90(0x18f)](_0x11bd90(0x194))[_0x11bd90(0x182)] = stopleft;
    if (stopleft === 0x0) {
      clearInterval(countDownMinute);
      return;
    }
    let _0x53b397 = document["getElementById"](_0x11bd90(0x18a));
    _0x53b397 &&
      ((_0x53b397[_0x11bd90(0x18c)]["display"] = _0x11bd90(0x17b)),
      (boxVisible = ![])),
      blinkInterval &&
        (clearInterval(blinkInterval),
        (blinkInterval = null),
        (document[_0x11bd90(0x18f)](_0x11bd90(0x18e))["style"][
          _0x11bd90(0x181)
        ] = _0x11bd90(0x197))),
      clearInterval(intervalMinute),
      (timestop = starttimestop),
      (stopminute = startstopminute),
      displayTimeMinute(),
      console[_0x11bd90(0x17a)](stopleft + ";" + timestop + ";" + stopminute),
      setInterval(countDownMinute, 0x3e8);
  }
});
let loopInterval = setInterval(checkConditions, 0x1f4);
