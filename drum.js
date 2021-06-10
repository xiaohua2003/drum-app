numberofquery = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofquery; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', function() {
    var buttonInnerHTML = this.innerHTML;
makesound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

  });
}
document.addEventListener("keydown", function(event){
  makesound(event.key);
  buttonAnimation(event.key);

});

function makesound(key) {
  switch (key) {
    case "W":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "J":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "K":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "A":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1. play();
      break;
    case "S":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2. play();
      break;
    case "L":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3. play();
      break;
    case "D":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4. play();
      break;
    default:
      console.log(key);

  }

}

function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+ currentKey);
activeButton.classList.add("pressed");

}
