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

/****** extra tasks *******/

/****** Part One *******/
/* creation of unordered list and addding it into document body */

var ul = document.createElement("ul");
document.body.append(ul);

/****** First LI *******/
/* Creates first LI element and adds it into the unordered list */

var firstLi = document.createElement("li");
ul.append(firstLi);

/* creation and specification of the attributes of the first A element which is nested under the first li element */

var firstA = document.createElement("a");
firstA.setAttribute("id", "home");
firstA.setAttribute("class", "btn");
firstA.setAttribute("href", "default.asp");
firstA.innerHTML = "Home";

/* appends the first A to the first LI element */

firstLi.append(firstA);

/****** Second LI *******/
/* Creates second LI element and adds it into the unordered list */

var secondLi = document.createElement("li");
ul.append(secondLi);

/* creation and specification of the attributes of the second A element which is nested under the second li element */

var secondA = document.createElement("a");
secondA.setAttribute("id", "news");
secondA.setAttribute("class", "btn");
secondA.setAttribute("href", "news.asp");
secondA.innerHTML = "News";

/* appends the second A to the second LI element */

secondLi.append(secondA);

/****** Third LI *******/
/* Creates second LI element and adds it into the unordered list */

var thirdLi = document.createElement("li");
ul.append(thirdLi);

/* creation and specification of the attributes of the third  A element which is nested under the third li element */

var thirdA = document.createElement("a");
thirdA.setAttribute("id", "contact");
thirdA.setAttribute("class", "btn");
thirdA.setAttribute("href", "contact.asp");
thirdA.innerHTML = "Contact";

/* appends the third A to the third LI element */

thirdLi.append(thirdA);

/****** Fourth LI *******/
/* Creates Fourth LI element and adds it into the unordered list */
var fourthLi = document.createElement("li");
ul.append(fourthLi);

/* creation and specification of the attributes of the fourth A element which is nested under the fourth li element */

var fourthA = document.createElement("a");
fourthA.setAttribute("id", "about");
fourthA.setAttribute("class", "btn");
fourthA.setAttribute("href", "#");
fourthA.innerHTML = "About";

/* appends the first A to the first LI element */

fourthLi.append(fourthA);

/****** Part Two *******/

var content = document.createElement("div");
content.setAttribute("id", "content");

/* document.addEventListener("click", function () {
  content.innerHTML = "Welcome!";
});
*/

/* sets the document title to the var definied below */

var titler = document.getElementsByTagName("title")[0];

/* sets the document title to the var definied below */

var loadAbout = function () {
  document.body.appendChild(content);
};

/* Sets the inner html of content to the specified value, however this is only executed when the event listener is called. */

content.innerHTML = "Welcome to my website";

/* sets the display of the document title to none*/

var hide = function () {
  titler.style.display = "none";
};

/* when the about button is clicked is executes the loadAbout and hide functions.*/

document.getElementById("about").addEventListener("click", () => {
  loadAbout();
  hide();
});
