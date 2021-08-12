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
  } else if (input.innerText.substring(6) === "--blog") {
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
aboutFlag = function () {
  window.open("about.html", "_self");
};
homeFlag = function () {
  window.open("index.html", "_self");
};
helpFlag = function () {
  container.appendChild(options);
};

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    if (!checkCommand()) {
      //prompt command + "command not found"
      alert("Command not found");
    } else if (checkCommand() && checkFlag() === 1) {
      //navigate to the about me page
      aboutFlag();
    } else if (checkCommand() && checkFlag() === 2) {
      //navigate to the blog
      alert("blog flag worked");
    } else if (checkCommand() && checkFlag() === 3) {
      //navigate to the contact page
      alert("contact flag worked");
    } else if (checkCommand() && checkFlag() === 4) {
      //navigate to the gui
      alert("gui flag worked");
    } else if (checkCommand() && checkFlag() === 5) {
      //navigate to the authors page
      alert("hilal flag worked");
    } else if (checkCommand() && checkFlag() === 6) {
      helpFlag();
    } else if (checkCommand() && checkFlag() === 7) {
      homeFlag();
    }
  }
});
