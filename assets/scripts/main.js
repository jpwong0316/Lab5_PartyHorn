// main.js

// TODO

var volNum = document.getElementById("volume-number");
var volSli = document.getElementById("volume-slider");

volNum.addEventListener("change", sliToNum);
volSli.addEventListener("change", numToSli);

function numToSli() {
    volNum.value = volSli.value;
    horn.volume = volNum.valueAsNumber/100;
}
function sliToNum() {
    volSli.value = volNum.value;
    horn.volume = volSli.valueAsNumber/100;
}

var horn = document.getElementById("horn-sound");

var icon = document.getElementById("volume-image");
var button = document.getElementById("honk-btn");
horn.addEventListener("volume-change", changeIcon);

function changeIcon() {
    if (volNum.valueAsNumber <= 100 && volNum.valueAsNumber >= 67) {
        icon.src = "./assets/media/icons/volume-level-3.svg";
        icon.alt = "Max Volume";
        button.disabled = false;
    }
    else if (volNum.valueAsNumber < 67 && volNum.valueAsNumber >= 34) {
        icon.src = "./assets/media/icons/volume-level-2.svg";
        icon.alt = "Medium Volume";
        button.disabled = false;
    }
    else if (volNum.valueAsNumber < 34 && volNum.valueAsNumber >= 1) {
        icon.src = "./assets/media/icons/volume-level-1.svg";
        icon.alt = "Low Volume";
        button.disabled = false;
    }
    else if (volNum.valueAsNumber == 0) {
        icon.src = "./assets/media/icons/volume-level-0.svg";
        icon.alt = "No Volume";
        button.disabled = true;
    }
}

var sndImg = document.getElementById("sound-image");
var radio = document.getElementsByName("radio-sound");
radio.addEventListener("change", changeHorn);

function changeHorn() {
    if (radio[0].checked == true) {
        sndImg.src = "./assets/media/images/air-horn.svg";
        sndImg.alt = "Air Horn";
        horn.src = "./assets/media/audio/air-horn.mp3";
    }
    else if (radio[1].checked == true) {
        sndImg.src = "./assets/media/images/car.svg";
        sndImg.alt = "Car Horn";
        horn.src = "./assets/media/audio/car-horn.mp3";
    }
    else if (radio[2].checked == true) {
        sndImg.src = "./assets/media/images/party-horn.svg";        
        sndImg.alt = "Party Horn";
        horn.src = "./assets/media/audio/party-horn.mp3";
    }
}

button.addEventListener("click", honk);

function honk() {
    horn.play();
}


