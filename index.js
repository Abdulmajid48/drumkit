let noOfDrums = document.querySelectorAll(".drum").length;

// detect button sounds
for (let i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;

    // this.style.color="green";
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
// detect keypress
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// let audio=new Audio("sounds/tom-1.mp3");
// audio.play();

/*You can also use anonymous code like this. notice how clickme is absent

for (let i=0; i<noOfDrums; i++) {
 document.querySelectorAll(".drum").addEventListner("click", function (){
    alert("hello")
}): */

// function add (num1, num2){
//     return num1+num2
// }

// function sub (num1, num2){
//     return num1-num2
// }
// function mul (num1, num2){
//     return num1*num2
// }
// function div (num1, num2){
//     return num1/num2
// }

// function calculator (num1, num2, operator){
//     return operator(num1, num2)

// }

// calculator(num1, num2, add)

// let tim = {
//     name:"tim",
//     age:12,
//     class:3
// };

// Advance Object --- Cnstrutor function
// function BellBoy(name, age, classy, city ){
//     this.name= name ;
//     this.age= age;
//     this.classy=classy;
//     this.city= city;
//     }

//     let boy= new Bellboy("goat", 13, "jss2", "abuja")
