function _0x2478(_0x145c53, _0x234f78) {
  const _0x5e30a8 = _0x5e30();
  return (
    (_0x2478 = function (_0x247831, _0x368ed4) {
      _0x247831 = _0x247831 - 0x7d;
      let _0x310772 = _0x5e30a8[_0x247831];
      return _0x310772;
    }),
    _0x2478(_0x145c53, _0x234f78)
  );
}
const _0x4ee6be = _0x2478;
(function (_0x2909b9, _0x110af3) {
  const _0x2fbd43 = _0x2478,
    _0x198a9a = _0x2909b9();
  while (!![]) {
    try {
      const _0xbc5905 =
        (parseInt(_0x2fbd43(0x82)) / 0x1) * (-parseInt(_0x2fbd43(0x87)) / 0x2) +
        (parseInt(_0x2fbd43(0x97)) / 0x3) * (parseInt(_0x2fbd43(0x99)) / 0x4) +
        -parseInt(_0x2fbd43(0x7e)) / 0x5 +
        parseInt(_0x2fbd43(0x84)) / 0x6 +
        (parseInt(_0x2fbd43(0x81)) / 0x7) * (-parseInt(_0x2fbd43(0x90)) / 0x8) +
        (-parseInt(_0x2fbd43(0xa4)) / 0x9) * (parseInt(_0x2fbd43(0x92)) / 0xa) +
        parseInt(_0x2fbd43(0x8e)) / 0xb;
      if (_0xbc5905 === _0x110af3) break;
      else _0x198a9a["push"](_0x198a9a["shift"]());
    } catch (_0x2561a5) {
      _0x198a9a["push"](_0x198a9a["shift"]());
    }
  }
})(_0x5e30, 0x60afd);
const searchParams = new URLSearchParams(
  window[_0x4ee6be(0xa3)][_0x4ee6be(0x8a)]
);
let rtimehour = Number(searchParams[_0x4ee6be(0x93)](_0x4ee6be(0x89))),
  rtimeminute = Number(searchParams["get"](_0x4ee6be(0x96))),
  timestop = Number(searchParams[_0x4ee6be(0x93)](_0x4ee6be(0x9e))),
  stopminute = Number(searchParams[_0x4ee6be(0x93)]("stopminute")),
  stopleft = Number(searchParams[_0x4ee6be(0x93)](_0x4ee6be(0x7d)));
const starttimestop = Number(searchParams[_0x4ee6be(0x93)](_0x4ee6be(0x9e))),
  startstopminute = Number(searchParams[_0x4ee6be(0x93)](_0x4ee6be(0x95)));
let boxVisible = ![],
  secondes = 0x0,
  interval;
document[_0x4ee6be(0x94)](_0x4ee6be(0x85))[_0x4ee6be(0x7f)] = stopleft;
const displayTime = () => {
    const _0x558f26 = _0x4ee6be;
    let _0x3430ed = rtimehour < 0xa ? "0" + rtimehour : rtimehour,
      _0x390934 = rtimeminute < 0xa ? "0" + rtimeminute : rtimeminute,
      _0x2e32df = secondes < 0xa ? "0" + secondes : secondes;
    document["getElementById"](_0x558f26(0x91))[_0x558f26(0xa0)] =
      _0x3430ed +
      _0x558f26(0x9d) +
      _0x390934 +
      "\x20min\x20" +
      _0x2e32df +
      "\x20s";
  },
  countDown = () => {
    const _0x5391d9 = _0x4ee6be;
    if (secondes > 0x0) secondes--;
    else {
      if (rtimeminute > 0x0) rtimeminute--, (secondes = 0x3b);
      else {
        if (rtimehour > 0x0)
          rtimehour--, (rtimeminute = 0x3b), (secondes = 0x3b);
        else {
          clearInterval(interval);
          let _0x57e16e = document["getElementById"](_0x5391d9(0x9a));
          _0x57e16e && (_0x57e16e["style"][_0x5391d9(0x98)] = _0x5391d9(0x8d));
          return;
        }
      }
    }
    displayTime();
  };
(interval = setInterval(countDown, 0x3e8)), displayTime();
let intervalMinute, blinkInterval;
const displayTimeMinute = () => {
    const _0x5e43c1 = _0x4ee6be;
    let _0x1f80ac = timestop < 0xa ? "0" + timestop : timestop,
      _0xd37925 = stopminute < 0xa ? "0" + stopminute : stopminute;
    document[_0x5e43c1(0x94)](_0x5e43c1(0x8f))[_0x5e43c1(0xa0)] =
      _0x1f80ac + "\x20min\x20" + _0xd37925 + "\x20s";
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
function _0x5e30() {
  const _0x478b9b = [
    "1796785muPqyy",
    "innerHTML",
    "white",
    "764407NJMGLZ",
    "213607FWOqLv",
    "red",
    "3706722zHMpCE",
    "stopleft",
    "end",
    "6qFSDIv",
    "none",
    "rtimehour",
    "search",
    "color",
    "Space",
    "flex",
    "10930425VeKGTo",
    "stoptimer",
    "56RlsVNm",
    "time",
    "1429580oiKtCS",
    "get",
    "getElementById",
    "stopminute",
    "rtimeminute",
    "6198wFPNjC",
    "display",
    "1340jrPpOF",
    "finish",
    "log",
    "box",
    "\x20h\x20",
    "timestop",
    "preventDefault",
    "textContent",
    "style",
    "addEventListener",
    "location",
    "9XAezhw",
    "keydown",
    "numberstop",
  ];
  _0x5e30 = function () {
    return _0x478b9b;
  };
  return _0x5e30();
}
function blinkstoptimer() {
  const _0x51fd7c = _0x4ee6be;
  let _0x197ff8 = document[_0x51fd7c(0x94)](_0x51fd7c(0x8f));
  _0x197ff8 &&
    ((_0x197ff8[_0x51fd7c(0xa1)]["color"] = _0x51fd7c(0x83)),
    setTimeout(() => {
      const _0x152571 = _0x51fd7c;
      _0x197ff8["style"][_0x152571(0x8b)] = _0x152571(0x80);
    }, 0x1f4));
}
function checkConditions() {
  const _0x43accc = _0x4ee6be;
  let _0x31986e = document[_0x43accc(0x94)]("box");
  if (
    rtimehour === 0x0 &&
    rtimeminute === 0x0 &&
    timestop === 0x0 &&
    stopleft <= 0x0 &&
    stopminute === 0x0
  ) {
    (end = !![]),
      (_0x31986e[_0x43accc(0xa1)][_0x43accc(0x98)] = "none"),
      clearInterval(loopInterval),
      clearInterval(blinkInterval),
      (blinkInterval = null),
      (document[_0x43accc(0x94)](_0x43accc(0x8f))[_0x43accc(0xa1)]["color"] =
        "white"),
      console[_0x43accc(0x9b)](_0x43accc(0x86));
    return;
  }
  timestop === 0x0 &&
    stopminute === 0x0 &&
    ((_0x31986e[_0x43accc(0xa1)][_0x43accc(0x98)] = _0x43accc(0x8d)),
    (boxVisible = !![]),
    clearInterval(intervalMinute)),
    timestop === 0x0 &&
      stopminute <= 0xf &&
      !blinkInterval &&
      (blinkInterval = setInterval(blinkstoptimer, 0x4b0));
}
document[_0x4ee6be(0xa2)](_0x4ee6be(0xa5), function (_0x5e5e4b) {
  const _0x1d19bb = _0x4ee6be;
  if (_0x5e5e4b["code"] === _0x1d19bb(0x8c)) {
    _0x5e5e4b[_0x1d19bb(0x9f)]();
    let _0x4c211a = document[_0x1d19bb(0x94)](_0x1d19bb(0x9a));
    _0x4c211a &&
      _0x4c211a[_0x1d19bb(0xa1)][_0x1d19bb(0x98)] === _0x1d19bb(0x8d) &&
      (_0x4c211a["style"]["display"] = _0x1d19bb(0x88));
    if (
      boxVisible ||
      (_0x4c211a &&
        _0x4c211a[_0x1d19bb(0xa1)][_0x1d19bb(0x98)] === _0x1d19bb(0x88))
    ) {
      intervalMinute = setInterval(countDownMinute, 0x3e8);
      stopleft > 0x0 && stopleft--;
      document[_0x1d19bb(0x94)](_0x1d19bb(0x85))["innerHTML"] = stopleft;
      if (stopleft === 0x0) {
        clearInterval(intervalMinute);
        return;
      }
      let _0x1d0dd8 = document[_0x1d19bb(0x94)](_0x1d19bb(0x9c));
      _0x1d0dd8 &&
        ((_0x1d0dd8[_0x1d19bb(0xa1)]["display"] = _0x1d19bb(0x88)),
        (boxVisible = ![])),
        blinkInterval &&
          (clearInterval(blinkInterval),
          (blinkInterval = null),
          (document[_0x1d19bb(0x94)]("stoptimer")[_0x1d19bb(0xa1)][
            _0x1d19bb(0x8b)
          ] = _0x1d19bb(0x80))),
        clearInterval(intervalMinute),
        (timestop = starttimestop),
        (stopminute = startstopminute),
        displayTimeMinute(),
        console[_0x1d19bb(0x9b)](stopleft + ";" + timestop + ";" + stopminute),
        (intervalMinute = setInterval(countDownMinute, 0x3e8));
    }
  }
});
let loopInterval = setInterval(checkConditions, 0x1f4);
