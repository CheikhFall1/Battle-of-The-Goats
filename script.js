/* Declare variables below to save the different sections (divs) of your story*/

let title = document.querySelector(".title")
let storyOpening = document.querySelector(".story-opening")
let buttons = document.querySelector(".buttons")
let optionOneScreen = document.querySelector(".option-one-screen")
let optionTwoScreen = document.querySelector(".option-two-screen")
let optionOneEnd = document.querySelector(".option-one-end")
let optionTwoEnd = document.querySelector(".option-two-end")
let optionOneButton = document.querySelector(".option-one")
let optionTwoButton = document.querySelector(".option-two")
let optionKickButton = document.querySelector(".option-kick")
let optionShootButton = document.querySelector(".option-shoot")

/*
How to change screens
1.) Get your button variable and the screen variable
ex: button variable is optionOneButton, screen is storyOpening
2.) Get the screen variable that you want to appear depending on the button clicked
ex: I want optionOneButton to go to optionOneScreen
3.) In the onclick function of the button, set display none to current screen, and set display block to desired screen
*/

optionOneButton.onclick = function() {
  storyOpening.style.display = "none"
  optionOneScreen.style.display = "block"
}

optionKickButton.onclick = function() {
  optionOneScreen.style.display = "none"
  optionOneEnd.style.display = "block"
}
optionTwoButton.onclick = function() {
  storyOpening.style.display = "none"
  optionTwoScreen.style.display = "block"
}
optionShootButton.onclick = function () {
  optionTwoScreen.style.display = "none"
  optionTwoEnd.style.display = "block"
}
optionOneScreen.style.display = "none"

optionTwoScreen.style.display = "none"

optionOneEnd.style.display = "none"

optionTwoEnd.style.display = "none"




















/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
