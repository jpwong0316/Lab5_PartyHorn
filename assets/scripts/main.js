// main.js

// TODO

var volNum = document.getElementById("volume-number");
var volSli = document.getElementById("volume-slider");

volNum.addEventListener("change", sliToNum);
volSli.addEventListener("change", numToSli);

function numToSli() {
    volNum.value = volSli.value;
}
function sliToNum() {
    volSli.value = volNum.value;
}

var horn = document.getElementById("horn-sound");
horn.volume = volNum/100;

var icon = document.getElementById("volume-image");
horn.addEventListener("volume-change", changeIcon);

function changeIcon() {
    if (volNum.value <= 100 && volNum.value >= 67) {
        icon.src = "./assets/media/icons/volume-level-3.svg";
        icon.alt = "Max Volume";
        button.disabled = false;
    }
    else if (volNum.value < 67 && volNum.value >= 34) {
        icon.src = "./assets/media/icons/volume-level-2.svg";
        icon.alt = "Medium Volume";
        button.disabled = false;
    }
    else if (volNum.value < 34 && volNum.value >= 1) {
        icon.src = "./assets/media/icons/volume-level-1.svg";
        icon.alt = "Low Volume";
        button.disabled = false;
    }
    else if (volNum.value == 0) {
        icon.src = "./assets/media/icons/volume-level-0.svg";
        icon.alt = "No Volume";
        button.disabled = true;
    }
}

var sndImg = document.getElementById("sound-image");
var radio = document.getElementById("radio-air-horn");
radio.addEventListener("change", changeHorn);

function changeHorn() {
    if (radio.label == "Air Horn") {
        sndImg.src = "./assets/media/images/air-horn.svg";
        sndImg.alt = "Air Horn";
        horn.src = "./assets/media/audio/air-horn.mp3";
    }
    else if (radio.label == "Car Horn") {
        sndImg.src = "./assets/media/images/car.svg";
        sndImg.alt = "Car Horn";
        horn.src = "./assets/media/audio/car-horn.mp3";
    }
    else if (radio.label == "Party Horn") {
        sndImg.src = "./assets/media/images/party-horn.svg";        
        sndImg.alt = "Party Horn";
        horn.src = "./assets/media/audio/party-horn.mp3";
    }
}

var button = document.getElementById("honk-btn");
button.addEventListener("click", honk);

function honk() {
    horn.autoplay = true;
}


