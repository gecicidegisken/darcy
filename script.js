var input = document.getElementById("input");
var programCommand = "darcy";
var options = document.getElementsByClassName("options")[0];
var container = document.getElementById("container");

checkCommand = function () {
  if (input.innerText.substring(0, 5).includes(programCommand)) {
    return true;
  }
  return false;
};
checkFlag = function () {
  if (input.innerText.substring(6) === "--about") {
    return 1;
  } else if (input.innerText.substring(6) === "--quotes") {
    return 2;
  } else if (input.innerText.substring(6) === "--contact") {
    return 3;
  } else if (input.innerText.substring(6) === "--gui") {
    return 4;
  } else if (input.innerText.substring(6) === "--hilal") {
    return 5;
  } else if (input.innerText.substring(6) === "--help") {
    return 6;
  } else if (input.innerText.substring(6) === "--home") {
    return 7;
  }
};

runFlag = function (e) {
  window.open(e, "_self");
};

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    if (!checkCommand()) {
      //prompt command + "command not found"
      alert("Command not found");
    } else if (checkCommand()) {
      switch (checkFlag()) {
        case 1:
          runFlag("about.html");
          break;
        case 2:
          runFlag("quotes.html");
          break;
        case 3:
          runFlag("contact.html");
          break;
        case 4:
          runFlag();
          break;
        case 5:
          runFlag("developer.html");
          break;
        case 6:
          runFlag();
          break;
        case 7:
          runFlag("index.html");
      }
    }
  }
});
