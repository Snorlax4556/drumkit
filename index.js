
function playSound(key) {
    var audio;
    switch (key) {
        case 'w': audio = new Audio("sounds/tom1.mp3"); break;
        case 'a': audio = new Audio("sounds/tom2.mp3"); break;
        case 's': audio = new Audio("sounds/tom3.mp3"); break;
        case 'd': audio = new Audio("sounds/tom4.mp3"); break;
        case 'j': audio = new Audio("sounds/crash.mp3"); break;
        case 'k': audio = new Audio("sounds/kick.mp3"); break;
        case 'l': audio = new Audio("sounds/snare.mp3"); break;
        default: audio = new Audio("sounds/beep.mp3");
    }
    audio.play();
}
for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    document.addEventListener("keydown", function (x, text) {
        handleKeyPress(x);
    });

}

function handleClick() {
    var key = this.innerHTML;
    playSound(key);
    buttonAnimation(key);
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100)
}
function handleKeyPress(x) {
    var key = x.key;
    playSound(key);
    buttonAnimation(key);
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100)
}

function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
}