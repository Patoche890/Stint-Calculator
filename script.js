document.getElementById("submit").onclick = function () {
  let rtimehour = document.getElementById("rtimehour").value;
  let rtimeminute = document.getElementById("rtimeminute").value;
  let timestop = document.getElementById("timestop").value;
  let numberstop = document.getElementById("numberstop").value;
  let stopminute = document.getElementById("stopminute").value;
  window.location.replace(
    `calculator.html?rtimehour=${rtimehour}&rtimeminute=${rtimeminute}&timestop=${timestop}&numberstop=${numberstop}&stopminute=${stopminute}`
  );
  //console.log(rtimeminute, rtimehour, timestop, stopminute, numberstop);
};
