document.getElementById("submit").onclick = function () {
  let rtimehour = document.getElementById("rtimehour").value;
  let rtimeminute = document.getElementById("rtimeminute").value;
  let timestop = document.getElementById("timestop").value;
  let numberstop = document.getElementById("numberstop").value;
  window.location.replace(
    `calculator.html?rtimehour=${rtimehour}&rtimeminute=${rtimeminute}&timestop=${timestop}&numberstop=${numberstop}`
  );
};
