var programCommand = "darcy";
var container = document.getElementsByClassName("container")[0];
var input;
var msg = document.createElement("p");
var msgText = document.createTextNode(" ");
msg.appendChild(msgText);

var createCl = function () {
  var cl = document.createElement("P");
  var bold = document.createElement("span");
  var boldText = document.createTextNode("fitzdarcy@home:~$ ");
  bold.appendChild(boldText);
  bold.style.color = "blue";
  var i = document.createElement("span");
  i.tabIndex = "0";
  i.contentEditable = "true";
  i.style.outline = "none";
  i.className = "input";
  cl.appendChild(bold);
  cl.appendChild(i);
  container.appendChild(cl);
  return i;
};
input = createCl();

//Check if program command is typed correctly
checkCommand = function (i) {
  if (i.innerText.substring(0, 5).includes(programCommand)) {
    return true;
  }
  return false;
};
//check which flag is typed
checkFlag = function (i) {
  switch (i.innerText.substring(6)) {
    case "--about":
      return 1;
    case "--quotes":
      return 2;
    case "--contact":
      return 3;
    case "--gui":
      return 4;
    case "--hilal":
      return 5;
    case "--help":
      return 6;
    case "--home":
      return 7;
    case "--hack":
      return 8;
  }
};

runFlag = function (e) {
  window.open(e, "_self");
};
notFound = function (type, e) {
  if (type === "flag") {
    msgText.textContent =
      "darcy: unrecognized option '" +
      e +
      "' Try 'darcy --help' for more information. ";
  } else if (type === "command") {
    msgText.textContent = e + ": command not found";
  }
  container.appendChild(msg);
  input.innerText = "";
};

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    e.preventDefault();

    if (!checkCommand(input)) {
      //command not found

      notFound("command", input.innerText);
    } else if (checkCommand(input)) {
      switch (checkFlag(input)) {
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
          runFlag("help.html");
          break;
        case 7:
          runFlag("index.html");
        case 8:
          runFlag("hack.html");
        default:
          notFound("flag", input.innerText.substring(6));
      }
    }
  }
});
