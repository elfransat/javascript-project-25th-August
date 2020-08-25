/* when executes logs console.log and sets background iamge to specified url*/

function startScript() {
  console.log("Hello World");
  document.body.style.backgroundImage = 'url("img/bg.jpg")';
}
/* created event listener which executes startScript when DOM content loads */

document.addEventListener("DOMcontentloaded", startScript());

/* creates a div and sets id to title-wrapper and appends it to the documents body */

var titleWrapper = document.createElement("div");
titleWrapper.setAttribute("id", "title-wrapper");
document.body.appendChild(titleWrapper);

/*  creates h1 variable with id of progress and text that displays ' work under progress' and appends that text under titleWrapper */
var h1 = document.createElement("h1");
h1.setAttribute("id", "progress");
h1.innerHTML = "work under progess...";
titleWrapper.appendChild(h1);

/* sets style of title-wrapper and progress to specifed values */
document.getElementById("title-wrapper").style =
  " top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase; ";

document.getElementById("progress").style =
  "width: fit-content; margin: auto; background: black; color: white; ";
